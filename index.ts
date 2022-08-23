'use strict'

import { constants, copyFileSync } from 'node:fs'
import { access, mkdir } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'

import type { PluginOption } from 'vite';
import { copyListOption } from './vite-plugin-copy';

async function checkDir(dest: string) {
  const parents = dirname(dest);
  await access(parents, constants.F_OK).catch(async err => {
    if (err.code == 'ENOENT') {
      await checkDir(parents)
    };
  });
  await access(dest, constants.F_OK).catch(async err => {
    if (err.code == 'ENOENT') {
      await mkdir(dest)
    };
  });
}

function VitePluginCopy(copyList: copyListOption[]): PluginOption {
  return {
    name: 'vit-plugin-copy2',
    apply: 'build',
    generateBundle: async () => {
      if (Array.isArray(copyList)) {
        for (let { src, dest } of copyList) {
          await checkDir(dest)
          if (Array.isArray(src)) {
            for (let s of src) {
              await copyFileSync(s, join(dest, basename(s)))
            }
          } else {
            await copyFileSync(src as string, join(dest, basename(src as string)))
          }
        }
      }
    }
  }
}

export { VitePluginCopy }