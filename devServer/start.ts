import express, { Request, Response } from 'express';
import color from 'picocolors';

import { printDeps, ServerPort } from "./utils";
import middlewareLogger from "./middleware/middlewareLogger";
import middlewareHtml from "./middleware/middlewareHtml";
import middlewareTransformHtmlImport from "./middleware/middlewareTransformHtmlImport";


function main() {
  const app = express();

  // 中间件
  app.use(middlewareLogger);
  app.use(middlewareHtml);
  app.use(middlewareTransformHtmlImport);

  app.listen(ServerPort, () => {
    console.log('本地服务器地址',  color.blue(`http://localhost:${ServerPort}`));
  });
}

main();
