import { Request, Response, NextFunction } from "express";
import { AssetSuffix } from "../utils";

export default async function middlewareAssetProcessor(req: Request, res: Response, next: NextFunction) {
  const { url, path: filePath, query } = req;
  if (filePath.startsWith('/src') && url.endsWith(AssetSuffix)) {
    const assetHttp = 'http://localhost:3010' + filePath;
    const script = `
    const assetPath = "${assetHttp}"
    export default assetPath;
    `;
    res.setHeader('Content-type', 'application/javascript');
    return res.send(script);
  }

  next();
}