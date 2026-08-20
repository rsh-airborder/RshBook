# RshBook VitePress Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and automatically publish the “Rsh 的笔记” Markdown documentation site to GitHub Pages.

**Architecture:** VitePress renders Markdown from `docs/`, while a single typed configuration defines the project-page base path, navigation, and sidebars. A GitHub Actions workflow builds the static artifact whenever `main` receives a push and deploys it through GitHub Pages.

**Tech Stack:** Node.js, VitePress, npm, GitHub Actions, GitHub Pages.

---

## File structure

- `package.json` and `package-lock.json` — project scripts and locked VitePress dependency.
- `docs/.vitepress/config.mts` — site metadata, navigation, and sidebars.
- `docs/index.md`, `docs/about.md`, `docs/essays/index.md` — primary pages.
- `docs/ai/*.md` and `docs/tech/*.md` — category entry pages.
- `.github/workflows/deploy.yml` — build and GitHub Pages deployment.

### Task 1: Create the VitePress project definition

**Files:**
- Create: `package.json`
- Create: `package-lock.json`

- [ ] **Step 1: Add the manifest**

```json
{
  "name": "rshbook",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": { "vitepress": "^1.6.3" }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: exits with code 0 and creates `package-lock.json`.

- [ ] **Step 3: Commit the project definition**

Run: `git add package.json package-lock.json && git commit -m "build: add VitePress project"`

### Task 2: Add pages and navigation

**Files:**
- Create: `docs/.vitepress/config.mts`
- Create: `docs/index.md`, `docs/about.md`, `docs/essays/index.md`
- Create: `docs/ai/index.md`, `docs/ai/fundamentals.md`, `docs/ai/llm-prompting.md`, `docs/ai/tools.md`, `docs/ai/coding.md`, `docs/ai/workflows.md`, `docs/ai/papers-resources.md`
- Create: `docs/tech/index.md`, `docs/tech/languages.md`, `docs/tech/frontend.md`, `docs/tech/backend.md`, `docs/tech/tools-productivity.md`, `docs/tech/engineering.md`

- [ ] **Step 1: Configure VitePress**

Use `defineConfig` with `lang: 'zh-CN'`, title `Rsh 的笔记`, description `记录思考、AI 学习与技术实践。`, base `/RshBook/`, top navigation for 首页、随笔、AI 笔记、技术笔记、关于, and sidebars that link every listed AI and technical page. Include a GitHub social link to `https://github.com/rsh-airborder/RshBook`.

- [ ] **Step 2: Add Markdown entry pages**

Give each listed page one matching Chinese H1 and a concise Chinese introduction saying the category is ready for future notes.

- [ ] **Step 3: Validate the production build**

Run: `npm run docs:build && test -f docs/.vitepress/dist/index.html`

Expected: exits with code 0.

- [ ] **Step 4: Commit the documentation content**

Run: `git add docs/.vitepress docs/index.md docs/about.md docs/essays docs/ai docs/tech && git commit -m "feat: add RshBook content structure"`

### Task 3: Deploy to GitHub Pages

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Add a Pages workflow**

The `Deploy VitePress site` workflow runs on pushes to `main` and manual dispatch. It grants `contents: read`, `pages: write`, and `id-token: write`; uses Node 20 with npm caching; runs `npm ci` and `npm run docs:build`; uploads `docs/.vitepress/dist` with `actions/upload-pages-artifact@v3`; then deploys it with `actions/deploy-pages@v4` in a `github-pages` environment.

- [ ] **Step 2: Re-run local build validation**

Run: `npm run docs:build && test -f docs/.vitepress/dist/index.html`

Expected: exits with code 0.

- [ ] **Step 3: Commit and push**

Run: `git add .github/workflows/deploy.yml docs/superpowers/plans/2026-08-20-rshbook-vitepress.md && git commit -m "ci: deploy site to GitHub Pages" && git push -u origin main`

- [ ] **Step 4: Verify the deployment**

Open `https://rsh-airborder.github.io/RshBook/` after the workflow succeeds. Confirm the “Rsh 的笔记” title and AI/technical category links load.
