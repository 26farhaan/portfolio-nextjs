// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import MantineProgressHandler from "./MantineProgressHandler";

export default function LocaleLayout({ children }: { children: ReactNode; params: { locale: string } }) {
  return (
    <>
      <MantineProgressHandler />
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </>
  );
}
