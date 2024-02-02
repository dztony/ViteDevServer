import path from "node:path";
import { rollup } from 'rollup';

async function main() {
  console.log('prod build 123123');
  const entryHtml = path.join(process.cwd(), 'index.html');
  const entry = path.join(process.cwd(), 'src/main.tsx');

  const entryJs = path.join(process.cwd(), 'src/test.js');
  // console.log('entryHtml - ', entryHtml);
  // console.log('entry - ', entry);
  console.log('entryJs - ', entryJs);
  const bundle = await rollup({
    input: entryJs,
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
