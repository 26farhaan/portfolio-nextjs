import Image from "next/image";
import { ActionIcon, Box, Flex, Grid, GridCol, Text } from "@mantine/core";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import IconAchievements from "@/components/Icons/IconAchivements";
import IconFeatures from "@/components/Icons/IconFeatures";
import IconShowCase from "@/components/Icons/IconShowCase";
import IconSkills from "@/components/Icons/IconSkills";
import IconUser from "@/components/Icons/IconUser";
import CardShowCase from "./Card";
import classes from "./index.module.css";
import ServicesAnimation from "./ServicesAnimation";
import SkillsAutoScroll from "./SkillsAutoScroll";

export default function Features() {
  const t = useTranslations("HomePage");

  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box>
      <Flex align="center">
        <IconFeatures />
        <Text component="h3" ml="sm" fz="h4" fw={600}>
          {t("features.title")}
        </Text>
      </Flex>
      <Text component="p" mt={4} fz="sm">
        {t("features.description")}
      </Text>
      <Grid py="md">
        <GridCol span={{ md: 6, base: 12 }}>
          <CardShowCase>
            <Grid>
              <GridCol span={{ md: 6 }}>
                <ActionIcon size="xl" color="gray.7">
                  <IconShowCase size={20} />
                </ActionIcon>
                <Text mt="md">{t("features.showcase.title")}</Text>
                <Text fz="xs" maw="80%" c="gray">
                  {t("features.showcase.description")}
                </Text>
              </GridCol>
              <GridCol span={{ md: 6 }}>
                <Box className={classes.rightSectionProject}>
                  <Flex direction="column" gap="md">
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                    <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }}>
                      <Box className={classes.imageWrapper}>
                        <Image
                          className={classes.image}
                          src="/images/audy.png"
                          alt="Showcase 1"
                          width={300}
                          height={300}
                          objectFit="cover"
                        />
                      </Box>
                    </motion.div>
                  </Flex>
                </Box>
              </GridCol>
            </Grid>
          </CardShowCase>
        </GridCol>
        <GridCol span={{ md: 3, base: 12 }}>
          <CardShowCase>
            <Flex direction="column" align="center">
              <ActionIcon size="xl" color="gray.7">
                <IconUser />
              </ActionIcon>
              <Text mt="md" ta="center">
                {t("features.aboutMe.title")}
              </Text>
              <Text fz="xs" maw="80%" c="gray" ta="center">
                {t("features.aboutMe.description")}
              </Text>
            </Flex>
          </CardShowCase>
        </GridCol>
        <GridCol span={{ md: 3, base: 12 }}>
          <CardShowCase p="none">
            <Flex p="md" direction="column" align="center">
              <ActionIcon size="xl" color="gray.7">
                <IconSkills />
              </ActionIcon>
              <Text mt="md" ta="center">
                {t("features.aboutMe.title")}
              </Text>
              <Text fz="xs" maw="80%" c="gray" ta="center">
                {t("features.aboutMe.description")}
              </Text>
            </Flex>
            <Box mt="lg">
              <SkillsAutoScroll />
              <SkillsAutoScroll toRight />
            </Box>
          </CardShowCase>
        </GridCol>
        <GridCol span={{ md: 3, base: 12 }}>
          <CardShowCase>
            <Flex direction="column" align="center">
              <ActionIcon size="xl" color="gray.7">
                <IconAchievements />
              </ActionIcon>
              <Text mt="md" ta="center">
                {t("features.achievements.title")}
              </Text>
              <Text fz="xs" maw="80%" c="gray" ta="center">
                {t("features.achievements.description")}
              </Text>
            </Flex>
          </CardShowCase>
        </GridCol>
        <GridCol span={{ md: 3, base: 12 }}>
          <CardShowCase>
            <Flex direction="column" align="center">
              {/* <ActionIcon size="xl" color="gray.7">
                <IconAchievements />
              </ActionIcon> */}
              <Text mt="md" ta="center">
                Coming Soon
              </Text>
            </Flex>
          </CardShowCase>
        </GridCol>
        <GridCol span={{ md: 6, base: 12 }}>
          <CardShowCase>
            <Flex h="100%">
              <Box w="100%">
                <ActionIcon size="xl" color="gray.7">
                  <IconShowCase size={20} />
                </ActionIcon>
                <Text mt="md">{t("features.showcase.title")}</Text>
                <Text fz="xs" maw="80%" c="gray">
                  {t("features.showcase.description")}
                </Text>
              </Box>
              <Box w="100%" h="100%">
                <ServicesAnimation />
              </Box>
            </Flex>
          </CardShowCase>
        </GridCol>
      </Grid>
    </Box>
  );
}
