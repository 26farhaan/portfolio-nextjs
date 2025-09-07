"use client";

// import { Arimo } from "next/font/google";
import {
  Badge,
  Button,
  createTheme,
  DEFAULT_THEME,
  localStorageColorSchemeManager,
  NumberInput,
  rem,
  ScrollArea,
  TextInput,
  type CSSVariablesResolver,
  type MantineThemeOther,
  type MantineThemeOverride,
} from "@mantine/core";

// import { DatePickerInput } from "@mantine/dates";

import styles from "@/styles/base.module.css";

// const fontArimo = Arimo({
//   subsets: ["latin"],
//   style: "normal",
//   variable: "--font-arimo",
//   weight: ["400", "700"],
// });

const customColors = {
  "own-neutral-300": "#333333",
};

const theme: MantineThemeOverride = {
  ...DEFAULT_THEME,
  fontFamily: "Zapf Humanist, sans-serif",
  headings: {
    fontFamily: "Zapf Humanist, serif",
    sizes: {
      h1: {
        fontSize: rem(48),
        lineHeight: rem(56),
      },
      h2: {
        fontSize: rem(40),
        lineHeight: rem(48),
      },
      h3: {
        fontSize: rem(32),
        lineHeight: rem(40),
      },
      h4: {
        fontSize: rem(24),
        lineHeight: rem(32),
      },
      // h5: {
      //   fontSize: rem(24),
      //   lineHeight: rem(32),
      // },
      // h6: {
      //   fontSize: rem(24),
      //   lineHeight: rem(32),
      // },
    },
  },
  components: {
    ScrollArea: ScrollArea.extend({
      defaultProps: {
        scrollbarSize: 2,
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        hideControls: true,
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        inputWrapperOrder: ["label", "input", "description", "error"],
      },
    }),
    // DatePickerInput: DatePickerInput.extend({
    //   defaultProps: {
    //     inputWrapperOrder: ["label", "input", "description", "error"],
    //   },
    // }),
    Button: Button.extend({
      defaultProps: {
        variant: "outline",
      },
    }),
    Badge: Badge.extend({
      classNames: () => ({
        root: styles.baseBadge,
      }),
    }),
  },
  primaryColor: "tasman",
  primaryShade: { light: 5, dark: 8 },
  colors: {
    almond: [
      "#fff1eb",
      "#f3dcd4",
      "#e7c0b3",
      "#da9e89",
      "#d08165",
      "#c96e4e",
      "#c76442",
      "#b05433",
      "#9d492c",
      "#8a3d22",
    ],
    "rose-fog": [
      "#ffeeed",
      "#f6dcdb",
      "#ecc9c7",
      "#d7908c",
      "#ca6f6a",
      "#c35a54",
      "#c04f48",
      "#a94039",
      "#983732",
      "#862c29",
    ],
    tasman: [
      "#f0f8f0",
      "#d9e3da",
      "#c8d4c9",
      "#a9bdab",
      "#8fa891",
      "#7e9c80",
      "#749677",
      "#628265",
      "#557459",
      "#466549",
    ],
    "foggy-gray": [
      "#f8f6eb",
      "#ebeae1",
      "#d1cfc0",
      "#bebba7",
      "#aaa68d",
      "#9d997c",
      "#979372",
      "#837f60",
      "#757153",
      "#656142",
    ],
    ash: ["#f6f7eb", "#eaeae1", "#d2d2c7", "#c2c2b4", "#a5a591", "#979781", "#919177", "#7d7d65", "#6f6f57", "#606046"],
  },
  other: {
    ...customColors,
  },
};

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

export const colorSchemeManager = localStorageColorSchemeManager({
  key: "mantine-color-scheme-value",
});

export const mantinetheme = createTheme(theme);
