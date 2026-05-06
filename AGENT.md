# AGENT.md — Vikas Lime Industries Website
> Complete project documentation. Read this before touching any file. Reflects fully revamped 2026-ready state.

---

## 1. Project Overview

**Company:** Vikas Lime Industries  
**Domain:** `https://vikaslimeindustries.com`  
**Industry:** Industrial lime & limestone manufacturing — B2B  
**Founded:** 2007, Jodhpur, Rajasthan, India  
**Purpose:** B2B marketing website — product information, credibility, lead generation via contact form + WhatsApp

### Business Context
- Manufactures and supplies **Hydrated Lime**, **Quick Lime Lumps**, **Quick Lime Powder**, and **Limestone**
- Annual production capacity: 20,000+ MT/year
- Purity grades: 80%, 85%, 90% (Hydrated and Quick Lime)
- Two locations: Office at A-280, Saraswati Nagar Basni, Jodhpur 342005 | Factory at 384/25/1/1, Hariyadhana, Bilara, Jodhpur 342602
- Pan-India distribution
- Key contacts:
  - Vishnu Avatar Dadhich (Proprietor) — +91 9414135630 / vikashlime@gmail.com
  - Vikash Dadhich (Manager, Procurement & Logistics) — +91 8094110701 / vikashdadhich1998@gmail.com

---

## 2. Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS v4 — primary styling system |
| Fonts | Geist Sans (`--font-geist-sans`), Geist Mono (`--font-geist-mono`), Playfair Display (`--font-playfair`) via `next/font/google` |
| Forms | Web3Forms API (client-side fetch, key in `.env.local`) |
| Images | `next/image` — all images use this |
| SEO | `sitemap.ts`, `robots.ts`, `app/icon.tsx`, `app/opengraph-image.tsx`, JSON-LD LocalBusiness schema in layout |
| Analytics | `GoogleAnalytics.tsx` (GA4 scaffolding — activates when `NEXT_PUBLIC_GA_ID` is set) |
| Package Manager | npm |

---

## 3. Directory Structure

