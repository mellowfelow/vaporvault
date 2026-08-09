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

## Brands carried forward (12)
Geek Bar, RAZ Vape, Lost Mary, Flum, Breeze Smoke, Fifty Bar, Tyson 2.0, Vuse (FDA auth), NJOY (FDA auth), SMOK,
Vaporesso, HQD — 17 products total across disposables and pod systems.

## Known asset gaps (carried from the old build)
- No hero photo for Vuse (`brand-vuse.jpg` was never supplied) — falls back to the generic hero image
- No logo files for SMOK or Vaporesso — brand tiles fall back to an emoji glyph instead of a broken image

## Content
4 blog posts carried forward verbatim from the old build (best-disposable-vapes-2026, buy-disposable-vapes-online,
how-long-does-a-disposable-vape-last, what-is-nicotine-salt). Privacy Policy and Terms of Service were rewritten
as standard boilerplate for this business type — the old build's versions were not captured in the source ZIP.
