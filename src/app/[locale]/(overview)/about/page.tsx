import { Suspense } from "react";
import { Metadata } from "next";

import Careers from "@/components/About/Careers";
import CareersSkeleton from "@/components/About/Careers/skeleton";
import Education from "@/components/About/Education";
import Introduction from "@/components/About/Introduction";

export const metadata: Metadata = {
  title: {
    template: "%s | About",
    default: "Mohamad Farhan | About",
  },
  description: `About page mohamad farhan's portfolio`,
};

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
