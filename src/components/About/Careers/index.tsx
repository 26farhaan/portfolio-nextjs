"use client";

import { useEffect, useState } from "react";
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
import { useTranslations } from "next-intl";

import IconCareer from "@/components/Icons/IconCareer";
import CardShowCase from "@/components/UI/CardShowCase";
import HeaderSection from "@/components/UI/HeaderSection";
import { LISTCAREERType } from "@/constants/list-career";
import { enumSKILLS } from "@/constants/skills";
import { listCareers } from "@/queries/careers";
import getYearMonthDuration from "@/utils/getYearMonthDuration";
import classes from "./index.module.css";

type CareersProops = {
  locale: string;
};
export default function Careers({ locale }: CareersProops) {
  const t = useTranslations("About.career");
  const tGlobal = useTranslations("");
  const [careers, setCarreers] = useState<LISTCAREERType[]>([]);

  useEffect(() => {
    const fetchCareers = async () => {
      const data = await listCareers();
      setCarreers(data);
    };
    fetchCareers();
  }, []);

  return (
    <section>
      <Box my="lg">
        <HeaderSection
          groupOptions={{ align: "start" }}
          leftSection={
            <Box mt={2}>
              <IconCareer size={20} />
            </Box>
          }
          title={t("title")}
          description={t("description")}
        />
      </Box>
      <Accordion defaultValue="" variant="unstyled">
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
                          {getYearMonthDuration({
                            startDate: item.sDate,
                            endDate: item.eDate,
                            labels: {
                              year: tGlobal("year"),
                              years: tGlobal("years"),
                              month: tGlobal("month"),
                              months: tGlobal("months"),
                            },
                          })}
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
                        <Flex gap="sm" mt="md" wrap="wrap">
                          {item?.tools?.map((tool, index) => {
                            const skill = enumSKILLS[tool];
                            return (
                              <Tooltip label={skill?.label || ""} key={index} mt="sm">
                                {skill?.icon({ size: 20 })}
                              </Tooltip>
                            );
                          })}
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
