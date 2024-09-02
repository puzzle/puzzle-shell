import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
// import eslintPluginLitA11y from "eslint-plugin-lit-a11y"; // TODO: re-enable this plugin once it supports ESLint 9's flat config format
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["dist/*", "storybook-static/*"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
