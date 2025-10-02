"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

import useMousePosition from "@/utils/useMousePosition";
import classes from "./index.module.css";

export default function TextPage() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={classes.main}>
      <motion.div
        className={classes.mask}
        animate={{
          maskPosition: `${(x || 0) - size / 2}px ${(y || 0) - size / 2}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the
          paycheck is equally good.
        </p>
      </motion.div>

      <div className={classes.body}>
        <p>
          I'm a <span className={classes.span}>selectively skilled</span> product designer with strong focus on
          producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}
