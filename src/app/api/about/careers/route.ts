import { NextResponse } from "next/server";

import { listCareers } from "@/queries/careers";

export async function GET() {
  const data = await listCareers();
  return NextResponse.json(
    { data },
    {
      headers: {
        // kalau mau cache edge juga
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      },
    }
  );
}
