import { green, yellow } from "picocolors";
import path from 'node:path';
import * as esbuild from "esbuild";

export function printDeps(deps: Set<string>) {
  console.log(yellow(`预构建的依赖 (数量 - ${deps.size})`));
  deps.forEach(item => {
    console.log(green(`    ${item}`));
  });
}

export function parseFileLoader(filename: string) {
  return path.extname(filename).split('.')[1] as esbuild.Loader;
}

export const ServerPort = 3010;

export const RegExternalType = /\.(css|svg|png|jpg|jpeg)$/;
export const RegThirdPartyLib = /^[\w@][^:]/;

export const PreBuildLocation = path.join(process.cwd(), '/node_modules/.devServerCache');
