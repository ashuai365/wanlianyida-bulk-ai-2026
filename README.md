# 万联易达大宗智能体产品介绍

万联易达大宗智能体 2026 产品介绍站点。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## EdgeOne 自动部署

EdgeOne Pages 连接本 GitHub 仓库的 `main` 分支后，使用以下设置：

- 构建命令：`npm run build:edgeone`
- 输出目录：`edgeone-dist`
- Node.js：`22.13.0` 或更高版本

每次推送到 `main` 后，EdgeOne 会自动重新构建并发布。
