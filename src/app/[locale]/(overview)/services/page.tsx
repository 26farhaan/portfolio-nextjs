import { Badge, Button, Grid, GridCol, Group, Text } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import ServiceList from "@/components/Services/List";
import Outcomes from "@/components/Services/Outcomes";
import gStyles from "@/styles/global.module.css";

export default async function ServicesPage() {
  const t = await getTranslations("Services");
  return (
    <section>
      <Grid>
        <GridCol span={{ md: 6, base: 12 }}>
          <Text fz="h3" component="h1">
            {t("title1")}
            <Text
              component="span"
              fz="h3"
              fw={600}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 90 }}
            >
              {" "}
              {t("titleBold")}
            </Text>{" "}
            {t("title2")}
          </Text>
          <Text fz="sm" className={gStyles.caption}>
            {t("description")}
          </Text>
          <Button size="xs" variant="outline" mt="md">
            {t("header.hire")}
          </Button>
          <Group mt="md" gap="sm">
            <Badge variant="outline">Javascript</Badge>
            <Badge variant="outline">Typescript</Badge>
            <Badge variant="outline">React.js</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Nuxt.js</Badge>
            <Badge variant="outline">React Query</Badge>
            <Badge variant="outline">Zustand</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </Group>
        </GridCol>
        <GridCol span={{ md: 6, base: 12 }}>
          <Outcomes />
        </GridCol>
      </Grid>
      <Group my={24} gap="xs">
        <Badge>{t("ido.service")}</Badge>
        <Text>{t("ido.title")}</Text>
      </Group>
      <ServiceList />
    </section>
  );
}
