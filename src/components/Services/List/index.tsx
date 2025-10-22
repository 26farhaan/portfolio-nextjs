import { ActionIcon, Grid, GridCol, List, ListItem, Paper, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import IconCode from "@/components/Icons/IconCode";
import IconGauge from "@/components/Icons/IconGauge";
import IconLayout from "@/components/Icons/IconLayout";
import IconPlugIn from "@/components/Icons/IconPlugIn";
import classes from "./index.module.css";

export default async function ServiceList() {
  const t = await getTranslations("Services.ido");
  return (
    <Grid>
      <GridCol span={{ md: 6 }}>
        <Paper className={classes.card} shadow="sm" withBorder>
          <ActionIcon>
            <IconLayout />
          </ActionIcon>
          <Text fz={20}>{t("jsDev.title")}</Text>
          <Text fz="sm">{t("jsDev.description")}</Text>
          <List>
            <ListItem>{t("jsDev.item1")}</ListItem>
            <ListItem>{t("jsDev.item2")}</ListItem>
            <ListItem>{t("jsDev.item3")}</ListItem>
          </List>
        </Paper>
      </GridCol>
      <GridCol span={{ md: 6 }}>
        <Paper className={classes.card} shadow="sm" withBorder>
          <ActionIcon>
            <IconCode />
          </ActionIcon>
          <Text fz={20}>{t("figma.title")}</Text>
          <Text fz="sm">{t("figma.description")}</Text>
          <List>
            <ListItem>{t("figma.item1")}</ListItem>
            <ListItem>{t("figma.item2")}</ListItem>
            <ListItem>{t("figma.item3")}</ListItem>
          </List>
        </Paper>
      </GridCol>
      <GridCol span={{ md: 6 }}>
        <Paper className={classes.card} shadow="sm" withBorder>
          <ActionIcon>
            <IconPlugIn />
          </ActionIcon>
          <Text fz={20}>{t("integration.title")}</Text>
          <Text fz="sm">{t("integration.description")}</Text>
          <List>
            <ListItem>{t("integration.item1")}</ListItem>
            <ListItem>{t("integration.item2")}</ListItem>
            <ListItem>{t("integration.item3")}</ListItem>
          </List>
        </Paper>
      </GridCol>
      <GridCol span={{ md: 6 }}>
        <Paper className={classes.card} shadow="sm" withBorder>
          <ActionIcon>
            <IconGauge />
          </ActionIcon>
          <Text fz={20}>{t("performance.title")}</Text>
          <Text fz="sm">{t("performance.description")}</Text>
          <List>
            <ListItem>{t("performance.item1")}</ListItem>
            <ListItem>{t("performance.item2")}</ListItem>
            <ListItem>{t("performance.item3")}</ListItem>
          </List>
        </Paper>
      </GridCol>
    </Grid>
  );
}
