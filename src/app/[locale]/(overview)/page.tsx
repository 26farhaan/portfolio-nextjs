import { Box, Group, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import Features from "@/components/Home/Features";
import Skills from "@/components/Home/Skills";
import classes from "./page.module.css";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <Box pos="relative">
      <Box className={classes.decorativeOrb + " " + classes.orb1} />
      <Box className={classes.decorativeOrb + " " + classes.orb2} />

      <Box className={classes.heroSection}>
        <Text component="h1" fz="h2" fw={700} className={classes.nameGradient}>
          {t("name")}
        </Text>
        <Group mt="md" gap="sm">
          <Box className={classes.infoBadge}>● {t("based")}</Box>
          <Box className={classes.infoBadge}>● {t("workType")}</Box>
        </Group>
        <Text component="p" mt="lg" fz="sm" className={classes.introText}>
          {t("intro.1")}
          <br />
          {t("intro.2")}
          <br />
          {t("intro.3")}
        </Text>
      </Box>

      <Box className={classes.sectionDivider} my="xl" />
      <Skills />
      <Box className={classes.sectionDivider} my="xl" />
      <Features />
    </Box>
  );
}