```
/
├── app/
│   ├── layout.tsx                    ← Root layout: Header + Footer + FloatingWhatsApp + CookieConsent + GoogleAnalytics + JSON-LD schema
│   ├── page.tsx                      ← Home page (9 sections: Hero, Trust Bar, Products, Applications, Why Choose Us, Process, Certifications, FAQ, CTA)
│   ├── globals.css                   ← Tailwind @theme tokens + all animation keyframes + About/CompanyProfile CSS classes
│   ├── loading.tsx                   ← Global loading UI (3-bar pulse)
│   ├── not-found.tsx                 ← 404 page
│   ├── icon.tsx                      ← Dynamic 32×32 favicon ("VL")
│   ├── opengraph-image.tsx           ← Dynamic 1200×630 OG image
│   ├── sitemap.ts                    ← 6 URLs: /, /about, /about/company-profile, /products, /industries, /contact
│   ├── robots.ts                     ← Robots.txt config
│   │
│   ├── data/                         ← ⭐ ALL business content lives here
│   │   ├── products.ts               ← 4 products with formula, specs[], industries[], image paths
│   │   ├── site.ts                   ← Company info, contacts, addresses, navItems, footerNavLinks, heroStats, applications, milestones, features, visionPoints, processSteps, differentiators, trustBadges
│   │   ├── industries.ts             ← 6 industry entries (id, name, tagline, role, products, stat)
│   │   └── faq.ts                    ← 8 B2B FAQ items (question, answer)
│   │
│   ├── components/                   ← Global/shared components
│   │   ├── Header.tsx                ← Sticky glass nav, mobile slide-out drawer, active link highlight
│   │   ├── Footer.tsx                ← Brand blurb, quick links (5 pages), contact block
│   │   ├── FloatingWhatsApp.tsx      ← Fixed bottom-right WhatsApp pill, appears after 300px scroll, expands on hover
│   │   ├── CookieConsent.tsx         ← Fixed bottom-left consent banner, localStorage-persisted
│   │   ├── GoogleAnalytics.tsx       ← GA4 via next/script, no-op unless NEXT_PUBLIC_GA_ID set
│   │   ├── HomeProducts.tsx          ← 2×2 product image grid with overlay, zoom hover, tagline reveal
│   │   └── ProductShowcaseSection.tsx ← Per-product section: image + formula pill + spec table + industry chips + WhatsApp CTA
│   │
│   ├── components/ui/                ← Reusable UI primitives
│   │   ├── AnimatedCounter.tsx       ← IntersectionObserver-triggered count-up animation
│   │   ├── FaqAccordion.tsx          ← Height-animated accordion (single open at a time)
│   │   ├── Button.tsx                ← (scaffolded — not yet in active use)
│   │   ├── Badge.tsx                 ← (scaffolded — not yet in active use)
│   │   └── SectionHeader.tsx         ← (scaffolded — not yet in active use)
│   │
│   ├── about/
│   │   ├── page.tsx                  ← /about: Hero → WhoWeAre → TrustMetrics → WhatSetsUsApart → Timeline → Team → Vision
│   │   └── components/
│   │       ├── Hero.tsx              ← Dark full-viewport, kiln BG, Playfair serif headline, scroll-reveal
│   │       ├── WhoWeAre.tsx          ← White section, narrative (left) + dark facts card (right)
│   │       ├── TrustMetrics.tsx      ← Dark section, 4 AnimatedCounter tiles
│   │       ├── WhatSetsUsApart.tsx   ← Slate-50, 2×3 icon cards from features[] in site.ts
│   │       ├── Timeline.tsx          ← White, horizontal (desktop) / vertical (mobile), 4 milestones from site.ts
│   │       ├── Team.tsx              ← White, 2 person cards (monogram avatar + phone/email)
│   │       └── Vision.tsx            ← Dark, split layout: headline + 5 vision point list from site.ts
│   │
│   ├── about/company-profile/
│   │   ├── page.tsx                  ← /about/company-profile: sections[] defined here as props
│   │   └── CompanyProfileClient.tsx  ← Kiln-BG hero, stats strip, sticky sidebar nav, 6 content sections
│   │
│   ├── products/
│   │   ├── page.tsx                  ← /products metadata
│   │   └── ProductsClient.tsx        ← Dark serif hero + anchor pill nav + 4 ProductShowcaseSections + CTA
│   │
│   ├── contact/
│   │   ├── page.tsx                  ← /contact metadata
│   │   └── ContactClient.tsx         ← Dark hero + WhatsApp card + contact cards + addresses + hours + 7-field form + map
│   │
│   └── industries/
│       ├── page.tsx                  ← /industries metadata
│       └── IndustriesClient.tsx      ← Dark hero + 6 industry cards + CTA strip
│
├── public/
│   ├── grain.svg                     ← Noise texture overlay (used in hero/dark sections)
│   ├── hero-quarry.jpeg              ← Home page + CTA section background
│   ├── about-kiln.jpeg               ← About hero + Company Profile hero background
│   └── products/
│       ├── HydratedLime.jpeg
│       ├── Quick-Lime-Lumps.webp
│       ├── quick-lime-powder.jpeg
│       └── limestone.jpeg
│
├── .env.local                        ← Environment variables (gitignored)
├── next.config.ts
├── tsconfig.json                     ← paths: @/* → ./*
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## 4. Routing Map

| URL | Component | Sections |
|-----|-----------|---------|
| `/` | `app/page.tsx` | Hero → Trust Bar → Products → Applications → Why Choose Us → Process → Certifications → FAQ → CTA |
| `/about` | `app/about/page.tsx` | Hero → WhoWeAre → TrustMetrics → WhatSetsUsApart → Timeline → Team → Vision |
| `/about/company-profile` | `CompanyProfileClient.tsx` | Hero + stats + sticky sidebar + 6 content sections |
| `/products` | `ProductsClient.tsx` | Hero → 4 ProductShowcaseSections → CTA |
| `/industries` | `IndustriesClient.tsx` | Hero → 6 Industry Cards → CTA |
| `/contact` | `ContactClient.tsx` | Hero → WhatsApp card + Contacts + Addresses + Hours + 7-field Form → Map |

---

## 5. Data Architecture

All business content is centralized. **Never hardcode content in UI components.**

| Data | File | Exported as |
|------|------|-------------|
| 4 products (name, formula, specs, industries, images) | `app/data/products.ts` | default export `Product[]` |
| Company info, contacts, addresses, hours, map src | `app/data/site.ts` | named exports |
| Navigation items (5 pages) | `app/data/site.ts` | `navItems` |
| Footer nav links (5 pages) | `app/data/site.ts` | `footerNavLinks` |
| Hero stats | `app/data/site.ts` | `heroStats` |
| Applications (6 items) | `app/data/site.ts` | `applications` |
| Timeline milestones (4) | `app/data/site.ts` | `milestones` |
| Feature/differentiator cards (6) | `app/data/site.ts` | `features` |
| Vision points (5) | `app/data/site.ts` | `visionPoints` |
| Process steps (4) | `app/data/site.ts` | `processSteps` |
| Why Choose Us (3) | `app/data/site.ts` | `differentiators` |
| Trust/certification badges (5) | `app/data/site.ts` | `trustBadges` |
| Industry landing data (6) | `app/data/industries.ts` | `industries` |
| FAQ items (8) | `app/data/faq.ts` | `faqs` |

---

## 6. Design System

### Color Palette
The Tailwind `slate-*` scale covers all brand colors. Custom tokens defined in `globals.css` `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#0f172a` (slate-900) | Hero/CTA backgrounds |
| `--color-accent` | `#D4A853` | Gold headline highlights, hover accents |
| White | `#ffffff` | Section backgrounds, cards |
| `slate-50` | `#f8fafc` | Alternating section backgrounds |
| `slate-200` | `#e2e8f0` | Card borders |
| `slate-400–600` | — | Muted text levels |

