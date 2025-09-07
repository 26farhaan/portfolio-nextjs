// lib/careers.ts
import LISTCAREER, { LISTCAREERType } from "@/constants/list-career";

import "server-only";

export type Career = {
  id: number;
  company: string;
  role: string;
  period: string;
};

// Satu-satunya fungsi baca data
export async function listCareers(): Promise<LISTCAREERType[]> {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // di sini nanti bisa ganti ke Prisma/DB call, tanpa ubah pemanggil
  return LISTCAREER;
}
