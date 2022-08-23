import { PluginOption } from 'vite';

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

declare interface copyListOption {
  src: string | Record<string, any>;
  dest: string;
}

declare function VitePluginCopy(copyList: copyListOption[]): PluginOption;

export { VitePluginCopy };
