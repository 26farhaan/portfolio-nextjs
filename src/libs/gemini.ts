import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | undefined;

/** Client dibuat sekali saat pertama dipakai (bukan saat boot, supaya server tetap bisa jalan tanpa key). */
function getClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY belum diset di environment");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

/** Media opsional yang ikut dikirim bersama prompt (foto struk / rekaman suara). */
export interface GeminiMedia {
  kind: "image" | "audio";
  data: Buffer;
  mimeType: string;
}

/**
 * Kirim prompt (+ teks user / media opsional) ke Gemini, terima jawaban JSON (sudah di-parse).
 * `userText` dikirim sebagai blok terpisah supaya input user (cerita) tidak tercampur instruksi.
 */
export async function generateJson<T>(
  prompt: string,
  options: { media?: GeminiMedia; userText?: string } = {}
): Promise<T> {
  // Interactions API — lihat https://ai.google.dev/gemini-api/docs
  const model = "gemini-3.1-flash-lite";
  const { media, userText } = options;

  const label = media
    ? `${media.kind} ${media.mimeType}, ${(media.data.length / 1024).toFixed(0)} KB`
    : `teks ${userText?.length ?? 0} karakter`;
  console.log(`[gemini] Memanggil ${model} (${label})…`);
  const startedAt = Date.now();

  try {
    const interaction = await getClient().interactions.create({
      model,
      input: [
        { type: "text", text: prompt },
        ...(userText ? [{ type: "text" as const, text: userText }] : []),
        ...(media ? [{ type: media.kind, data: media.data.toString("base64"), mime_type: media.mimeType }] : []),
      ],
      response_format: { type: "text", mime_type: "application/json" },
    });

    const text = interaction.output_text;
    if (!text) {
      throw new Error("Respons Gemini kosong");
    }
    console.log(`[gemini] Selesai dalam ${Date.now() - startedAt} ms`);
    return JSON.parse(text) as T;
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error(`[gemini] Gagal setelah ${Date.now() - startedAt} ms: ${detail}`);
    throw new Error(`Gemini error: ${detail}`);
  }
}
