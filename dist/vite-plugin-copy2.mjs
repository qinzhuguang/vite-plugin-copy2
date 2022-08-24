// index.ts
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
async function checkDir(dest) {
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
async function copyDir(src, dest) {
  let rd = fs.readdirSync(src);
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
function VitePluginCopy(copyList) {
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
            if (fs.lstatSync(src).isDirectory()) {
              copyDir(src, dest);
            } else {
              await fs.copyFileSync(
                src,
                path.join(dest, path.basename(src))
              );
            }
          }
        }
      }
    }
  };
}
export {
  VitePluginCopy
};
