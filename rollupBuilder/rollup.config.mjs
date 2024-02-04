import path from 'node:path';
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from '@rollup/plugin-node-resolve';

const dirName = process.cwd();

export default {
  input: path.join(dirName, 'src/test.js'),
  output: {
    dir: path.join(dirName, 'dist/appDist'),
    entryFileNames: 'my_bundle.js'
  },
  plugins: [
    commonjs(),
    nodeResolve(),
  ],
};
