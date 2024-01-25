import { Request, Response, NextFunction } from "express";
import { AssetSuffix } from "../utils";
import path from "node:path";
import * as process from "process";

export default async function middlewareStatic(req: Request, res: Response, next: NextFunction) {
  const { url, path: filepath } = req;
  if (url.startsWith('/src/asset') && !url.endsWith(AssetSuffix)) {
    const filename = path.join(process.cwd(), filepath);
    return res.sendFile(filename);
  }

  next();
}
