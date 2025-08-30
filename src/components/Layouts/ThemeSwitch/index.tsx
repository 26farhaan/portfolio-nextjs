"use client";

import { Switch, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

import IconMoonStars from "@/components/Icons/IconMoonStars";
import IconSun from "@/components/Icons/IconSun";

export default function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const isLight = useComputedColorScheme() === "light";

  return (
    <Switch
      checked={!isLight}
      onClick={() => setColorScheme(isLight ? "dark" : "light")}
      size="lg"
      color="gray"
      onLabel={<IconSun size={18} color={!isLight ? "yellow" : "white"} />}
      offLabel={<IconMoonStars size={18} color={!isLight ? "yellow" : "white"} />}
      thumbIcon={
        isLight ? (
          <IconSun size={18} color={isLight ? "black" : "white"} />
        ) : (
          <IconMoonStars size={18} color={!isLight ? "black" : "white"} />
        )
      }
    />
  );
}
