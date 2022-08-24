# vite-plugin-copy2

Vite plugin: supports copying single and multiple files

## Installation

```bash
# yarn
yarn add vite-plugin-copy2 -D

# npm
npm install vite-plugin-copy2 -D
```

## Usage

```vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginCopy } from 'vite-plugin-copy2'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginCopy([
      {
        src: ['demo/a.js', 'demo/b.js'],  // 多个文件
        dest: 'dist/'
      },
      {
        src: 'demo/c.js',  // 单个文件
        dest: 'dist/static/'
      },
      {
        src: 'node_modules',  // 文件夹
        dest: 'dist/node_modules'
      }
    ])
  ]
})
```