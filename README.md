# Taahirah Denmark Portfolio

## Add a blog post

Create a Markdown file in `src/content/posts/`. Its filename becomes the URL slug, so `building-my-first-ai-agent.md` appears at `/blog/building-my-first-ai-agent/`.

Start every file with this frontmatter:

```md
---
title: Building my first AI agent
date: 2026-09-25
excerpt: One sentence about what readers will learn.
published: false
---

Write the article in Markdown here.
```

Run the site locally to preview drafts. Drafts are marked in the blog index and on the article page. They are excluded from production routes.

When an article is ready, change `published: false` to `published: true`. Posts appear newest first at `/blog/`. Publishing the public site still requires building and deploying the edited code.

## Run locally

Install Node.js, then run `npm install` and `npm run dev` from this folder. `npm run build` checks the production build. The hosted site is published through Sites, so running locally does not update the live page.
