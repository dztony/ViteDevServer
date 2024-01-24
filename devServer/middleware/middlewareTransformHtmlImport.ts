import { Request, Response, NextFunction } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import * as esbuild from 'esbuild';

export default async function middlewareTransformHtmlImport(req: Request, res: Response, next: NextFunction) {
  const { url } = req;
  if (url.startsWith('/src') && url.endsWith('.ts')) {
    const resolvePath = resolveHtmlImportFile(url);
    const codeString = fs.readFileSync(resolvePath).toString();
    const loader = path.extname(url).split('.')[1] as esbuild.Loader;
    const { code } = await esbuild.transform(codeString, {
      loader: loader,
      format: 'esm',
    });
    res.setHeader('Content-type', 'application/javascript');
    return res.send(code);
  }
  next();
}

function resolveHtmlImportFile(filename: string): string {
  return path.join(process.cwd(), filename);
}

