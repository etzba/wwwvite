import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  base: "/wwwvite/",
  plugins: [
    react(),
    commonjs(),
  ],
  resolve: {
    alias: {
      src: "/wwwvite/src",
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
});
