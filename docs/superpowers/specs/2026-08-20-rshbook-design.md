# Rsh 的笔记：站点设计

## 目标

创建一个以 Markdown 为内容源的个人知识库，并发布到 GitHub Pages。

## 技术方案

采用 VitePress。它提供简洁的 Markdown 写作体验、文档导航与静态站点构建能力，适合由 GitHub Actions 自动发布。

不采用 MkDocs Material（需要维护 Python 工具链）或旧版 GitBook CLI（生态较旧）。

## 信息架构

```text
Rsh 的笔记
├── 首页
├── 关于
├── 随笔
├── AI 笔记
│   ├── AI 基础
│   ├── 大模型与提示词
│   ├── AI 工具
│   ├── AI 编程
│   ├── 工作流与自动化
│   └── 论文与资源
└── 技术笔记
    ├── 编程语言
    ├── 前端开发
    ├── 后端开发
    ├── 工具与效率
    └── 工程实践
```

每个栏目会对应一个 Markdown 入口页；初版各页面提供简短说明，便于后续直接新增文章。

## 发布架构

1. 内容与 VitePress 配置保存在 `main` 分支。
2. GitHub Actions 在推送到 `main` 后安装依赖并运行静态构建。
3. 构建结果发布到 GitHub Pages。
4. 公开地址为 `https://rsh-airborder.github.io/RshBook/`。

VitePress 将配置站点基础路径为 `/RshBook/`，以保证 GitHub Pages 的项目页资源路径正确。

## 异常处理与验证

- 构建脚本失败时，GitHub Actions 停止发布并输出错误日志。
- 本地验证至少包括依赖安装与生产构建。
- 发布后检查 GitHub Actions 工作流状态，并打开站点确认首页与分类导航可访问。

## 非目标

- 初版不引入评论、统计、搜索服务、数据库或自定义域名。
- 不迁移旧站内容；后续可按需复制文章。
