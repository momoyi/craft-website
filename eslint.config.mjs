import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact },
    extends: [
      "js/recommended",
      "plugin:react/recommended", // Ensure React plugin is included
    ],
    rules: {
      // Disable the rule that requires React in scope when using JSX
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended, // Apply React plugin config
]);
