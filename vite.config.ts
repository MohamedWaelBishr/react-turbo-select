import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    cssCodeSplit : true,
    lib: {
      entry: path.resolve(__dirname, "src/react-turbo-select/index.tsx"),
      name: "React Turbo Select",
      fileName: (format) => `react-turbo-select.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(),dts()],
});
