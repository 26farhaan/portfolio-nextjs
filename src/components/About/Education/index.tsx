import Image from "next/image";
import { Flex, Grid, GridCol, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

import IconEducation from "@/components/Icons/IconEducation";
import CardShowCase from "@/components/UI/CardShowCase";
import HeaderSection from "@/components/UI/HeaderSection";
import classes from "./index.module.css";

export default function Education() {
  const t = useTranslations("About.education");

  return (
    <section>
      <HeaderSection
        groupOptions={{ align: "start" }}
        leftSection={<IconEducation size={20} />}
        title={t("title")}
        description={t("description")}
      />
      <Flex direction="column" gap="md" mt="sm">
        <CardShowCase>
          <Grid>
            <GridCol span={{ md: 2 }}>
              <Image
                className={classes.image}
                src={`/images/unbin.png`}
                alt="Universitas Binaniaga Logo"
                width={100}
                height={100}
              />
            </GridCol>
            <GridCol span={{ md: 10 }}>
              <Flex align="center" gap="md">
                <Text fz="xl" fw={600}>
                  Universitas Binaniaga Indonesia
                </Text>
                <Text fz="xs" className={classes.caption}>
                  (Not Graduated)
                </Text>
              </Flex>
              <Flex gap="sm">
                <Text fz="xs" className={classes.caption}>
                  {t("degree")}
                </Text>
                <Text fz="xs" className={classes.caption}>
                  •
                </Text>
                <Text fz="xs" className={classes.caption}>
                  {t("major")}, (S.Kom)
                </Text>
              </Flex>
              <Flex gap="sm">
                <Text fz="xs" className={classes.caption}>
                  2018 - 2025
                </Text>
                <Text fz="xs" className={classes.caption}>
                  •
                </Text>
                <Text fz="xs" className={classes.caption}>
                  Bogor, Indonesia
                </Text>
              </Flex>
            </GridCol>
          </Grid>
        </CardShowCase>
        <CardShowCase>
          <Grid>
            <GridCol span={{ md: 2 }}>
              <Image
                className={classes.image}
                src={`/images/rimba-madya.webp`}
                alt="Universitas Binaniaga Logo"
                width={100}
                height={100}
              />
            </GridCol>
            <GridCol span={{ md: 10 }}>
              <Text fz="xl" fw={600}>
                Rimba Madya
              </Text>
              <Flex gap="sm">
                <Text fz="xs" className={classes.caption}>
                  {t("degreeShs")}
                </Text>
                <Text fz="xs" className={classes.caption}>
                  •
                </Text>
                <Text fz="xs" className={classes.caption}>
                  {t("majorShs")}
                </Text>
              </Flex>
              <Flex gap="sm">
                <Text fz="xs" className={classes.caption}>
                  2013 - 2016
                </Text>
                <Text fz="xs" className={classes.caption}>
                  •
                </Text>
                <Text fz="xs" className={classes.caption}>
                  Bogor, Indonesia
                </Text>
              </Flex>
            </GridCol>
          </Grid>
        </CardShowCase>
      </Flex>
    </section>
  );
}
