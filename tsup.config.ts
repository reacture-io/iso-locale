import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "countries/index": "src/countries/index.ts",
    index: "src/index.ts",
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  treeshake: true,
});
