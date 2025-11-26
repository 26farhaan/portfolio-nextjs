import { Suspense } from "react";
import { Metadata } from "next";

import Careers from "@/components/About/Careers";
import CareersSkeleton from "@/components/About/Careers/skeleton";
import Education from "@/components/About/Education";
import Introduction from "@/components/About/Introduction";
import { meta } from "@/i18n/locales/meta";
import { getLocalizedMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { locale: keyof typeof meta } }): Promise<Metadata> {
  const { locale } = await params;
  return await getLocalizedMetadata(locale, "about");
}

export default async function AboutPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale } = await params;
  return (
    <>
      <Introduction />
      <Suspense fallback={<CareersSkeleton />}>
        <Careers locale={locale} />
      </Suspense>
      <Education />
    </>
  );
}
