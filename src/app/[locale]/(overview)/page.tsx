import { Box } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  // const test = "";

  return <Box h={1200}>{t("title")}</Box>;
}
