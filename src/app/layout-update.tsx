// app/layout.tsx
import { ReactNode } from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import CombinedProviders from "./[locale]/Providers"; // <- gabungan Mantine + React Query
import classes from "./layout.module.css";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/carousel/styles.css";
import "@/styles/font.css";

import { getLocale } from "next-intl/server";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale(); // ← dari next-intl (server)

  return (
    <html lang={locale || "id"} {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="./favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={classes.body}>
        <CombinedProviders>{children}</CombinedProviders>
      </body>
    </html>
  );
}
