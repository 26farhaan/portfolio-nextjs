import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import { generateJsonFromImage } from "@/libs/gemini";

// Perlu Node.js runtime (pakai Buffer), bukan edge
export const runtime = "nodejs";

interface Category {
  id: number;
  name: string;
}

interface ReceiptResult {
  merchant: string | null;
  total: number | null;
  items: { name: string; price: number }[];
  name: string | null;
  categoryId: number | null;
  splittable: boolean;
}

/** Kategori dikirim FE sebagai string JSON; gagal parse / bentuk aneh dianggap kosong. */
function parseCategories(raw: FormDataEntryValue | null): Category[] {
  if (typeof raw !== "string" || !raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (c): c is Category =>
        typeof c === "object" &&
        c !== null &&
        typeof (c as Category).id === "number" &&
        typeof (c as Category).name === "string"
    );
  } catch {
    return [];
  }
}

function buildPrompt(categories: Category[]): string {
  const categoryList =
    categories.length > 0 ? categories.map((c) => `${c.id} — ${c.name}`).join("\n") : "(kosong — tidak ada kategori)";

  return `Kamu membaca foto struk belanja dari Indonesia.
Balas HANYA dengan JSON valid berbentuk:
{"merchant": string|null, "total": number|null, "items": [{"name": string, "price": number}], "name": string|null, "categoryId": number|null, "splittable": boolean}
- "merchant": nama toko/warung (null jika tidak terbaca)
- "total": grand total dalam rupiah, angka murni tanpa titik/koma (null jika tidak terbaca)
- "items": daftar barang beserta harganya; array kosong jika tidak terbaca

Daftar kategori milik user (format: id — nama):
${categoryList}

Tugas tambahan:
1. "categoryId": pilih SATU id kategori dari daftar di atas yang paling cocok
   dengan isi struk. Jawab HANYA dengan id dari daftar itu. Jika tidak ada yang
   cocok atau daftar kosong, jawab null. Dilarang membuat kategori baru.
2. "name": buat nama catatan singkat & natural dalam bahasa Indonesia (maks 40
   karakter) sesuai jenis transaksinya (contoh: "Belanja di Indomaret",
   "Jajan Chatime", "Bayar Parkir", "Isi Bensin"). Jika ragu, null.
3. "splittable": true hanya jika struk berisi lebih dari satu item belanjaan
   yang bermakna untuk dicatat terpisah; selain itu false (misal struk parkir,
   bensin, top-up, atau tagihan satu baris).

Jangan tambahkan teks lain di luar JSON.`;
}

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

/** Bandingkan password dengan waktu konstan supaya tidak bisa ditebak lewat timing attack. */
function isPasswordValid(input: string): boolean {
  const expected = process.env.GEMINI_API_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * POST /api/gemini
 * Body: multipart/form-data
 *  - image      : file gambar (jpeg/png/webp, maks 5 MB)
 *  - password   : shared secret, harus sama dengan env GEMINI_API_PASSWORD
 *  - categories : (opsional) string JSON array {id, name} kategori aktif user
 * Respons: JSON hasil parse dari jawaban Gemini
 */
export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Body harus multipart/form-data" }, { status: 400 });
  }

  const image = formData.get("image");
  const password = formData.get("password");
  const categories = parseCategories(formData.get("categories"));

  if (typeof password !== "string" || !isPasswordValid(password)) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }
  if (!(image instanceof File)) {
    return NextResponse.json({ error: "Field 'image' (file) wajib diisi" }, { status: 400 });
  }
  if (!ALLOWED_MIME_TYPES.includes(image.type)) {
    return NextResponse.json(
      { error: `Tipe gambar harus salah satu dari: ${ALLOWED_MIME_TYPES.join(", ")}` },
      { status: 400 }
    );
  }
  if (image.size > MAX_IMAGE_SIZE) {
    return NextResponse.json({ error: "Ukuran gambar maksimal 5 MB" }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const data = await generateJsonFromImage<Partial<ReceiptResult>>(buffer, image.type, buildPrompt(categories));

    // categoryId harus benar-benar ada di daftar kategori request ini — id liar dari AI di-null-kan
    const categoryId =
      typeof data.categoryId === "number" && categories.some((c) => c.id === data.categoryId) ? data.categoryId : null;

    return NextResponse.json({
      data: {
        ...data,
        name: typeof data.name === "string" && data.name.trim() ? data.name.trim() : null,
        categoryId,
        splittable: typeof data.splittable === "boolean" ? data.splittable : (data.items?.length ?? 0) > 1,
      },
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: detail }, { status: 500 });
  }
}
