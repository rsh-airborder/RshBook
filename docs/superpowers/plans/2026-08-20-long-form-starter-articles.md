# Long-form Starter Articles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Populate RshBook with six original long-form tutorials across AI and technical-note categories.

**Architecture:** Keep existing category landing pages, then add standalone Markdown tutorials alongside them. Extend the current VitePress sidebars with indented article links so readers can reach each tutorial from its parent category without changing the site's information architecture.

**Tech Stack:** Markdown, VitePress, TypeScript navigation configuration, npm, GitHub Pages.

---

## File structure

- `docs/ai/ai-tools-workflow.md` — tutorial for selecting an AI toolkit by task.
- `docs/ai/prompt-context.md` — tutorial for reusable prompt briefs.
- `docs/ai/ai-coding-context.md` — tutorial for giving coding agents useful context.
- `docs/ai/personal-automation.md` — tutorial for designing a personal automation workflow.
- `docs/tech/solo-project-habits.md` — tutorial for individual project engineering habits.
- `docs/tech/developer-notes-system.md` — tutorial for a searchable development-record system.
- `docs/.vitepress/config.mts` — sidebar links for every new article.

### Task 1: Write the AI tutorials

**Files:**
- Create: `docs/ai/ai-tools-workflow.md`
- Create: `docs/ai/prompt-context.md`
- Create: `docs/ai/ai-coding-context.md`
- Create: `docs/ai/personal-automation.md`

- [ ] **Step 1: Write four original tutorials**

Each article has a Chinese H1, an opening problem statement, 3–5 named sections, a worked example or template, an actionable checklist, and a concise closing. Cover selection by task, reusable prompt briefs, coding-agent context, and personal automation boundaries respectively.

- [ ] **Step 2: Add sidebar links below the matching AI category entries**

Add the article links in `docs/.vitepress/config.mts` immediately after AI 工具、大模型与提示词、AI 编程、工作流与自动化, respectively.

### Task 2: Write the technical tutorials

**Files:**
- Create: `docs/tech/solo-project-habits.md`
- Create: `docs/tech/developer-notes-system.md`

- [ ] **Step 1: Write two original tutorials**

Each article uses the same long-form structure. Cover small, reversible engineering habits for solo projects and a workflow for recording and retrieving development notes.

- [ ] **Step 2: Add sidebar links below the matching technical category entries**

Add the links after 工程实践 and 工具与效率 in `docs/.vitepress/config.mts`.

### Task 3: Verify and publish

**Files:**
- Create: `docs/superpowers/plans/2026-08-20-long-form-starter-articles.md`

- [ ] **Step 1: Build the site**

Run: `npm ci --include=dev && npm run docs:build`

Expected: exits with code 0 and renders all six article paths.

- [ ] **Step 2: Commit and push**

Run: `git add docs/ai docs/tech docs/.vitepress/config.mts docs/superpowers/plans/2026-08-20-long-form-starter-articles.md && git commit -m "docs: add starter tutorials" && git push`

- [ ] **Step 3: Verify GitHub Pages**

Wait for the latest GitHub Actions run to succeed, then request `https://rsh-airborder.github.io/RshBook/ai/prompt-context` and confirm HTTP 200.
