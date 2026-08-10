# VaporVault USA — Project Record

## Identity
- Domain: pending (was `vaporvaultusa.com` on the old Cloudflare build, not confirmed registered)
- Site name: VaporVault USA
- Tagline: Premium US Vape Store
- Email: orders@vaporvaultusa.com

## Business
- Product: disposable vapes, pod systems (e-liquids / nicotine pouches / accessories categories exist but are empty — "coming soon")
- Age-restricted: 21+ only, PACT Act compliant
- Order rules: $50 minimum, free shipping $100+, flat $9.99 shipping under that, 10% discount on crypto payment
- Payment: crypto (BTC/ETH/LTC), Cash App, Apple Pay, Chime — no card processing
- Ships to: most US states; does NOT ship to California (Prop 31 flavor ban) or Massachusetts

## Deploy target
Vercel (GitHub-connected, auto-deploy on push). Migrated from an incomplete Cloudflare Pages static build
(`vaporvault-deploy (5)` — the most recent of 6 ZIP snapshots found in the client's local folder).

## Forms
Provider: Web3Forms (default, no domain required). The old site used Formspree with a placeholder form ID that
was never wired up — no orders were ever actually delivered on the old build. Rebuilt on Web3Forms per WebForge
default; access key still pending from the client.

## Backend
None (backend = No). Pure static/dynamic Next.js site, no CMS.

## Compliance posture
Carried forward unchanged from the old build (client confirmed "same as before" at intake):
- 21+ age gate on every session
- FDA nicotine-addiction warning in the footer on every page
- PMTA authorization status disclosed per brand (only Vuse and NJOY are FDA-authorized; every other brand is
  PMTA-pending) — this is scanned for accuracy, never claim authorization beyond these two
- No smoking-cessation claims
- No fabricated brand facts — the client never supplied founding year, HQ, or named individuals, so none appear
  on the site

## Brands (18)
Carried forward from the old build (12): Geek Bar, RAZ Vape, Lost Mary, Flum, Breeze Smoke, Fifty Bar, Tyson 2.0,
Vuse (FDA auth), NJOY (FDA auth), SMOK, Vaporesso, HQD — 94 products total (78 of them Fifty Bar, see below;
16 across the remaining 11 brands) spanning disposables and pod systems.

Added later, logo-only (6): Nexa, Elf Bar, Off Stamp, Fume, Foger, UT Vape — client supplied only a logo image
for each, no product specs (device names/puff counts/prices/flavors) or verified PMTA status. Per Rule 5 (never
fabricate brand facts), these ship with a minimal factual description, default `pmta: 'pending'`, and zero
products — the brand page shows "no products currently listed" honestly rather than inventing SKUs. Add real
product entries to `PRODUCTS` in `src/config/site.js` when the client supplies them.

Note: the old build's About page stated "we do not carry Elf Bar/EB Create products due to their lack of FDA
authorization." The client explicitly asked to add Elf Bar and had that sentence removed — confirmed decision,
not an oversight.

## Batch 2 — Breeze, Flum, Geek Bar, RAZ, Tyson, UT Bar, Lost Mary (301 real SKUs)
Same treatment as Fifty Bar, applied to 7 more brands: client supplied ~300 real product photos
across ~24 device lines in `product images/` (gitignored). Normalized via
`scripts/normalize-batch2-products.mjs` into `public/images/products/<brand>/`.

- **Existing device lines** (Geek Bar Pulse 15000/Pulse X 25000, RAZ TN9000/DC25000, Tyson
  Heavyweight 7000, Flum Pebble 6000, Breeze Pro) — kept their already-established specs, just
  exploded from one generic placeholder SKU into real per-flavor products with real photos.
- **~17 brand-new device lines** (RAZ CA6000/RYL Classic 35K/RX50K, Tyson Round 2 7500/Iron Mike
  15000/Legend 30K/Lightweight 6000, Flum Float X 10K/Gio/Mello, UT Bar 6000/Clear Tank 50K/Pro
  25000, Lost Mary Viz 55K/MT15000 Turbo/MT35000 Turbo/Nera pods) — specs (puffs, nicotine, mL,
  battery, coil) verified via web search against manufacturer/retailer listings before adding;
  price is VaporVault's own retail decision (consistent with the existing per-tier pricing curve
  already used sitewide), not a claimed manufacturer fact.
