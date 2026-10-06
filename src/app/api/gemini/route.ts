import { NextRequest } from "next/server";

import { POST as expenseParserPost } from "../expense-parser/route";

// Perlu Node.js runtime (pakai Buffer), bukan edge
export const runtime = "nodejs";

/**
 * POST /api/gemini — DEPRECATED, alias ke /api/expense-parser (type default "receipt").
 * Dipertahankan supaya build app lama yang masih memanggil /gemini tetap jalan.
 * Hapus setelah semua APK sudah memakai /expense-parser.
 */
export async function POST(req: NextRequest) {
  return expenseParserPost(req);
}
