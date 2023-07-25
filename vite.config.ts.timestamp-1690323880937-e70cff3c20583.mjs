// vite.config.ts
import react from "file:///home/bishr/Documents/My%20Space/My%20Space/Open%20Source/React%20Turbo%20Select/react-turbo-select/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
import { defineConfig } from "file:///home/bishr/Documents/My%20Space/My%20Space/Open%20Source/React%20Turbo%20Select/react-turbo-select/node_modules/vite/dist/node/index.js";
import dts from "file:///home/bishr/Documents/My%20Space/My%20Space/Open%20Source/React%20Turbo%20Select/react-turbo-select/node_modules/vite-plugin-dts/dist/index.mjs";
import tsConfigPaths from "file:///home/bishr/Documents/My%20Space/My%20Space/Open%20Source/React%20Turbo%20Select/react-turbo-select/node_modules/vite-tsconfig-paths/dist/index.mjs";
import EsLint from "file:///home/bishr/Documents/My%20Space/My%20Space/Open%20Source/React%20Turbo%20Select/react-turbo-select/node_modules/vite-plugin-linter/dist/index.js";
var __vite_injected_original_dirname = "/home/bishr/Documents/My Space/My Space/Open Source/React Turbo Select/react-turbo-select";
var { EsLinter, linterPlugin } = EsLint;
var App = async (configEnv) => {
  return defineConfig({
    plugins: [
      tsConfigPaths(),
      linterPlugin({
        include: ["./src}/**/*.{ts,tsx}"],
        linters: [new EsLinter({ configEnv })]
      }),
      react(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        include: ["src/react-turbo-select"]
      })
    ],
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/react-turbo-select/index.tsx"),
        name: "react-turbo-select",
        formats: ["es", "umd"],
        fileName: (format) => `react-turbo-select.${format}.js`
      },
      rollupOptions: {
        external: ["react", "react-dom", "styled-components"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "styled-components": "styled"
          }
        }
      }
    }
  });
};
var vite_config_default = App;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iaXNoci9Eb2N1bWVudHMvTXkgU3BhY2UvTXkgU3BhY2UvT3BlbiBTb3VyY2UvUmVhY3QgVHVyYm8gU2VsZWN0L3JlYWN0LXR1cmJvLXNlbGVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYmlzaHIvRG9jdW1lbnRzL015IFNwYWNlL015IFNwYWNlL09wZW4gU291cmNlL1JlYWN0IFR1cmJvIFNlbGVjdC9yZWFjdC10dXJiby1zZWxlY3Qvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYmlzaHIvRG9jdW1lbnRzL015JTIwU3BhY2UvTXklMjBTcGFjZS9PcGVuJTIwU291cmNlL1JlYWN0JTIwVHVyYm8lMjBTZWxlY3QvcmVhY3QtdHVyYm8tc2VsZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdub2RlOmZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBVc2VyQ29uZmlnRXhwb3J0IH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBFc0xpbnQgZnJvbSAndml0ZS1wbHVnaW4tbGludGVyJ1xuY29uc3QgeyBFc0xpbnRlciwgbGludGVyUGx1Z2luIH0gPSBFc0xpbnRcblxuY29uc3QgQXBwID0gYXN5bmMgKGNvbmZpZ0Vudik6IFByb21pc2U8VXNlckNvbmZpZ0V4cG9ydD4gPT4ge1xuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB0c0NvbmZpZ1BhdGhzKCksXG4gICAgICBsaW50ZXJQbHVnaW4oe1xuICAgICAgICBpbmNsdWRlOiBbJy4vc3JjfS8qKi8qLnt0cyx0c3h9J10sXG4gICAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgICAgfSksXG4gICAgICByZWFjdCgpLFxuICAgICAgZHRzKHtcbiAgICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgICAgY29weUR0c0ZpbGVzOiB0cnVlLFxuICAgICAgICBpbmNsdWRlOiBbJ3NyYy9yZWFjdC10dXJiby1zZWxlY3QnXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9yZWFjdC10dXJiby1zZWxlY3QvaW5kZXgudHN4JyksXG4gICAgICAgIG5hbWU6ICdyZWFjdC10dXJiby1zZWxlY3QnLFxuICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHJlYWN0LXR1cmJvLXNlbGVjdC4ke2Zvcm1hdH0uanNgLFxuICAgICAgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3N0eWxlZC1jb21wb25lbnRzJ10sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgICAnc3R5bGVkLWNvbXBvbmVudHMnOiAnc3R5bGVkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdWMsT0FBTyxXQUFXO0FBRXpkLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFzQztBQUMvQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxZQUFZO0FBTm5CLElBQU0sbUNBQW1DO0FBT3pDLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUVuQyxJQUFNLE1BQU0sT0FBTyxjQUF5QztBQUMxRCxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsUUFDWCxTQUFTLENBQUMsc0JBQXNCO0FBQUEsUUFDaEMsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsTUFDdkMsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLFFBQ0Ysa0JBQWtCO0FBQUEsUUFDbEIsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLHdCQUF3QjtBQUFBLE1BQ3BDLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxrQ0FBa0M7QUFBQSxRQUNqRSxNQUFNO0FBQUEsUUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsUUFDckIsVUFBVSxDQUFDLFdBQVcsc0JBQXNCLE1BQU07QUFBQSxNQUNwRDtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxtQkFBbUI7QUFBQSxRQUNwRCxRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxPQUFPO0FBQUEsWUFDUCxhQUFhO0FBQUEsWUFDYixxQkFBcUI7QUFBQSxVQUN2QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
