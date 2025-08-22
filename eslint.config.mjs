import config from "@reacture-io/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: ["dist/", "node_modules/"],
  },
  {
    rules: {
      "@typescript-eslint/naming-convention": "off", // opt out due to numbers in variable names (working with ISO codes)
    },
  },
];