### Typography
- **Headings:** Playfair Display serif (`font-serif`) — applied via `font-serif` Tailwind class
- **Body:** Geist Sans — default `font-sans`
- **Monospace:** Geist Mono — `font-mono` (used for formula badges)
- **Sizes:** All fluid: `clamp()` inline for h1/h2 where Tailwind lacks the range; body text uses Tailwind text sizes

### Motion
- **Scroll reveals:** `IntersectionObserver` + CSS classes (`.reveal.is-visible`) for global; state-based for About components
- **Animated counters:** `AnimatedCounter` component — starts at 0, counts up when visible
- **Floating WhatsApp:** Spring expand animation on hover
- **Accordion:** Height transition using `scrollHeight` measurement
- **All keyframes:** Centralized in `app/globals.css`

### Layout
- Max-width `72rem` (1152px) for content, `60rem` for narrow-focus sections
- `px-6` horizontal padding on all sections
- Generous `py-24` / `py-28` vertical padding on primary sections
- Mobile-first, responsive via Tailwind breakpoints (`sm:`, `md:`, `lg:`)

---

## 7. Mobile Responsiveness Checklist

| Component | Mobile layout | Notes |
|-----------|--------------|-------|
| Header | Hamburger → slide-out drawer (80vw, max 320px) | Body scroll locked when open |
| Home Hero | Single column, CTA buttons stack via `flex-wrap` | Font scales with `clamp()` |
| Trust Bar | 2×2 grid → 4-col on `md:` | `gap-px bg-slate-100` renders as cross-hair separators |
| Home Products (2×2) | 2×1 on mobile → 2×2 on `sm:` | Image aspect ratio preserved |
| Applications | 1-col → 2-col → 3-col | Standard grid breakpoints |
| Why Choose Us | 1-col → 3-col on `md:` | Standard |
| Process Steps | 1-col → 4-col on `lg:` | Standard |
| FAQ | Stacked → side-by-side on `lg:` | Accordion full-width on mobile |
| About Hero | Single column, large text scales with `clamp()` | Founding year watermark hidden on `bottom-absolute` |
| About Timeline | Vertical dots on mobile → horizontal on `md:` | Dual layout |
| About Team | 1-col → 2-col on `md:` | Max-width `52rem` keeps it compact |
| Products Hero nav | Pills wrap on mobile | `flex-wrap justify-center` |
| Product Showcase | Image on top, text below on mobile → 50/50 on `lg:` | Order swap via CSS on odd items |
| Contact Info+Form | Stacked on mobile → 40/60 split on `lg:` | Info panel not sticky on mobile |
| Industries grid | 1-col → 2-col → 3-col | |
| Footer | Wraps to 1-col on mobile | `flex-wrap` |
| Floating WhatsApp | Always visible (bottom-right) after scroll | Clear of keyboard on mobile |
| Cookie Consent | Bottom-left, `max-w-[22rem]` | Does not conflict with WhatsApp (opposite sides) |

