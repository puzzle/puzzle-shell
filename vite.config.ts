import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/puzzle-shell.ts",
      formats: ["es"],
    },
    rollupOptions: {
      // Don't externalize Lit as we want to publish the web
      // components as a standalone package, including Lit
      // external: /^lit/
    },
  },
  plugins: [dts()],
});
