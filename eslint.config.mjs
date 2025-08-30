/* eslint.config.mjs */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// ---- Base configs (Next + Prettier) ----
const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "prettier"),

  // ---- Global (JS/TS) rules & plugins ----
  {
    plugins: {
      prettier,
      react: reactPlugin,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      // Agar jsx-a11y mengecek <Image> (Next.js) seperti <img>
      "jsx-a11y": {
        components: ["Image"],
      },
    },
    rules: {
      // --- Prettier as error ---
      "prettier/prettier": "error",

      // --- Import plugin (kamu sudah pakai rule-nya) ---
      "import/extensions": ["error", "ignorePackages", { ts: "never", tsx: "never", js: "never", jsx: "never" }],

      // --- React / JSX quality ---
      "react/no-unknown-property": [
        "error",
        {
          // biarkan 'class' di SVG lama tidak di-flag; tetap prefer className di JSX normal
          ignore: ["class"],
        },
      ],
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-no-target-blank": ["warn", { allowReferrer: false, enforceDynamicLinks: "always" }],

      // --- Next.js specific ---
      "@next/next/no-img-element": "warn",

      // --- A11y / SEO essentials ---
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/img-redundant-alt": "warn",
      "jsx-a11y/heading-has-content": "warn",
      "jsx-a11y/no-redundant-roles": "warn",

      // --- yang sebelumnya kamu set ---
      camelcase: "off",
      "import/prefer-default-export": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unused-prop-types": "off",
      "react/require-default-props": "off",
      "react/no-unescaped-entities": "off",
    },
  },

  // ---- TypeScript-only layer ----
  ...compat.extends("plugin:@typescript-eslint/recommended", "prettier").map((config) => ({
    ...config,
    files: ["**/*.+(ts|tsx)"],
  })),

  {
    files: ["**/*.+(ts|tsx)"],
    plugins: { "@typescript-eslint": typescriptEslintPlugin },
    languageOptions: { parser: tsParser },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
