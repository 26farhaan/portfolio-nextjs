"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Text } from "@mantine/core";
import * as motion from "motion/react-client";

import classes from "./index.module.css";

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const [isOn, setIsOn] = useState(lang === "id");

  const toggleSwitch = () => {
    const currentPath = pathname.split("/")[2];
    const newLocale = lang === "id" ? "en" : "id";
    router.push(`/${newLocale}/${currentPath || ""}`);
    setIsOn(!isOn);
  };

  return (
    <button
      className={classes.wrapper}
      style={{
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <div className={classes.placeholderLeft}>
        <Text fz={10}>ID</Text>
      </div>
      <div className={classes.placeholderRight}>
        <Text fz={10}>US</Text>
      </div>
      <motion.div
        className={classes.handle}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      >
        <Text fz={10} fw={600} mt={2}>
          {isOn ? "ID" : "US"}
        </Text>
      </motion.div>
    </button>
  );
}
