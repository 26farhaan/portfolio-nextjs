// app/layout.tsx
import { ReactNode } from "react";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";

import { mantinetheme, resolver } from "../../mantine.theme";
// import CombinedProviders from "./Providers"; // <- gabungan Mantine + React Query
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/carousel/styles.css";
import "@/styles/font.css";

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // tidak perlu Promise
}) {
  const { locale } = params;

  return (
    <html lang={locale || "id"} {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="./favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        {/* <CombinedProviders>
          </CombinedProviders> */}
        <MantineProvider defaultColorScheme="auto" theme={mantinetheme} cssVariablesResolver={resolver}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
