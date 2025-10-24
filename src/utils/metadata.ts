import type { Metadata } from "next";

import { meta } from "@/i18n/locales/meta";

export function getLocalizedMetadata(locale: keyof typeof meta, page: keyof (typeof meta)["id"]): Metadata {
  const content = meta[locale]?.[page] ?? meta["id"].home; // fallback

  const isEnglish = locale === "en";
  const url = isEnglish
    ? `https://mohamadfarhan.space/en/${page === "home" ? "" : page}`
    : `https://mohamadfarhan.space/id/${page === "home" ? "" : page}`;

  return {
    title: content.title,
    description: content.description,
    icons: {
      icon: "/favicon-16x16.png",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: url,
      languages: {
        "id-ID": `https://mohamadfarhan.space/id/${page === "home" ? "" : page}`,
        "en-US": `https://mohamadfarhan.space/en/${page === "home" ? "" : page}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url,
      siteName: "Mohamad Farhan",
      type: "website",
      images: [
        {
          url: "https://mohamadfarhan.space/apple-touch-icon.png",
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: ["https://mohamadfarhan.space/apple-touch-icon.png"],
    },
  };
}
