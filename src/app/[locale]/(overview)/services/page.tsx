import { Divider, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
  const t = await getTranslations("Services");
  return (
    <section>
      <Text fz="h4" component="h1">
        {t("title")}
      </Text>
      <Text component="h2">{t("description")}</Text>
      <Divider variant="dashed" my="md" />
    </section>
  );
}
