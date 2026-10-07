import { generateJson, type GeminiMedia } from "@/libs/gemini";

/**
 * Parser pengeluaran (app Pepeng) — satu pintu untuk 3 jenis input:
 * - receipt : foto struk  → bisa dirangkum jadi 1 atau dipisah per item
 * - voice   : rekaman suara cerita pengeluaran → selalu dipisah per item
 * - text    : cerita teks bebas                → selalu dipisah per item
 * Semua tipe membalas bentuk yang SAMA (ExpenseParseResult) supaya app cukup punya
 * satu layar konfirmasi.
 */

export type ParseType = "receipt" | "voice" | "text";

export interface Option {
  id: number;
  name: string;
}

export interface ParsedItem {
  name: string;
  price: number;
  /** voice/text: kategori per item (struk memakai categoryId level atas). */
  categoryId: number | null;
  /** voice/text: rekening yang disebut user ("pakai GoPay"), atau null. */
  accountId: number | null;
  /** voice/text: jam yang disebut user, "HH:MM" 24 jam ("jam 7 pagi" → "07:00"), atau null (app pakai jam sekarang). */
  time: string | null;
}

export interface ExpenseParseResult {
  type: ParseType;
  merchant: string | null;
  total: number | null;
  items: ParsedItem[];
  name: string | null;
  categoryId: number | null;
  splittable: boolean;
  /** voice: transkrip ucapan — ditampilkan ke user agar bisa dicek. Lainnya null. */
  transcript: string | null;
}

/** Daftar {id, name} dikirim app sebagai string JSON; gagal parse / bentuk aneh dianggap kosong. */
export function parseOptions(raw: FormDataEntryValue | null): Option[] {
  if (typeof raw !== "string" || !raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (c): c is Option =>
        typeof c === "object" &&
        c !== null &&
        typeof (c as Option).id === "number" &&
        typeof (c as Option).name === "string"
    );
  } catch {
    return [];
  }
}

function optionList(options: Option[], empty: string): string {
  return options.length > 0 ? options.map((o) => `${o.id} — ${o.name}`).join("\n") : `(kosong — ${empty})`;
}

/** id liar dari AI (halusinasi / tidak ada di daftar request ini) di-null-kan. */
function validId(value: unknown, options: Option[]): number | null {
  return typeof value === "number" && options.some((o) => o.id === value) ? value : null;
}

function cleanString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

/** Nominal rupiah: angka bulat positif. String "25000" juga diterima. */
function cleanPrice(value: unknown): number {
  const n = typeof value === "string" ? Number(value.replace(/[^\d]/g, "")) : Number(value);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
}

/** Jam "7:05" / "07:05" (00:00–23:59) → "07:05"; format lain / di luar rentang → null. */
function cleanTime(value: unknown): string | null {
  const m = typeof value === "string" ? value.trim().match(/^(\d{1,2}):(\d{2})$/) : null;
  if (!m || Number(m[1]) > 23 || Number(m[2]) > 59) return null;
  return `${m[1].padStart(2, "0")}:${m[2]}`;
}

function normalizeItems(raw: unknown, categories: Option[], accounts: Option[]): ParsedItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((it): ParsedItem | null => {
      if (typeof it !== "object" || it === null) return null;
      const r = it as Record<string, unknown>;
      const name = cleanString(r.name);
      const price = cleanPrice(r.price);
      if (!name || price <= 0) return null;
      return {
        name: name.slice(0, 60),
        price,
        categoryId: validId(r.categoryId, categories),
        accountId: validId(r.accountId, accounts),
        time: cleanTime(r.time),
      };
    })
    .filter((it): it is ParsedItem => it !== null);
}

/* ---------------------------------- receipt ---------------------------------- */

