type Record<K extends keyof any, T> = {
  [P in K]: T;
};

export declare interface copyListOption {
  src: string | Record<string, any>;
  dest: string;
}