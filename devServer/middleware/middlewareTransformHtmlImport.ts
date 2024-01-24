import { Request, Response, NextFunction } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import * as esbuild from 'esbuild';
import * as color from 'picocolors';

export default async function middlewareTransformHtmlImport(req: Request, res: Response, next: NextFunction) {
  const { url } = req;
  if (url.startsWith('/src')) {
    const resolvePath = resolveHtmlImportFile(url);
    const codeString = fs.readFileSync(resolvePath).toString();
    const loader =  getHtmlImportFileLoader(url);
    const { code: transformedCode } = await esbuild.transform(codeString, {
      loader: loader,
      format: 'esm',
    });
    res.setHeader('Content-type', 'application/javascript');
    return res.send(transformedCode);
  }

  next();
}

function resolveHtmlImportFile(filename: string): string {
  return path.join(process.cwd(), filename);
}

function getHtmlImportFileLoader(filename: string) {
  return path.extname(filename).split('.')[1] as esbuild.Loader;
}

