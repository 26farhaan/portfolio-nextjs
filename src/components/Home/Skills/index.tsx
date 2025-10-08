import { Box, Flex, Grid, GridCol, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

import IconCode from "@/components/Icons/IconCode";
import { SKILLS } from "@/constants/skills";
import SkillsIcon from "./SkillsIcon";

export default function Skills() {
  const t = useTranslations("HomePage");
  return (
    <Box>
      <Flex align="center">
        <IconCode />
        <Text component="h3" ml="sm" fz="h4" fw={600}>
          {t("skills.title")}
        </Text>
      </Flex>
      <Text component="p" mt={4} fz="sm">
        {t("skills.description")}
      </Text>
      <Grid mt="xl">
        {SKILLS.map((skill, i) => (
          <GridCol span={{ base: 3, md: 1.2 }} key={i}>
            <SkillsIcon label={skill.label} icon={skill.icon({ size: 32 })} color={skill.color} key={i} />
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
}
