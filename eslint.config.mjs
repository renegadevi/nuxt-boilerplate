// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    files: ["**/*.{js,ts,vue}"],
    rules: {
      // custom rules here
    },
  },
);
