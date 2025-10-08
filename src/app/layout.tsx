// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { Metadata } from "next";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";

import classes from "./layout.module.css";
import MantineProgressHandler from "./MantineProgressHandler";
import CombinedProviders from "./Providers";

export const metadata: Metadata = {
  title: "Mohamad Farhan",
  description: "Mohamad Farhan Portfolio",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html className={classes.html} {...mantineHtmlProps} suppressHydrationWarning>
        <head>
          <ColorSchemeScript defaultColorScheme="auto" />
          <link rel="shortcut icon" href="./favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </head>
        <body>
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
