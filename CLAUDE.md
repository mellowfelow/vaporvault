# VaporVault USA — project instructions

Next.js (App Router) ecommerce site for an adult (21+) online vape retailer. Deploy target: Vercel, via GitHub.

## Non-negotiable: nicotine/vape compliance

- Never claim FDA PMTA marketing authorization for a brand unless `BRANDS[].pmta === 'authorized'` in `src/config/site.js` (currently only Vuse and NJOY).
- Never imply a vaping product is a smoking-cessation product or medically endorsed.
- Every brand page and product listing must disclose PMTA status.
- Never remove the 21+ age gate, FDA nicotine-addiction warning, or PACT Act shipping disclosures from the footer/checkout.
- Do not add products/brands the client hasn't confirmed — no fabricated brand facts, founding stories, or statistics.
- If a request would require breaking any of the above, stop and say so rather than complying.

## Architecture

`src/config/site.js` is the single source of truth — SITE, RULES, FORMS, BRANDS, PRODUCTS, CATEGORIES, FLAVORS, POSTS, FAQS.
Adding an entry to BRANDS/PRODUCTS/POSTS generates its page, route, meta, sitemap entry, and nav links automatically via
`generateStaticParams`. Never hand-write a new brand/product page — add data to the config instead.

Never hand-edit generated files: `public/llms.txt`, `public/auth.md`, `public/.well-known/*`, `public/js/webmcp.js`,
`vercel.json` — these are written by `scripts/gen-agent-files.mjs` from `src/config/site.js`. Edit the config, then
`npm run prebuild` (or just `npm run build`, which runs it automatically).

## Rules

- `npm run build && npm run crosscheck` must pass before every push.
- One `<h1>` per page. Meta descriptions ~150 chars. Titles ≤60.
- Cart state lives in `src/lib/CartContext.jsx` (localStorage-backed). Never bypass it for ad hoc cart logic.
- Forms submit via Web3Forms (`src/lib/forms.js`) using FormData + `Accept: application/json` only — never add a
  `Content-Type` header or an `action` attribute, it breaks the CORS-safe request.
- Emails are never plaintext-embedded in JSON-LD.
- Never commit `node_modules/`, `.next/`, `.vercel/`.

## Live placeholders

- `SITE.domain` in `src/config/site.js` is `DOMAIN.com` (pending). To go live: set the real domain, run
  `npm run build`, commit, push — Vercel redeploys automatically. Never find-and-replace a domain across files.
- `FORMS.web3formsKey` is a placeholder. Until a real key from web3forms.com is set, contact/checkout/wholesale/
  newsletter forms redirect to their thank-you page but do not actually email anyone.

## Brand facts (only these are true — never invent more)

- 21+ only, PACT Act compliant, does not ship to California (Prop 31) or Massachusetts.
- Minimum order $50, free shipping $100+, 10% discount on crypto payment (BTC/ETH/LTC).
- Payment methods: crypto, Cash App, Apple Pay, Chime — no card processing (processor restrictions on vape products).
- Only Vuse (BAT) and NJOY (Altria) hold FDA PMTA marketing authorization; every other brand is PMTA-pending.
- No founding year, HQ, or named individuals were supplied by the client — do not invent any.
