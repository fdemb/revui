import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: process.env.GITHUB_ACTIONS ? "/rigid-ui/" : "/",
  server: {
    port: 3333,
  },
});
