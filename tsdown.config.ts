import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "scroll-area/index": "src/scroll-area/index.ts",
  },
  format: "esm",
  target: "esnext",
  outDir: "dist",
  dts: true,
  clean: true,
  treeshake: true,
  external: ["solid-js", "solid-js/web"],
});
