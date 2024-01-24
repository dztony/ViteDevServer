### 说明
- 此项目基础是使用 vite 创建的 react-ts 的模板项目
- devServer 是本地开发服务器的代码，使用 ts 编写，提供以下两个命令进行本地开发
  - `pnpm run local:build`
    - 使用 nodemon 监听 `devServer` 下的 `typescript` 代码变更
    - 使用 `esbuild` 打包生成 `ESM` 格式的 `javascript` 代码
    - 打包到目录 `devServerDist/start.js`
  - `pnpm run local:dev`
    - 使用 `nodemon` 监听 `devServerDist` 的产物，并进行执行
