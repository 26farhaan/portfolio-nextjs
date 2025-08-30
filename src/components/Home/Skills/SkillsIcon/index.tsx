"use client";

import { useState } from "react";
import { Box, Text } from "@mantine/core";
import * as motion from "motion/react-client";

import classes from "./index.module.css";

type SkillsIconType = {
  label: string;
  icon: React.ReactNode;
  color: string;
};
export default function SkillsIcon({ label, icon, color }: SkillsIconType) {
  const [isHovered, setIsHovered] = useState(false);

  const isTouch = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;

  return (
    <Box pos="relative" pb={4} className={classes.wrapper}>
      <motion.div
        className={classes.iconFront}
        onHoverStart={!isTouch ? () => setIsHovered(true) : undefined}
        onHoverEnd={!isTouch ? () => setIsHovered(false) : undefined}
        // Mobile (ganti hover jadi tap/press)
        onClick={isTouch ? () => setIsHovered(!isHovered) : undefined}
      >
        {icon}
      </motion.div>
      <motion.div
        animate={{ y: isHovered ? -10 : 0, rotate: isHovered ? 12 : 10 }} // Animate x position based on isHovered state
        transition={{ duration: 0.3 }}
        className={classes.iconBg}
        style={{ background: color }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Text className={classes.label} mt={8}>
          {label}
        </Text>
      </motion.div>
    </Box>
  );
}
