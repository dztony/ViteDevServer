import * as esbuild from 'esbuild';

export async function preBuild(deps: Set<string>): Promise<void> {
  console.log('预构建 - ', deps);
}
