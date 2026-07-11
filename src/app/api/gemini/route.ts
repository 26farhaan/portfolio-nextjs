import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import { generateJsonFromImage } from "@/libs/gemini";

// Perlu Node.js runtime (pakai Buffer), bukan edge
export const runtime = "nodejs";

const PROMPT = `Kamu membaca foto struk belanja dari Indonesia.
Balas HANYA dengan JSON valid berbentuk:
{"merchant": string|null, "total": number|null, "items": [{"name": string, "price": number}]}
- "merchant": nama toko/warung (null jika tidak terbaca)
- "total": grand total dalam rupiah, angka murni tanpa titik/koma (null jika tidak terbaca)
- "items": daftar barang beserta harganya; array kosong jika tidak terbaca
Jangan tambahkan teks lain di luar JSON.`;

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
 *  - image  : file gambar (jpeg/png/webp, maks 5 MB)
 *  - prompt   : instruksi teks untuk Gemini
 *  - password : shared secret, harus sama dengan env GEMINI_API_PASSWORD
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
    const data = await generateJsonFromImage<unknown>(buffer, image.type, PROMPT);
    return NextResponse.json({ data });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: detail }, { status: 500 });
  }
}
