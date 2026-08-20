# Japanese Notebook Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a Japanese notebook-inspired visual system and Git-based last-updated metadata to RshBook.

**Architecture:** Keep VitePress's default theme and extend it through a local theme entry point plus CSS custom properties and component selectors. The existing Markdown and navigation remain unchanged; VitePress reads each page's Git timestamp at build time.

**Tech Stack:** VitePress 1.6, TypeScript, CSS, npm, GitHub Actions, GitHub Pages.

---

## File structure

- `docs/.vitepress/config.mts` — activates Git-derived update timestamps and Chinese metadata label.
- `docs/.vitepress/theme/index.ts` — loads VitePress's default theme and the local style layer.
- `docs/.vitepress/theme/style.css` — provides the warm-paper palette, typography, layout spacing, and home-page treatment.
- `.gitignore` — excludes visual brainstorming files.

### Task 1: Enable page update metadata

**Files:**
- Modify: `docs/.vitepress/config.mts`

- [ ] **Step 1: Add the VitePress update settings**

Add these root and theme settings while retaining all existing navigation and sidebars:

```ts
lastUpdated: true,
themeConfig: {
  lastUpdated: {
    text: '最后更新',
    formatOptions: { dateStyle: 'medium' }
  }
}
```

- [ ] **Step 2: Build and inspect generated metadata**

Run: `npm ci --include=dev && npm run docs:build && rg -q '最后更新' docs/.vitepress/dist/ai/index.html`

Expected: exits with code 0. The home page uses VitePress's `home` layout and does not render page metadata.

### Task 2: Add the visual theme layer

**Files:**
- Create: `docs/.vitepress/theme/index.ts`
- Create: `docs/.vitepress/theme/style.css`

- [ ] **Step 1: Load VitePress's default theme with local CSS**

```ts
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default DefaultTheme
```

- [ ] **Step 2: Add the notebook visual tokens and component rules**

Create `style.css` with a warm `#f7f4ed` background, ink `#2f2a25`, muted line `#d9d0c2`, and vermilion `#c95e43` accent. Style content headings with `Iowan Old Style`, `Baskerville`, `Songti SC`, and `STSong` fallbacks; retain system sans-serif for body text. Apply generous article line-height, light paper-like card surfaces, understated sidebar/nav separators, and a notebook-style home hero.

- [ ] **Step 3: Verify production output**

Run: `npm ci --include=dev && npm run docs:build && test -f docs/.vitepress/dist/assets/style.css || test -f docs/.vitepress/dist/index.html`

Expected: exits with code 0.

### Task 3: Keep temporary previews out of Git and publish

**Files:**
- Modify: `.gitignore`
- Create: `docs/superpowers/plans/2026-08-20-japanese-notebook-theme.md`

- [ ] **Step 1: Ignore brainstorming artifacts**

Add this line to `.gitignore`:

```gitignore
.superpowers/
```

- [ ] **Step 2: Commit and push**

Run: `git add .gitignore docs/.vitepress docs/superpowers/plans/2026-08-20-japanese-notebook-theme.md && git commit -m "feat: add Japanese notebook theme" && git push`

- [ ] **Step 3: Verify Pages deployment**

Run: query the latest GitHub Actions run until `conclusion` is `success`, then request `https://rsh-airborder.github.io/RshBook/ai/` and confirm HTTP 200 and the page title.
