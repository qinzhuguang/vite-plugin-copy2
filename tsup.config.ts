import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'vite-plugin-copy2': 'index.ts'
  },
  outDir: 'dist',
  minify: true,
  target: 'es5',
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => {
    switch (format) {
      case 'esm':
        return {
          js: `.mjs`
        }
      case 'cjs':
        return {
          js: `.cjs`
        }
    }
  },
  clean: true,
  dts: true
})