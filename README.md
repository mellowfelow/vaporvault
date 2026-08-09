# VaporVault USA

Next.js (App Router) ecommerce site for VaporVault USA — a 21+ online vape retailer. Migrated from a static
Cloudflare Pages build to Next.js on Vercel.

## Stack

- Next.js 15 (App Router), React 19
- Plain CSS (design tokens in `src/styles/globals.css`), self-hosted fonts via `next/font`
- Cart: React Context + `localStorage` (`src/lib/CartContext.jsx`)
- Forms: [Web3Forms](https://web3forms.com) (`src/lib/forms.js`) — no backend required
- Deploy: Vercel, connected to GitHub for auto-deploy on push

## Commands

```bash
npm install
npm run dev          # local dev server
npm run build         # production build (also regenerates agent-ready files + vercel.json)
npm run crosscheck    # pre-ship checks — run before every push
```

## Project structure

- `src/config/site.js` — single source of truth: brand, products, categories, blog posts, FAQs, forms/cart rules
- `src/app/` — routes (App Router)
- `src/components/` — shared UI
- `src/lib/` — cart context, toast, form submission helper
- `scripts/gen-agent-files.mjs` — generates `llms.txt`, `auth.md`, `.well-known/*`, `js/webmcp.js`, `vercel.json`
- `scripts/crosscheck.mjs` — pre-ship validation
- `docs/` — planning docs, never shipped to the public site

## Placeholders to fill in before going fully live

| Placeholder | Where | What it unlocks |
|---|---|---|
| `SITE.domain = 'DOMAIN.com'` | `src/config/site.js` | Real canonical URLs, sitemap, schema, agent-ready files |
| `FORMS.web3formsKey` | `src/config/site.js` | Contact / checkout / wholesale / newsletter forms actually email you (get a free key at web3forms.com) |

After setting either, run `npm run build` and push — Vercel redeploys automatically.

## Deploying

This repo is connected to Vercel via GitHub. Every push to `main` triggers a new deployment automatically.
