import { resolve } from 'path'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteImageOptions',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['fs', 'fs/promises', 'sharp', ...Object.keys(pkg.dependencies)],
      plugins: [
        visualizer({
          filename: 'reports/build-stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      output: {
        globals: {
          fs: 'fs',
          'fs/promises': 'fsp',
          sharp: 'sharp',
        },
      },
    },
  },
})
