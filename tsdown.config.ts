import solid from "rolldown-plugin-solid";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    "scroll-area/index": "src/scroll-area/index.ts",
  },
  platform: "neutral",
  outDir: "dist",
  dts: true,
  clean: true,
  treeshake: true,
  plugins: [solid()],
});
