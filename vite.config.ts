import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/puzzle-shell.ts",
      fileName: "bundle",
      formats: ["es"],
    },
    rollupOptions: {
      // Don't externalize Lit as we want to publish the web
      // components as a standalone package, including Lit
      // external: /^lit/
    },
  },
  plugins: [],
});
