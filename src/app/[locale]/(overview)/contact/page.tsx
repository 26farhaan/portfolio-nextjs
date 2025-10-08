import { Metadata } from "next";
import { Divider } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import SosmedSection from "@/components/Contact/SosmedSection";
import HeaderSection from "@/components/UI/HeaderSection";

export const metadata: Metadata = {
  title: {
    template: "%s | Contact",
    default: "Mohamad Farhan | Contact",
  },
  description: `Contact page mohamad farhan's portfolio`,
};

export default async function AboutPage({ params }: { params: { locale: string; slug: string } }) {
  const t = await getTranslations("Contact");
  // const { locale } = await params;
  return (
    <>
      <HeaderSection title={t("title")} description={t("description")} />
      <Divider my="md" variant="dashed" size="sm" />
      <SosmedSection />
    </>
  );
}