function receiptPrompt(categories: Option[]): string {
  return `Kamu membaca foto struk belanja dari Indonesia.
Balas HANYA dengan JSON valid berbentuk:
{"merchant": string|null, "total": number|null, "items": [{"name": string, "price": number}], "name": string|null, "categoryId": number|null, "splittable": boolean}
- "merchant": nama toko/warung (null jika tidak terbaca)
- "total": grand total dalam rupiah, angka murni tanpa titik/koma (null jika tidak terbaca)
- "items": daftar barang beserta harganya; array kosong jika tidak terbaca

Daftar kategori milik user (format: id — nama):
${optionList(categories, "tidak ada kategori")}

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

interface RawReceipt {
  merchant?: unknown;
  total?: unknown;
  items?: unknown;
  name?: unknown;
  categoryId?: unknown;
  splittable?: unknown;
}

export async function parseReceipt(image: GeminiMedia, categories: Option[]): Promise<ExpenseParseResult> {
  const data = await generateJson<RawReceipt>(receiptPrompt(categories), { media: image });
  const items = normalizeItems(data.items, [], []);
  const total = cleanPrice(data.total);
  return {
    type: "receipt",
    merchant: cleanString(data.merchant),
    total: total > 0 ? total : null,
    items,
    name: cleanString(data.name),
    categoryId: validId(data.categoryId, categories),
    splittable: typeof data.splittable === "boolean" ? data.splittable : items.length > 1,
    transcript: null,
  };
}

/* ------------------------------- voice & text -------------------------------- */

function storyPrompt(type: "voice" | "text", categories: Option[], accounts: Option[]): string {
  const source =
    type === "voice"
      ? "sebuah REKAMAN SUARA (bahasa Indonesia, bisa campur bahasa daerah/gaul)"
      : "sebuah CERITA TEKS yang ditulis user (blok teks setelah instruksi ini)";
  return `Kamu membantu mencatat pengeluaran harian. Input berupa ${source} yang menceritakan
pengeluaran user. Ekstrak SETIAP pengeluaran sebagai item TERPISAH — jangan dirangkum.

Balas HANYA dengan JSON valid berbentuk:
{"transcript": string|null, "items": [{"name": string, "price": number, "categoryId": number|null, "accountId": number|null, "time": string|null}]}

Aturan:
- "transcript": ${
    type === "voice" ? "tulis transkrip ucapan user apa adanya (bahasa asli, tanpa diringkas)." : "selalu null."
  }
- "name": nama catatan singkat & natural bahasa Indonesia (maks 40 karakter),
  contoh "Makan siang nasi padang", "Kopi susu", "Bayar parkir", "Isi bensin".
- "price": rupiah, angka bulat murni. Pahami penyebutan informal: "25 ribu"/"25rb"/"25k" = 25000,
  "1,5 juta"/"1.5jt" = 1500000, "sejuta" = 1000000, "goceng" = 5000, "ceban" = 10000,
  "gocap" = 50000, "cepek" = 100, "seceng" = 1000. Jika ada jumlah ("2 kopi @18rb"), price = total (36000).
- Lewati item yang nominalnya tidak disebut sama sekali. Abaikan pemasukan (gaji, transfer masuk).
- "categoryId": SATU id dari daftar kategori di bawah yang paling cocok untuk item itu, atau null.
  Dilarang membuat kategori baru.
- "accountId": id rekening dari daftar di bawah HANYA jika user menyebut cara bayar/rekening
  untuk item itu (mis. "pakai GoPay", "dari BCA", "cash/tunai"); selain itu null.
  Jika cara bayar disebut sekali untuk beberapa item, berlakukan ke item-item tersebut.
- "time": jam transaksi format 24 jam "HH:MM" HANYA jika user menyebut jam/waktu untuk item itu
  (mis. "jam 7 pagi" = "07:00", "jam 2 siang" = "14:00", "jam 8 malam" = "20:00", "setengah 1 siang" = "12:30");
  selain itu null. Jangan menebak dari kata umum seperti "tadi", "pagi", atau "siang" tanpa angka jam.
  Jika jam disebut sekali untuk beberapa item, berlakukan ke item-item tersebut.
- Jika tidak ada pengeluaran sama sekali, "items": [].

Daftar kategori (id — nama):
${optionList(categories, "tidak ada kategori")}

Daftar rekening (id — nama):
${optionList(accounts, "tidak ada rekening")}

Jangan tambahkan teks lain di luar JSON.`;
}

interface RawStory {
  transcript?: unknown;
  items?: unknown;
}

export async function parseStory(
  type: "voice" | "text",
  input: { audio?: GeminiMedia; text?: string },
  categories: Option[],
  accounts: Option[]
): Promise<ExpenseParseResult> {
  const data = await generateJson<RawStory>(storyPrompt(type, categories, accounts), {
    media: input.audio,
    userText: input.text ? `CERITA USER:\n${input.text}` : undefined,
  });
  const items = normalizeItems(data.items, categories, accounts);
  return {
    type,
    merchant: null,
    total: items.length > 0 ? items.reduce((sum, it) => sum + it.price, 0) : null,
    items,
    name: null,
    categoryId: null,
    // voice/text tidak bisa dirangkum — app selalu menampilkannya per item.
    splittable: true,
    transcript: type === "voice" ? cleanString(data.transcript) : null,
  };
}
