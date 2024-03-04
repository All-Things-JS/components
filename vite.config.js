import { resolve } from "path";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "lib/components.js"),
        resolve(__dirname, "lib/Button/Button.js"),
      ],
      formats: ["es"],
    },
  },
});
