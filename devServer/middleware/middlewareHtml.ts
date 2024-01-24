import { Request, Response, NextFunction } from 'express';
import path from "node:path";
import * as process from "process";

export default function middlewareHtml(req: Request, res: Response, next: NextFunction) {
  if (req.url === '/') {
    const entryHtml = path.join(process.cwd(), 'index.html');
    res.setHeader('x-middleware-html', Date.now());
    return res.sendFile(entryHtml);
  }

  next();
}
