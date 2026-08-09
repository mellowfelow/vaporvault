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
Vuse (FDA auth), NJOY (FDA auth), SMOK, Vaporesso, HQD — 17 products total across disposables and pod systems.

Added later, logo-only (6): Nexa, Elf Bar, Off Stamp, Fume, Foger, UT Vape — client supplied only a logo image
for each, no product specs (device names/puff counts/prices/flavors) or verified PMTA status. Per Rule 5 (never
fabricate brand facts), these ship with a minimal factual description, default `pmta: 'pending'`, and zero
products — the brand page shows "no products currently listed" honestly rather than inventing SKUs. Add real
product entries to `PRODUCTS` in `src/config/site.js` when the client supplies them.

Note: the old build's About page stated "we do not carry Elf Bar/EB Create products due to their lack of FDA
authorization." The client explicitly asked to add Elf Bar and had that sentence removed — confirmed decision,
not an oversight.

## Known asset gaps
- No hero photo for Vuse or the 6 logo-only brands — all fall back to the generic hero image (`hero-1.jpg`)
- Raw client-supplied logo uploads live in `assets/brand-logos/` (gitignored, not deployed). Normalized into
  uniform `public/images/logo-*.png` files via `scripts/normalize-logos.mjs` (trims whitespace, centers on a
  400×200 canvas) — re-run that script if new/updated logos are supplied.

## Content
4 blog posts carried forward verbatim from the old build (best-disposable-vapes-2026, buy-disposable-vapes-online,
how-long-does-a-disposable-vape-last, what-is-nicotine-salt). Privacy Policy and Terms of Service were rewritten
as standard boilerplate for this business type — the old build's versions were not captured in the source ZIP.
