import { green, yellow } from "picocolors";

export function printDeps(deps: Set<string>) {
  console.log(yellow(`预构建的依赖 (数量 - ${deps.size})`));
  deps.forEach(item => {
    console.log(green(`    ${item}`));
  });
}

export const ServerPort = 3010;

export const RegExternalType = /\.(css|svg|png|jpg|jpeg)$/;
export const RegThirdPartyLib = /^[\w@][^:]/;
