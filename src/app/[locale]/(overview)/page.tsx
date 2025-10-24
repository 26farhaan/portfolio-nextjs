import { Metadata } from "next";
import { Box, Divider, Flex, Group, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import Features from "@/components/Home/Features";
import Skills from "@/components/Home/Skills";

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Home",
//     default: "Mohamad Farhan | Home",
//   },
//   description: `Home page mohamad farhan's portfolio`,
// };

export default async function Home() {
  const t = await getTranslations("HomePage");
  // const test = "test";

  return (
    <Box>
      <Text component="h1" fz="h3" fw={600}>
        {t("name")}
      </Text>
      <Group align="center" gap="md">
        <Text component="h2">● {t("based")}</Text>
        <Text component="h2">● {t("workType")}</Text>
      </Group>
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
