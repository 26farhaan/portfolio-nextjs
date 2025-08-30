import { Box, Divider, Flex, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

import Features from "@/components/Home/Features";
import Skills from "@/components/Home/Skills";

export default function Home() {
  const t = useTranslations("HomePage");
  // const test = "test";

  return (
    <Box>
      <Text component="h1" fz="h3" fw={600}>
        {t("name")}
      </Text>
      <Flex align="center" gap="md">
        <Text component="h2">● {t("based")}</Text>
        <Text component="h2">● {t("workType")}</Text>
      </Flex>
      <Text component="p" mt="sm" fz="sm">
        {t("intro.1")}
        <br />
        {t("intro.2")}
        <br />
        {t("intro.3")}
      </Text>
      <Divider my="xl" />
      <Skills />
      <Divider mb="xl" mt="lg" />
      <Features />
    </Box>
  );
}
