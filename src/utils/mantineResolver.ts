"use client";

import { CSSVariablesResolver, MantineThemeOther } from "@mantine/core";

import { customColors } from "../../mantine.theme";

const generateMantineColor = (ctx: MantineThemeOther) => {
  const res: Record<string, string> = {};

  Object.keys(customColors).forEach((v) => {
    res[`--mantine-color-${v}`] = ctx?.other?.[v];
  });

  return res;
};

export const resolver: CSSVariablesResolver = (context) => {
  const colors = generateMantineColor(context);

  return {
    variables: {
      ...colors,
    },
    // light theme
    light: {},
    // dark theme
    dark: {},
  };
};
