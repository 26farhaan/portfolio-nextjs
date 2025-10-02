import { Divider } from "@mantine/core";
import { useTranslations } from "next-intl";

import ListAchivement from "@/components/Achivements";
import HeaderSection from "@/components/UI/HeaderSection";

export default function Achivements() {
  const t = useTranslations("Achievements");
  return (
    <section>
      <HeaderSection groupOptions={{ align: "start" }} title={t("title")} description={t("description")} />
      <Divider variant="dashed" size="sm" my="lg" />
      <ListAchivement />
    </section>
  );
}
