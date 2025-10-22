import { Flex, Grid, GridCol, Group, Paper, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import IconBolt from "@/components/Icons/IconBolt";
import IconClock from "@/components/Icons/IconClock";
import IconGauge from "@/components/Icons/IconGauge";
import IconShieldCode from "@/components/Icons/IconShieldCode";
import classes from "./index.module.css";

export default async function Outcomes() {
  const t = await getTranslations("Services");

  return (
    <Paper shadow="sm" withBorder className={classes.wrapper}>
      <Group align="center">
        <IconGauge />
        <Text fz="h4">{t("header.title")}</Text>
      </Group>
      <Text>{t("header.description")}</Text>
      <Grid mt="md">
        <GridCol span={{ lg: 6 }}>
          <Flex align="start" gap="sm">
            <IconBolt size={18} />
            <Text fz="sm">{t("header.delivery")}</Text>
          </Flex>
        </GridCol>
        <GridCol span={{ lg: 6 }}>
          <Flex align="start" gap="sm">
            <IconGauge size={18} />
            <Text fz="sm">{t("header.performance")}</Text>
          </Flex>
        </GridCol>
        <GridCol span={{ lg: 6 }}>
          <Flex align="start" gap="sm">
            <IconClock size={18} />
            <Text fz="sm">{t("header.loadtime")}</Text>
          </Flex>
        </GridCol>
        <GridCol span={{ lg: 6 }}>
          <Flex align="start" gap="sm">
            <IconShieldCode size={18} />
            <Text fz="sm">{t("header.code")}</Text>
          </Flex>
        </GridCol>
      </Grid>
    </Paper>
  );
}
