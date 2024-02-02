import path from "node:path";
import { rollup } from 'rollup';
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from '@rollup/plugin-node-resolve';

async function main() {
  console.log('prod build 123123');
  const entryHtml = path.join(process.cwd(), 'index.html');
  const entry = path.join(process.cwd(), 'src/main.tsx');

  const entryJs = path.join(process.cwd(), 'src/test.js');
  const entryTs = path.join(process.cwd(), 'src/test2.ts');
  console.log('entryTs - ', entryTs);
  const bundle = await rollup({
    input: {
      // 'ts': entryTs,
      // 'jsx': entry,
      'js': entryJs,
    },
    plugins: [
      commonjs(),
      nodeResolve(),
    ],
  });
  await bundle.write({
    format: 'es',
    dir: 'dist/appDist',
    entryFileNames: "[name]_[hash].js",
  });
  await bundle.close();
}

main();
