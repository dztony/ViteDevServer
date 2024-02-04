import * as esbuild from 'esbuild';
import { Plugin } from 'rollup';
import { red, blue } from 'picocolors';
import fs from 'node:fs';

export default function RollupPluginEsbuildTransform(): Plugin {
  return {
    name: 'rollup-plugin-esbuild-transform',
    buildStart(inputOptions) {
      console.log(red('****esbuild-transform start****'));
    },
    async load(id) {
      const originCode = fs.readFileSync(id).toString();
      const { code, map } = await esbuild.transform(originCode, {
        loader: 'tsx',
        format: 'esm',
        platform: 'browser',
        target: [
          'es6',
        ],
        define: {
          'process.env.NODE_ENV': '"production"',
        },
        minify: true,
        // banner: "import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);",
      });
      return {
        code,
        map,
      };
    },
    buildEnd() {
      console.log(red('****esbuild-transform end****'));
    },
  };
}
