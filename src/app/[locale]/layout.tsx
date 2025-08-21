import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";
import { mantinetheme, resolver } from "../../../mantine.theme";
import classes from "./layout.module.css";

import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
// import "@mantine/dates/styles.css";
// import "@mantine/tiptap/styles.css";
// import "@mantine/dropzone/styles.css";
// import "@mantine/charts/styles.css";

import "@/styles/font.css";

import MantineProgressHandler from "./MantineProgressHandler";
import Providers from "./Providers";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // test

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="./favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* <meta name="description" content="Learn more about MyTaskApp and our mission to simplify task management." /> */}
      </head>
      <body className={classes.body}>
        <MantineProvider defaultColorScheme="auto" theme={mantinetheme} cssVariablesResolver={resolver}>
          <Notifications />
          <MantineProgressHandler />
          <Providers>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
