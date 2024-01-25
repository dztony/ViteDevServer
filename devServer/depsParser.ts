import * as esbuild from 'esbuild';
import path from 'node:path';
import * as process from "process";
import { green } from "picocolors";

export async function getDeps() {
  const deps = new Set<string>();
  const entry = path.join(process.cwd(), 'src/main.tsx');

  await esbuild.build({
    entryPoints: [entry],
    plugins: [
      EsbuildPluginDepsCollection(deps),
    ],
    bundle: true,
    write: false,
  });

  return deps;
}

function EsbuildPluginDepsCollection(deps: Set<string>): esbuild.Plugin {
  return {
    name: 'esbuild-plugin-deps-collection',
    setup(build) {
      build.onResolve(
        {
          filter: /\.(css|svg|png|jpg|jpeg)$/,
        },
        (resolveInfo) => {
          return {
            path: resolveInfo.path,
            external: true,
          };
        },
      )

      build.onResolve(
        {
          filter: /^[\w@][^:]/,
        },
        (resolveInfo) => {
          const { path: id } = resolveInfo;
          console.log(green(JSON.stringify(resolveInfo, null, 2)));
          deps.add(id);
          return {
            path: id,
            external: true,
          };
        },
      );
    },
  };
}
