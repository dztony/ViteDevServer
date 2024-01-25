import express, { Request, Response } from 'express';
import { blue } from 'picocolors';

import { printDeps, ServerPort } from "./utils";
import middlewareLogger from "./middleware/middlewareLogger";
import middlewareHtml from "./middleware/middlewareHtml";
import middlewareTransformHtmlImport from "./middleware/middlewareTransformHtmlImport";
import { getDeps } from "./depsPreBuild/depsParser";
import { preBuild } from "./depsPreBuild/depsPrebuild";


function main() {
  const app = express();

  // 中间件
  app.use(middlewareLogger);
  app.use(middlewareHtml);
  app.use(middlewareTransformHtmlImport);

  app.get('*', (req: Request, res: Response) => {
    res.statusCode = 401;
    res.send('待处理');
  });

  app.listen(ServerPort, async() => {
    const deps = await getDeps();
    await preBuild(deps);

    console.log('本地服务器地址', blue(`http://localhost:${ServerPort}`));
  });
}

main();
