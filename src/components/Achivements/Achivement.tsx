"use client";

import { useState } from "react";
import Image from "next/image";
import { Anchor, Box, Flex, Grid, GridCol, Text } from "@mantine/core";
import { motion } from "motion/react"; // kalau pakai framer: "framer-motion"

import styles from "@/styles/global.module.css";
import IconArrowRight from "../Icon/IconArrowRight";
import CardShowCase from "../UI/CardShowCase";
import classes from "./index.module.css";

export default function Achivement() {
  const [isHovered, setIsHovered] = useState(false);

  const isTouch = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;
  return (
    <motion.div
      onHoverStart={!isTouch ? () => setIsHovered(true) : undefined}
      onHoverEnd={!isTouch ? () => setIsHovered(false) : undefined}
      // Mobile (ganti hover jadi tap/press)
      onClick={isTouch ? () => setIsHovered(!isHovered) : undefined}
    >
      <CardShowCase p={0}>
        <Box className={classes.imageWrapper}>
          <Image
            className={classes.image}
            src="/images/achivements/next-fundamental.png"
            alt=" Image"
            width={300}
            height={300}
          />
          <motion.div
            className={classes.credential}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }} // Animate x position based on isHovered state
            transition={{ duration: 0.2 }}
          >
            <Flex align="center">
              <Text mr="sm">Show Credential</Text>
              <IconArrowRight size={16} />
            </Flex>
          </motion.div>
        </Box>
        <Box p="sm">
          <Text fz="sm">Next.js App Router Fundamentals</Text>
          <Text fz="xs" mt="sm" className={styles.caption}>
            Issued on
          </Text>
          <Text fz="sm" pb="sm">
            August 2025
          </Text>
        </Box>
      </CardShowCase>
    </motion.div>
  );
}
