import * as esbuild from 'esbuild';
import color from 'picocolors';
import fs from 'node:fs';

export default function RollupPluginEsbuildTransform() {
  return {
    name: 'rollup-plugin-esbuild-transform',
    buildStart(inputOptions) {
      console.log(color.red('****esbuild-transform start****'));
    },
    async load(id) {
      const charList = id.split('.');
      const extname = charList[charList.length - 1];
      console.log(color.yellow(id + '--' + extname));
      const originCode = fs.readFileSync(id).toString();
      const { code, map } = await esbuild.transform(originCode, {
        loader: extname,
        format: 'esm',
        platform: 'browser',
        target: [
          'es6',
        ],
        define: {
          'process.env.NODE_ENV': '"production"',
        },
        // minify: true,
        // banner: "import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);",
      });
      return {
        code,
        map,
      };
    },
    buildEnd() {
      console.log(color.red('****esbuild-transform end****'));
    },
  };
}
