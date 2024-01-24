import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const entry = path.join(__dirname, 'devServer/start.ts');
  const output = path.join(__dirname, 'devServerDist');
  await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    outdir: output,
    format: 'esm',
    write: true,
  });
}

main();