---

## 8. Environment Variables

```env
# .env.local (gitignored — create manually)

# Required — Web3Forms contact form
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here

# Optional — WhatsApp (fallback hardcoded to 919414135630)
NEXT_PUBLIC_WHATSAPP_NUMBER=919414135630

# Optional — Google Analytics 4 (site renders without this; add to activate)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 9. Known Remaining Gaps (Industry Standard — Post-Revamp)

These are intentional future improvements, not bugs:

| Gap | Priority | Notes |
|-----|----------|-------|
| **Social proof / testimonials** | High | No client names or logos visible. Add a "Trusted by industries" section with 4–5 industry-type badges or anonymised testimonials |
| **Downloadable spec sheets** | High | Products page has spec table but no PDF download. Create one-page spec PDFs per product and add download links |
| **WhatsApp Business API** | Medium | Currently uses personal WhatsApp. Upgrade to WhatsApp Business for auto-replies and catalogue |
| **Google Analytics** | Medium | Scaffolding in place — just add `NEXT_PUBLIC_GA_ID` to `.env.local` |
| **Sticky "Get a Quote" bar** | Medium | Header has "Contact Us" CTA but not a dedicated "Get a Quote" that stays visible |
| **Video hero** | Low | Industry trend: 10–30s looping kiln/quarry video behind hero. Consider replacing static image |
| **Image optimisation audit** | Low | Product images are JPEG/WebP but not verified for compression level |
| **Error boundary** | Low | `app/error.tsx` exists but is a segment-level boundary — missing `app/global-error.tsx` for root-level errors |
| **Server Action for form** | Low | Form posts directly to Web3Forms from client. Migrating to a Next.js Route Handler would prevent key exposure in the bundle |

---

## 10. Coding Conventions

- **Never hardcode business data in components** — all content goes in `app/data/`
- **Never duplicate color values** — use Tailwind `slate-*` palette or the `@theme` accent tokens
- **Products are exactly the 4 defined in `app/data/products.ts`** — do not add, rename, or merge
- **Prefer Tailwind utility classes** — avoid inline `style={{}}` except for: `clamp()` font sizes, JS-driven animation values (opacity/transform tied to state), and complex `background` gradients
- **Use `next/image` for all content images** — never `<img>`
- **`"use client"` only when strictly needed** — event handlers, hooks, browser APIs. Pages and section containers should be Server Components by default
- **TypeScript strict** — no `any`, export interfaces for all data shapes
- **Accessibility** — `aria-label` on icon-only buttons, `alt` on all images, semantic HTML (`<nav>`, `<main>`, `<section>`, `<address>`)
- **Animations stay in `globals.css`** — no inline `<style>` blocks in components

---

## 11. Quick Reference — Key File Locations

| What you need | Where it is |
|---------------|-------------|
| Product data (names, specs, formulas, images) | `app/data/products.ts` |
| All other business content (contacts, nav, stats, etc.) | `app/data/site.ts` |
| Industry landing content | `app/data/industries.ts` |
| FAQ content | `app/data/faq.ts` |
| Global metadata + JSON-LD schema | `app/layout.tsx` |
| Tailwind tokens + CSS variables | `app/globals.css` (`@theme` block) |
| All animation keyframes | `app/globals.css` |
| Contact form logic | `app/contact/ContactClient.tsx` |
| Floating WhatsApp button | `app/components/FloatingWhatsApp.tsx` |
| Cookie consent | `app/components/CookieConsent.tsx` |
| Google Analytics | `app/components/GoogleAnalytics.tsx` |
| OG image | `app/opengraph-image.tsx` |
| Sitemap | `app/sitemap.ts` |
| Company Profile CSS classes (`cp-*`) | `app/globals.css` |
