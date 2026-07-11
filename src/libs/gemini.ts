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

/** Kirim gambar + prompt ke Gemini, terima jawaban JSON (sudah di-parse). */
export async function generateJsonFromImage<T>(image: Buffer, mimeType: string, prompt: string): Promise<T> {
  // Interactions API — lihat https://ai.google.dev/gemini-api/docs
  const model = "gemini-3.1-flash-lite";

  console.log(`[gemini] Memanggil ${model} (gambar ${mimeType}, ${(image.length / 1024).toFixed(0)} KB)…`);
  const startedAt = Date.now();

  try {
    const interaction = await getClient().interactions.create({
      model,
      input: [
        { type: "text", text: prompt },
        {
          type: "image",
          data: image.toString("base64"),
          mime_type: mimeType,
        },
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
