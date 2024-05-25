import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { 
    files: ["*.vue", "**/*.vue"],
    languageOptions: { 
      globals: globals.browser,
      parser: vueParser,
      parserOptions: { parser: tseslint.parser, sourceType: "module" },
    } 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
];