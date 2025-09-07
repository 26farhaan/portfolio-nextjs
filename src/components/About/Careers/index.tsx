import Image from "next/image";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
  Box,
  Divider,
  Flex,
  Grid,
  GridCol,
  List,
  ListItem,
  Text,
  Tooltip,
} from "@mantine/core";
import dayjs from "dayjs";
import { getTranslations } from "next-intl/server";

import IconCareer from "@/components/Icons/IconCareer";
import CardShowCase from "@/components/UI/CardShowCase";
import HeaderSection from "@/components/UI/HeaderSection";
import { listCareers } from "@/lib/careers";
import classes from "./index.module.css";

type CareersProops = {
  locale: string;
};
export default async function Careers({ locale }: CareersProops) {
  const t = await getTranslations("About.career");
  const tGlobal = await getTranslations();
  const careers = await listCareers();
  const now = dayjs();

  return (
    <section>
      <Box my="lg">
        <HeaderSection
          flexOptions={{ align: "start" }}
          leftSection={
            <Box mt={2}>
              <IconCareer size={20} />
            </Box>
          }
          title={t("title")}
          description={t("description")}
        />
      </Box>
      <Accordion defaultValue="1" variant="unstyled">
        <Flex direction="column" gap="md">
          {careers.map((item, index) => {
            return (
              <CardShowCase key={index}>
                <Grid gutter="xs">
                  <GridCol span={{ md: 2 }}>
                    <Image
                      className={classes.image}
                      style={{ backgroundColor: item.bgLogo }}
                      src={`/images/${item.logo}`}
                      alt={item.company}
                      width={100}
                      height={100}
                    />
                  </GridCol>
                  <GridCol span={{ md: 10 }}>
                    <Box fz="sm">
                      <Text fz="xl" fw={600}>
                        {item.title}
                      </Text>
                      <Anchor
                        fz="sm"
                        fw={600}
                        maw="70%"
                        href={item.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.company}
                      </Anchor>
                      <Text fz="xs" className={classes.caption}>
                        {item.location}
                      </Text>
                      <Flex gap="md">
                        <Text fz="xs" className={classes.caption}>
                          {item.startDate} - {item.endDate}
                        </Text>
                        <Text fz="xs" className={classes.caption}>
                          {now.diff(dayjs(item.startDate), "year")} {tGlobal("years")}{" "}
                          {now.diff(dayjs(item.startDate), "month") % 12} {tGlobal("months")}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionItem key={index} value={`${index}`} mt="sm">
                      <AccordionControl
                        p={0}
                        classNames={{ control: classes.accordionControl, label: classes.accordionControlLabel }}
                      >
                        <Text fz="xs">{t("responsibilities")}</Text>
                      </AccordionControl>
                      <AccordionPanel classNames={{ content: classes.accordionContent }}>
                        <Text fz="xs" mt="sm">
                          {item.responsibilities?.[locale]?.description}
                        </Text>
                        <List>
                          {item.responsibilities?.[locale]?.list.map((item, index) => (
                            <ListItem key={index}>
                              <Text fz="xs">{item}</Text>
                            </ListItem>
                          ))}
                        </List>
                        <Flex gap="sm" mt="md">
                          {item?.tools?.map((tool, index) => (
                            <Tooltip label={tool.label} key={index} mt="sm">
                              {tool.icon({ size: 20 })}
                            </Tooltip>
                          ))}
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </GridCol>
                </Grid>
              </CardShowCase>
            );
          })}
        </Flex>
      </Accordion>
      <Divider variant="dashed" size="sm" my="lg" />
    </section>
  );
}
