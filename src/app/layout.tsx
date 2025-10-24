// app/[locale]/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import { meta } from "@/i18n/locales/meta";
import { getLocalizedMetadata } from "@/utils/metadata";
import classes from "./layout.module.css";
import MantineProgressHandler from "./MantineProgressHandler";
import CombinedProviders from "./Providers";

export async function generateMetadata({ params }: { params: { locale: keyof typeof meta } }): Promise<Metadata> {
  return getLocalizedMetadata(params.locale, "home");
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale(); // ← dari next-intl (server)
  return (
    <>
      <html {...mantineHtmlProps} suppressHydrationWarning lang={locale || "id"}>
        <head>
          <ColorSchemeScript defaultColorScheme="auto" />
          <link rel="shortcut icon" href="./favicon-16x16.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </head>
        <body className={classes.body}>
          <div>
            <Analytics />
            <CombinedProviders>
              <MantineProgressHandler />
              <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </CombinedProviders>
          </div>
        </body>
      </html>
    </>
  );
}
