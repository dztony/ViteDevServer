import path from "node:path";
import { rollup } from 'rollup';
import swc from "@rollup/plugin-swc";

async function main() {
  console.log('prod build 123123');
  const entryHtml = path.join(process.cwd(), 'index.html');
  const entry = path.join(process.cwd(), 'src/main.tsx');

  const entryJs = path.join(process.cwd(), 'src/test.js');
  const entryTs = path.join(process.cwd(), 'src/test2.ts');
  console.log('entryTs - ', entryTs);
  const bundle = await rollup({
    input: {
      'ts': entryTs,
    },
    plugins: [
      swc(),
    ],
  });
  // console.log('bundle - ', JSON.stringify(bundle, null, 2));
  await bundle.write({
    format: 'es',
    dir: 'dist/appDist',
    entryFileNames: "[name]_[hash].js",
  });
  await bundle.close();
}

main();
