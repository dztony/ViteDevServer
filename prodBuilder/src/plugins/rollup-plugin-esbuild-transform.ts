import * as esbuild from 'esbuild';
import { Plugin } from 'rollup';
import { red, blue } from 'picocolors';
import fs from 'node:fs';

export default function RollupPluginEsbuildTransform(): Plugin {
  return {
    name: 'rollup-plugin-esbuild-transform',
    buildStart(inputOptions) {
      console.log(red('esbuild-transform buildStart hook'));
    },
    async load(id) {
      console.log(blue(`resolveId - ${id}`));
      const originCode = fs.readFileSync(id).toString();
      console.log(originCode);
      const { code, map } = await esbuild.transform(originCode, {
        loader: 'tsx',
        format: 'esm',
      });
      return {
        code,
        map,
      };
    },
  };
}
