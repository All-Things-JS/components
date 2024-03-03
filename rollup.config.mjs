import html from "rollup-plugin-html";
import css from "rollup-plugin-import-css";
import multiInput from "rollup-plugin-multi-input";
import path from "path";

export default {
  input: ["lib/**/*.js"],
  output: { dir: "dist", format: "esm" },
  plugins: [
    html({
      include: "**/*.html",
    }),
    css(),
    multiInput.default({
      transformOutputPath: (output) => `${path.basename(output)}`,
    }),
  ],
};
