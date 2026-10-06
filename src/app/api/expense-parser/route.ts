import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import { parseOptions, parseReceipt, parseStory, type ParseType } from "@/libs/expense-parser";

// Perlu Node.js runtime (pakai Buffer), bukan edge
export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const MAX_AUDIO_SIZE = 10 * 1024 * 1024; // 10 MB (~10 menit AAC mono 64 kbps)
/** MIME dari perangkat → MIME yang dikenal Gemini. m4a Android/iOS sering terkirim sebagai audio/mp4. */
const AUDIO_MIME_MAP: Record<string, string> = {
  "audio/m4a": "audio/m4a",
  "audio/x-m4a": "audio/m4a",
  "audio/mp4": "audio/m4a",
  "audio/aac": "audio/aac",
  "audio/mpeg": "audio/mpeg",
  "audio/mp3": "audio/mp3",
  "audio/wav": "audio/wav",
  "audio/x-wav": "audio/wav",
  "audio/ogg": "audio/ogg",
  "audio/webm": "audio/webm",
};

const MAX_TEXT_LENGTH = 1000;

const PARSE_TYPES: ParseType[] = ["receipt", "voice", "text"];

/** Bandingkan password dengan waktu konstan supaya tidak bisa ditebak lewat timing attack. */
function isPasswordValid(input: string): boolean {
  const expected = process.env.GEMINI_API_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

/**
 * POST /api/expense-parser — satu pintu parsing pengeluaran dengan AI.
 * Body: multipart/form-data
 *  - type       : "receipt" | "voice" | "text" (default "receipt" — kompatibel app lama)
 *  - password   : shared secret, harus sama dengan env GEMINI_API_PASSWORD
 *  - categories : (opsional) string JSON array {id, name} kategori aktif user
 *  - accounts   : (opsional, voice/text) string JSON array {id, name} rekening user
 *  - image      : type=receipt — file gambar (jpeg/png/webp, maks 5 MB)
 *  - audio      : type=voice   — file audio (m4a/aac/mp3/wav/ogg/webm, maks 10 MB)
 *  - text       : type=text    — cerita teks bebas (maks 1000 karakter)
 * Respons: { data: ExpenseParseResult } — bentuk sama untuk semua tipe.
 */
export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return badRequest("Body harus multipart/form-data");
  }

  const password = formData.get("password");
  if (typeof password !== "string" || !isPasswordValid(password)) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  const rawType = formData.get("type");
  const type = (typeof rawType === "string" && rawType ? rawType : "receipt") as ParseType;
  if (!PARSE_TYPES.includes(type)) {
    return badRequest(`Field 'type' harus salah satu dari: ${PARSE_TYPES.join(", ")}`);
  }

  const categories = parseOptions(formData.get("categories"));
  const accounts = parseOptions(formData.get("accounts"));

  try {
    if (type === "receipt") {
      const image = formData.get("image");
      if (!(image instanceof File)) return badRequest("Field 'image' (file) wajib diisi");
      if (!ALLOWED_IMAGE_TYPES.includes(image.type)) {
        return badRequest(`Tipe gambar harus salah satu dari: ${ALLOWED_IMAGE_TYPES.join(", ")}`);
      }
      if (image.size > MAX_IMAGE_SIZE) return badRequest("Ukuran gambar maksimal 5 MB");

      const data = await parseReceipt(
        { kind: "image", data: Buffer.from(await image.arrayBuffer()), mimeType: image.type },
        categories
      );
      return NextResponse.json({ data });
    }

    if (type === "voice") {
      const audio = formData.get("audio");
      if (!(audio instanceof File)) return badRequest("Field 'audio' (file) wajib diisi");
      const mimeType = AUDIO_MIME_MAP[audio.type];
      if (!mimeType) {
        return badRequest(`Tipe audio tidak didukung (${audio.type || "kosong"})`);
      }
      if (audio.size > MAX_AUDIO_SIZE) return badRequest("Ukuran audio maksimal 10 MB");

      const data = await parseStory(
        "voice",
        { audio: { kind: "audio", data: Buffer.from(await audio.arrayBuffer()), mimeType } },
        categories,
        accounts
      );
      return NextResponse.json({ data });
    }

    const text = formData.get("text");
    if (typeof text !== "string" || !text.trim()) return badRequest("Field 'text' wajib diisi");
    if (text.length > MAX_TEXT_LENGTH) return badRequest(`Teks maksimal ${MAX_TEXT_LENGTH} karakter`);

    const data = await parseStory("text", { text: text.trim() }, categories, accounts);
    return NextResponse.json({ data });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    // Kuota Gemini habis → teruskan 429 supaya app menampilkan pesan "kuota penuh".
    const status = /\b429\b|RESOURCE_EXHAUSTED|quota/i.test(detail) ? 429 : 500;
    return NextResponse.json({ error: detail }, { status });
  }
}
