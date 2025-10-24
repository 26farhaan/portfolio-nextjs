// src/middleware.ts
import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Middleware utama next-intl
const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ 1. Lewati file penting SEO
  const seoFiles = ["/sitemap.xml", "/robots.txt", "/favicon.ico"];
  if (seoFiles.includes(pathname)) {
    return; // skip middleware (biar dilayani langsung oleh Next.js/public)
  }

  // ✅ 2. Lewati file statis & aset
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/fonts") ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp)$/)
  ) {
    return;
  }

  // ✅ 3. Jalankan middleware i18n normal
  return intlMiddleware(req);
}

export const config = {
  // Pastikan hanya halaman dinamis yang diproses
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
