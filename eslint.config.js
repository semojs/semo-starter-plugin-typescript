// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
export default tseslint.config(
  {
    ignores: ["lib"],
  },
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  prettierConfig,
  {
    rules: {
      "no-unused-vars": "off",
    },
  }
);
