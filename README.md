# TechRox — Next.js website

Rebuilt from your original project as a full **Next.js 14 (App Router)** site.

## What changed vs. the original

1. **Framework**: converted from TanStack Start (Vite) to Next.js App Router —
   file-based routing, `generateMetadata`/`generateStaticParams` for SEO,
   `sitemap.ts` / `robots.ts`.
2. **Background**: every page now sits on a plain black, site-wide **animated
   grid motion background** (`GridMotionBackground.tsx` + `.grid-motion-bg` in
   `globals.css`), replacing the old blurred "blob" backdrops.
3. **Removed element**: the custom mouse cursor (dot + trailing ring) and the
   pill-shaped scroll indicator shown in your screenshot have been removed
   entirely.
4. **Hero redesign**: the homepage hero now leads with a live "deploy
   console" terminal mockup, uptime/shipped-projects stat chips, and
   tech-practice badges (AI/ML, Cloud, Web, DevOps, Data) — so it reads
   immediately as an IT/software company, not a generic landing page.
5. **SEO**: per-page `<title>`/`<meta description>`, Open Graph + Twitter
   card tags, canonical URLs, JSON-LD (`Organization` + `WebSite`), a
   generated `sitemap.xml`, `robots.txt`, and a `site.webmanifest`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

## Before you deploy — update these

- `SITE_URL` in `src/app/layout.tsx` and `src/app/sitemap.ts` /
  `src/app/robots.ts` — replace `https://www.techrox.co` with your real
  domain.
- Social links in `src/components/site/Footer.tsx` and `sameAs` in the
  Organization JSON-LD in `src/app/layout.tsx`.
- Contact details (email/phone/address) in `src/app/contact/ContactClient.tsx`.
- `public/logo.jpeg` / `public/favicon.ico` — swap in your final brand
  assets, and add a `public/og-image.png` (1200×630) if you want a custom
  social preview image.
- The contact form currently just shows a "sent" confirmation client-side —
  wire it up to your email/CRM provider (e.g. Resend, Formspree, HubSpot) in
  `ContactClient.tsx`'s `onSubmit`.
- Two data files (`src/lib/site-content.ts`) drive all copy — services,
  products, team, timeline, case studies, blog posts, jobs, FAQs. Edit there
  to update content site-wide.

## Structure

```
src/
  app/
    layout.tsx          Root layout, fonts, global metadata, JSON-LD
    globals.css          Design tokens + black grid motion background
    page.tsx / HomeClient.tsx
    about/
    services/            index + [slug]
    products/            index + [slug]
    portfolio/
    case-studies/
    blog/
    careers/
    contact/
    sitemap.ts
    robots.ts
    not-found.tsx
  components/site/
    Navbar.tsx  Footer.tsx  Preloader.tsx
    Section.tsx (Section, Eyebrow)
    anim.tsx (RevealText, Reveal, Stagger, Counter, TiltCard, MaskReveal)
    GridMotionBackground.tsx
  lib/
    site-content.ts       All copy/data
    utils.ts
```
