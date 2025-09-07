// src/components/ThemeSwitch/index.tsx
"use client";

import { useEffect, useState } from "react";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { m } from "motion/react"; // alias motion.div => m.div

import IconMoonStars from "@/components/Icons/IconMoonStars";
import IconSun from "@/components/Icons/IconSun";
import classes from "./index.module.css";

export default function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme(); // 'light' | 'dark'
  const isLight = scheme === "light";

  // Hindari mismatch: render placeholder dulu sampai client mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggle = () => setColorScheme(isLight ? "dark" : "light");

  // Render stabil (tanpa kelas/style dinamis) saat SSR / pre-mount
  if (!mounted) {
    return (
      <button aria-label="theme-switch" className={classes.wrapper} aria-hidden>
        <div className={classes.placeholderLeft}>
          <IconSun size={16} />
        </div>
        <div className={classes.placeholderRight}>
          <IconMoonStars size={16} />
        </div>
        <div className={classes.handle} />
      </button>
    );
  }

  return (
    <button
      aria-label="theme-switch"
      className={`${classes.wrapper} ${isLight ? classes.onLight : ""}`}
      onClick={toggle}
    >
      <div className={classes.placeholderLeft}>
        <IconSun size={16} />
      </div>
      <div className={classes.placeholderRight}>
        <IconMoonStars size={16} />
      </div>

      <m.div
        className={`${classes.handle} ${isLight ? classes.handleLight : classes.handleDark}`}
        layout
        transition={{ type: "spring", duration: 0.2, bounce: 0.2 }}
      >
        {isLight ? <IconSun size={16} /> : <IconMoonStars size={16} />}
      </m.div>
    </button>
  );
}
