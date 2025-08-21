"use client";

import { Switch, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

import IconMoonStars from "@/components/icons/IconMoonStars";
import IconSun from "@/components/icons/IconSun";

export default function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const isLight = useComputedColorScheme() === "light";

  return (
    <Switch
      checked={!isLight}
      onClick={() => setColorScheme(isLight ? "dark" : "light")}
      size="lg"
      color="blue.6"
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
