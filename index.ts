"use strict";

import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";

import type { PluginOption } from "vite";

import { copyListOption } from "./vite-plugin-copy";

// 检查文件夹，不存在则创建
async function checkDir(dest: string) {
  const parents = path.dirname(dest);
  await fsPromises.access(parents, fs.constants.F_OK).catch(async (err) => {
    if (err.code == "ENOENT") {
      await checkDir(parents);
    }
  });
  await fsPromises.access(dest, fs.constants.F_OK).catch(async (err) => {
    if (err.code == "ENOENT") {
      await fsPromises.mkdir(dest);
    }
  });
}

// 递归文件夹，复制文件夹和文件
async function copyDir(src: string, dest: string) {
  let rd = fs.readdirSync(src as string);
  for (const fd of rd) {
    let sourceFullName = path.join(src, fd);
    let destFullName = path.join(dest, fd);
    if (fs.lstatSync(sourceFullName).isDirectory()) {
      await checkDir(destFullName);
      copyDir(sourceFullName, destFullName);
    } else {
      await fs.copyFileSync(sourceFullName, destFullName);
    }
  }
}

function VitePluginCopy(copyList: copyListOption[]): PluginOption {
  return {
    name: "vit-plugin-copy2",
    apply: "build",
    generateBundle: async () => {
      if (Array.isArray(copyList)) {
        for (let { src, dest } of copyList) {
          await checkDir(dest);
          if (Array.isArray(src)) {
            for (let s of src) {
              await fs.copyFileSync(s, path.join(dest, path.basename(s)));
            }
          } else {
            if (fs.lstatSync(src as string).isDirectory()) {
              copyDir(src as string, dest);
            } else {
              await fs.copyFileSync(
                src as string,
                path.join(dest, path.basename(src as string))
              );
            }
          }
        }
      }
    },
  };
}

export { VitePluginCopy };
