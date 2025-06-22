import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "countries/index": "src/countries/index.ts",
    "languages/index": "src/languages/index.ts",
    "currencies/index": "src/currencies/index.ts",
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
});
