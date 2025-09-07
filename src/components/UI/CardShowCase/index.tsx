"use client";

import { useRef } from "react";
import { Box, BoxProps } from "@mantine/core";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import classes from "./index.module.css";

type CardShowCaseProps = {
  radius?: number;
  children: React.ReactNode;
} & BoxProps;
export default function CardShowCase(props: CardShowCaseProps) {
  const { radius = 120, children, p, ...boxProps } = props;
  const ref = useRef<HTMLDivElement>(null);

  // motion values (px) → dispring agar mulus
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 300, damping: 30, mass: 0.4 });

  // ubah ke string px pakai useTransform
  const xPx = useTransform(sx, (v) => `${v}px`);
  const yPx = useTransform(sy, (v) => `${v}px`);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);

    // update radius via CSS vars (boleh statis atau dinamis)
    const el = ref.current;
    if (el) {
      el.style.setProperty("--rInner", `${Math.max(20, radius * 0.2)}px`);
      el.style.setProperty("--rFade", `${radius}px`);
    }
  }

  function onLeave() {
    // kecilkan radius & sembunyikan dengan CSS (opacity jadi 0)
    const el = ref.current;
    if (el) {
      el.style.setProperty("--rInner", `0px`);
      el.style.setProperty("--rFade", `60px`);
    }
  }

  return (
    <Box {...boxProps} p={p || "md"} className={classes.card} onMouseMove={onMove} onMouseLeave={onLeave} ref={ref}>
      {/* overlay yang mengikuti mouse (hanya background/blur yang dianimasikan) */}
      <motion.div
        className={classes.spot}
        style={
          {
            "--x": xPx,
            "--y": yPx,
          } as React.CSSProperties
        }
        aria-hidden
      />
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
}
