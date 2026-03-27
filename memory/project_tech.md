---
name: readytowear-collection tech stack
description: Tech choices and npm install workaround for readytowear-collection
type: project
---

Stack: Next.js 14.2.5, React 18, TypeScript, Tailwind CSS 3, Cormorant Garamond + Inter (Google Fonts via next/font).

**Why:** SSR/static generation for fast initial load despite many images; next/image for WebP optimization and lazy loading.

**How to apply:** Config file must be next.config.mjs (not .ts — Next.js 14.2.5 doesn't support .ts config). npm install requires `--cache /tmp/npm-cache-rtw` flag due to a permission conflict in the default npm cache at ~/.npm/_cacache.

Background: #f5f0e8 (warm low-saturation beige). Fonts via CSS variables --font-cormorant and --font-inter.
