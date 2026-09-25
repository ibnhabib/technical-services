# Technical Services

Marketing site for Technical Services (technicalservices.ae) — network installation, fiber optic, WiFi setup, ethernet, CCTV, and VOIP services in Al Ain & Abu Dhabi.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 3** + shadcn/ui components
- **Framer Motion** for the animated hero background

## Getting started

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run build   # production build
npm run start   # serve the production build
```

## Structure

- `src/app/` — routes (App Router). Each service page (`/network-installation`, `/fiber-optic`, etc.) exports its own `metadata` for SEO.
- `src/components/` — shared UI (Navbar, Footer, Hero, service page template, shadcn primitives under `ui/`).
- `src/lib/schema.ts` — schema.org structured data (LocalBusiness + per-service Service schema), rendered server-side on every page.
- `src/app/sitemap.ts` / `src/app/robots.ts` — sitemap.xml and robots.txt are generated dynamically from the real route list (the old static `public/sitemap.xml` had mismatched slugs; this can't drift anymore).

## Notes on the migration

- All page metadata (title, description, Open Graph, JSON-LD) is now rendered via the Next.js Metadata API and inline `<script type="application/ld+json">` tags in Server Components — it's present in the initial HTML instead of being injected client-side via `useEffect` like the old SPA did.
- Removed unused shadcn/ui components and dependencies that were scaffolded but never imported anywhere (accordion, alert-dialog, carousel, chart, command, drawer, form, and the many unused `@radix-ui/*` packages behind them).
- Navbar/Footer/FloatingButtons moved into the root layout instead of being repeated in every page component.
