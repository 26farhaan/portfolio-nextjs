/* eslint.config.mjs */
import { defineConfig, globalIgnores } from "eslint/config";
import prettierConfig from "eslint-config-prettier/flat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";

// ---- Base configs (Next + TypeScript) ----
// nextVitals sudah membawa plugin react, react-hooks, jsx-a11y, dan import.
// nextTs sudah membawa parser + rules dari typescript-eslint recommended.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // ---- Global (JS/TS) rules ----
  {
    plugins: {
      prettier,
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

      // --- Rule baru dari eslint-plugin-react-hooks v7 (dibawa eslint-config-next 16) ---
      // TODO: turunkan ke "error" lagi setelah pola mount-guard/hidrasi dan
      // useCallback(debounce(...)) di-refactor. Lihat catatan upgrade Next 16.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/use-memo": "warn",

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
  {
    files: ["**/*.+(ts|tsx)"],
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

  // ---- Prettier terakhir supaya rule formatting yang konflik dimatikan ----
  prettierConfig,

  // Override default ignores dari eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
