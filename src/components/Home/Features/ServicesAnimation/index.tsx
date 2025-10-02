"use client";

import { useEffect, useState } from "react";
import { Flex, Text } from "@mantine/core";
import { motion } from "motion/react"; // kalau pakai framer: "framer-motion"

const ITEMS = ["WEB", "BACKEND", "UI/UX", "AI"] as const;

export default function ServicesAnimation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // set interval sekali saat mount, bersihkan saat unmount
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % ITEMS.length); // 0→1→2→3→0→...
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <Flex direction="column" justify="space-between" h="100%">
      {ITEMS.map((item, index) => (
        <motion.div
          key={item}
          animate={{ filter: active === index ? "blur(0px)" : "blur(8px)" }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          <Text fw={active === index ? 700 : 400} fz="h3" ta="center">
            {item}
          </Text>
        </motion.div>
      ))}
    </Flex>
  );
}
