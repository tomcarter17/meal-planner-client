import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [eslint(), solidPlugin(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
