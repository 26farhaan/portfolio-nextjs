"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  List,
  ListItem,
  Modal,
  Skeleton,
  Text,
  Tooltip,
} from "@mantine/core";
import * as motion from "motion/react-client";

import { enumSKILLS } from "@/constants/skills";
import { ProjectType, useListProjectsQuery } from "@/queries/projects-queries";
import styles from "@/styles/global.module.css";
import CardShowCase from "../UI/CardShowCase";
import FilterProjects from "./FilterProjects";
import classes from "./index.module.css";

export default function ListProjects() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const lang = pathname.split("/")[1] || "id";
  const Lang = (lang === "en" ? "en" : "id") as "id" | "en";

  const openId = searchParams.get("id");
  const qSearch = searchParams.get("search") || "";
  const qCompanyCode = searchParams.get("company_code") || "";

  const [selected, setSelected] = useState<ProjectType | null>(null);

  const { data, isLoading } = useListProjectsQuery({ queryParams: { search: qSearch, company_code: qCompanyCode } });

  useEffect(() => {
    if (!openId || !data) {
      setSelected(null);
      return;
    }
    const found = data.find((x) => String(x.id) === openId) ?? null;
    setSelected(found);
  }, [openId, data]);

  // useEffect(() => {
  //   const el = document.getElementById(`project-${openId}`);
  //   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, [openId, projects]);

  // Open/Close modal hanya dari event handler
  const openModal = (id: string) => {
    const sp = new URLSearchParams(searchParams);
    sp.set("id", id);
    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const sp = new URLSearchParams(searchParams);
    sp.delete("id");
    router.replace(sp.size ? `${pathname}?${sp.toString()}` : pathname, {
      scroll: false,
    });
  };

  return (
    <Grid>
      <GridCol span={12} mb="md">
        <FilterProjects />
      </GridCol>
      {isLoading ? (
        [1, 2, 3, 4, 5, 6].map((item) => (
          <GridCol span={4} key={item}>
            <Skeleton height={200} radius="md" />
            <Skeleton height={80} my="md" radius="md" />
            <Skeleton height={20} radius="md" />
          </GridCol>
        ))
      ) : data?.length ? (
        (data ?? []).map((item) => (
          <GridCol span={{ md: 4 }} key={item.id} id={`project-${item.id}`}>
            <motion.div
              className={classes.cardWrapper}
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
              }}
            >
              <Box className={classes.cardWrapper}>
                <CardShowCase p={0}>
                  <Image className={classes.image} src={item.image} alt={item.name} width={300} height={300} />
                  <Box p="md">
                    <Text fz="lg">{item.name}</Text>
                    <Text className={styles.caption} fz="sm" lineClamp={2}>
                      {item?.description?.[Lang] || ""}
                    </Text>

                    <Flex mt="sm" gap="sm" wrap="wrap">
                      {item.tools.map((tool, idx) => {
                        const skill = enumSKILLS?.[tool];
                        if (!skill) return null;
                        return (
                          <Tooltip label={skill.label || "default"} key={idx}>
                            <Box c={skill.color}>{skill?.icon({ size: 20 })}</Box>
                          </Tooltip>
                        );
                      })}
                    </Flex>

                    <Box mt="sm">
                      <Button size="xs" onClick={() => openModal(String(item.id))}>
                        Read More
                      </Button>
                      {item.link && (
                        <Anchor href={item.link} target="_blank" rel="noreferrer">
                          <Button size="xs" ml="sm">
                            Visit
                          </Button>
                        </Anchor>
                      )}
                    </Box>
                  </Box>
                </CardShowCase>
              </Box>
            </motion.div>
          </GridCol>
        ))
      ) : (
        <GridCol span={12}>
          <Text>No data found.</Text>
        </GridCol>
      )}

      <Modal size={720} opened={!!openId} onClose={closeModal} title="Detail Project">
        {isLoading && !data && <Text>Loading...</Text>}
        {!!openId && data && !selected && <Text>Data tidak ditemukan.</Text>}
        {selected && (
          <>
            <Image className={classes.imageBanner} src={selected.image} alt={selected.name} width={300} height={300} />
            <Box py="md">
              <Flex gap="sm" wrap="wrap" mb="sm">
                <Text fz="lg">{selected.name}</Text>
                {selected.link && (
                  <Anchor href={selected.link} target="_blank" rel="noreferrer">
                    <Button variant="subtle" size="xs" ml="sm">
                      Visit
                    </Button>
                  </Anchor>
                )}
              </Flex>
              <Text className={styles.caption} fz="sm">
                {selected?.description?.[Lang] || ""}
              </Text>

              <List size="sm" fw={400} my="sm" className={styles.caption} withPadding>
                {selected?.features?.[Lang]?.map((feat, i) => <ListItem key={i}>{feat}</ListItem>)}
              </List>

              <Flex mt="sm" gap="sm" wrap="wrap">
                {selected?.tools.map((tool, idx) => {
                  const skill = enumSKILLS?.[tool];
                  if (!skill) return null;
                  return (
                    <Tooltip label={skill.label || "default"} key={idx}>
                      <Box c={skill.color}>{skill?.icon({ size: 20 })}</Box>
                    </Tooltip>
                  );
                })}
              </Flex>
            </Box>
          </>
        )}
      </Modal>
    </Grid>
  );
}
