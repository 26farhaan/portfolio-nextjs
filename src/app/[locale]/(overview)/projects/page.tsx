import { Divider } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import ListProjects from "@/components/Projects";
import HeaderSection from "@/components/UI/HeaderSection";

export default async function Projects() {
  const t = await getTranslations("Projects");
  return (
    <section>
      <HeaderSection groupOptions={{ align: "start" }} title={t("title")} description={t("description")} />
      <Divider variant="dashed" size="sm" my="lg" />
      <ListProjects />
    </section>
  );
}
