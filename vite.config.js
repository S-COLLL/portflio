import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" must match the GitHub repository name so the site works at
// https://s-colll.github.io/portflio/
export default defineConfig({
  plugins: [react()],
  base: "/portflio/",
});
