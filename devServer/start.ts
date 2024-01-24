import express from 'express';
import color from 'picocolors';
import path from 'node:path';

import { printDeps, ServerPort } from "./utils";
import * as process from "process";


function main() {
  const app = express();

  app.get('/', (_req, res) => {
    const entryHtml = path.join(process.cwd(), 'index.html');
    // res.sendFile();
    // res.send(entryHtml);
    res.sendFile(entryHtml);
  });

  app.listen(ServerPort, () => {
    console.log('本地服务器地址',  color.blue(`http://localhost:${ServerPort}`));
  });
}

main();