- **UT Bar is made by Flum** — confirmed during research ("Flum UT Bar Clear Tank 50K", "Flum UT
  Bar 6000"). Kept under the existing `ut-vape` brand entry (the client's own brand tile/logo),
  `partner: 'Flum'` set on those products.
- **Old unverified Lost Mary MO5000/OS5000 placeholders were removed**, replaced by the real
  photographed Viz/MT/Nera lines — same policy as the Fifty Bar replacement.
- **One folder was a misfile, not used**: `flum/flum ut bar/` (12 images) is a subset of the same
  UT Bar 6000 flavors already fully covered by `ut bar/utbar 6000/` (21 images) — skipped rather
  than inventing a nonexistent "Flum × UT Bar" collab.
- **Descriptions are template-generated** (topical, keyed off each flavor's own name — e.g. "Ice"
  vs "Tropical" vs "Dessert"), not hand-written per flavor like Fifty Bar. Proportionate to the
  ~4x larger volume; still original wording, not copied from any source.
- **Crude flavor names sanitized**: a few real flavor names use a censored profanity wordplay
  ("Fcuking Fab") — renamed to "Fab" / "Orange Fab" / "Watermelon Fab" for a professional site.

## Fifty Bar — real product data (sourced from thefiftybar.org, 2026)
Fifty Bar was upgraded from a single placeholder SKU to full real data: 78 individual flavor products across all
7 official collections (Original, White, Black, Fifty Bar × Fruitia 20K, Fifty Bar × Humble, Fifty Bar × Hidden
Hills, Midnight Series), each with its own product photo, real device specs, and a uniquely-written description.

- **Device specs** (verified via thefiftybar.org product pages, not estimated): 6,500-puff tier (Original/White/
  Humble/Hidden Hills) = 5% (50mg) nic, 18mL, 650mAh, Mesh Coil, $18.99. 20,000-puff tier (Black/Fruitia/Midnight)
  = 5% (50mg) nic, 28mL, 900mAh Grade A, Dual Parallel Mesh Coil, Always Active Boost Mode, 3-Level Adjustable
  Airflow, $24.99.
- **Brand facts** (from thefiftybar.org/about/): founded 2023 in California, 150+ American jobs, Original Series
  built via a partnership with Beard Vape Co., later collabs with Fruitia, Hidden Hills Club, and Humble Juice
  Co. — all reflected in `BRANDS.fifty-bar.about` in `src/config/site.js`.
- **Images**: client supplied 78 raw product renders in `product images/` (gitignored, not deployed — matches
  the `assets/` convention). Normalized onto uniform white 1600×1200 canvases via
  `scripts/normalize-fiftybar-products.mjs` into `public/images/products/fifty-bar/`. One source file
  (`Midnight Series/Fresh-Mango-Lychee.png`) was excluded — it doesn't match any of the 9 official Midnight
  Series flavors and was likely misfiled by the client.
- **Product pages**: added `src/app/product/[slug]/page.jsx` — a dedicated SEO landing page per product (used by
  all brands, not just Fifty Bar) with full meta/canonical, Product+Offer JSON-LD, spec table, and related-flavor
  internal links. All 78 Fifty Bar URLs are in `sitemap.js`.
- Descriptions are original writing based on the real flavor names/ingredients — not copied from
  thefiftybar.org's own copy.

## Known asset gaps
- No hero photo for Vuse or the 6 logo-only brands — all fall back to the generic hero image (`hero-1.jpg`)
- Raw client-supplied logo uploads live in `assets/brand-logos/` (gitignored, not deployed). Normalized into
  uniform `public/images/logo-*.png` files via `scripts/normalize-logos.mjs` (trims whitespace, centers on a
  400×200 canvas) — re-run that script if new/updated logos are supplied.

## Content
4 blog posts carried forward verbatim from the old build (best-disposable-vapes-2026, buy-disposable-vapes-online,
how-long-does-a-disposable-vape-last, what-is-nicotine-salt). Privacy Policy and Terms of Service were rewritten
as standard boilerplate for this business type — the old build's versions were not captured in the source ZIP.
