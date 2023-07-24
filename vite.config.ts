import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { defineConfig, UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import EsLint from 'vite-plugin-linter'
const { EsLinter, linterPlugin } = EsLint

const App = async (configEnv): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      tsConfigPaths(),
      linterPlugin({
        include: ['./src}/**/*.{ts,tsx}'],
        linters: [new EsLinter({ configEnv })],
      }),
      react(),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        include: ['src/react-turbo-select'],
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/react-turbo-select/index.tsx'),
        name: 'react-turbo-select',
        formats: ['es', 'umd'],
        fileName: (format) => `react-turbo-select.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled',
          },
        },
      },
    },
  })
}

export default App
