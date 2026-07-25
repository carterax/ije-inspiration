import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// base "./" so the build works under any path (GitHub Pages serves at /repo-name/)
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        systems: fileURLToPath(new URL("./systems.html", import.meta.url)),
      },
    },
  },
});
