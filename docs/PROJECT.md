# PROJECT.md — aazib-dev

> What we are building, why, and which pages and features it includes.
> Visuals live in `docs/DESIGN.md`. Code rules live in `docs/CLAUDE.md`. Copy & SEO rules live in `docs/CONTENT.md`. Task tracking lives in `docs/STATE.md`.

---

## 1. Overview

- **Project:** Personal portfolio and lead-generation website
- **Owner:** Aazib Ali — freelance full-stack, mobile, and AI developer
- **Location:** Islamabad, Pakistan (working with clients worldwide)
- **Services:** Web Development · Mobile App Development · AI & LLM Solutions
- **Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, deployed on Vercel
- **Domain:** TBD

## 2. Goals

1. Convert visitors into qualified project inquiries (primary goal).
2. Build trust through real projects, clear engineering process, and verified client feedback.
3. Rank for high-intent freelance web, mobile, and AI developer queries.
4. Load fast, stay accessible, and work cleanly across mobile, tablet, and desktop.

- **Primary conversion:** Completed contact form submission (or consultation booking).
- **Secondary conversions:** Email click, phone click, resume download.

## 3. Audience

- Startup founders and small business owners needing a website, mobile app, or AI workflow built right.
- Agencies and product teams looking for a reliable freelance developer.
- Primarily non-technical decision makers: copy and structure must be clear, outcome-led, and easy to scan.

## 4. Contact Details (single source: `src/data/site.ts`)

- **Email:** `aazibali.dev@gmail.com`
- **Phone:** `+92 371 2426373`
- **Location:** Islamabad, Pakistan
- **Social links:** TBD

---

## 5. Site Map

### Phase 1: Launch

| Page | Route | Status |
|---|---|---|
| Home | `/` | In progress (`Hero` mounted) |
| About | `/about` | Stub |
| Contact | `/contact` | Stub |
| Services | `/services` | Planned (reuses Services + Process) |
| Portfolio | `/portfolio` | Planned (reuses Work grid) |
| FAQs | `/faqs` | Planned |
| Schedule Consultation | `/schedule` | Planned (or external booking link) |

### Phase 2: Growth

| Page | Route | Status |
|---|---|---|
| Web Development | `/services/web-development` | Planned |
| Mobile App Development | `/services/mobile-app-development` | Planned |
| AI & LLM Solutions | `/services/ai-llm-solutions` | Planned |
| Project detail (case study) | `/portfolio/[slug]` | Planned |

### Phase 3: Required

| Page | Route | Status |
|---|---|---|
| Privacy Policy | `/privacy` | Planned |
| 404 | `not-found.tsx` | Planned |
| Thank you (optional) | `/contact/thank-you` | Optional |

**Out of scope for now:** blog, CMS, user accounts, e-commerce, multi-language, dark mode toggle.

---

## 6. Page Specs

Every page renders inside `Header` and `Footer`, starts with a dark `.hero` banner (so the transparent header stays readable at scroll `0`), and is composed from sections in `src/components/sections/`.

### Home `/`
1. Hero (eyebrow pill, H1, lead, primary + ghost CTA, `CodeWindow` visual)
2. Services intro + 3 service cards
3. Tech logo carousel
4. Portfolio intro + 6 project cards
5. Process timeline
6. Strengths grid
7. Testimonials carousel
8. Closing CTA
- **Primary CTA:** Contact Me (`/contact`). **Secondary:** Explore My Work (`/portfolio`).

### About `/about`
1. Hero (eyebrow, H1, bio, resume download button)
2. Journey intro + timeline
3. Strengths / values block
4. Closing CTA

### Contact `/contact`
1. Hero (eyebrow, H1, lead)
2. Location intro + lazy-loaded map embed
3. Contact intro + direct details + inquiry form (`name`, `email`, `project type`, `budget` optional, `message`)
4. Strengths block

### Services `/services`
1. Hero
2. Service cards (3), linking to detail pages
3. Process timeline
4. Closing CTA

### Service Detail `/services/[service]` (×3)
1. Hero (service-specific H1 with primary keyword)
2. Outcomes ("What you get")
3. Process steps ("How it works")
4. Technologies used
5. Related projects (filtered from `src/data/projects.ts`)
6. Service FAQ
7. Closing CTA

### Portfolio `/portfolio`
1. Hero
2. Project grid (all projects; category filter only if > 6 projects)
3. Closing CTA

### Project Detail `/portfolio/[slug]`
1. Hero (project name, category, summary)
2. Overview (client, role, timeline, stack)
3. Problem → Approach → Result (supplied facts only; never invent metrics)
4. Screenshots + Next project + Closing CTA

### FAQs `/faqs` & Schedule `/schedule`
- **FAQs:** Hero + grouped Q&A covering scope, timeline, pricing, process, and support + Closing CTA.
- **Schedule:** Hero + booking embed/redirect or consultation request flow.

### Privacy `/privacy` & 404 `not-found.tsx`
- **Privacy:** Plain explanation of contact form data, usage, retention, deletion requests, and contact email.
- **404:** Dark hero, concise explanation, links back to Home and Contact.

---

## 7. Navigation (single source: `src/data/nav.ts`)

- **Header:** `Home` · `Services` (links to `/services` + dropdown: `Web Development`, `Mobile App Development`, `AI & LLM Solutions`) · `About` · `Portfolio` · `Resources` (dropdown: `FAQs`, `Schedule Consultation`) · Primary CTA `"Contact Me"` (`/contact`).
- **Footer:** Brand logo + positioning statement; link groups (`Pages`, `Services`, `Contact` with email, phone, location); social icons (hidden until configured); bottom bar with copyright, `Privacy Policy`, and built-with line.

---

## 8. Features

| Feature | Implementation |
|---|---|
| Contact form | `react-hook-form` + `zod` v4, Server Action (`src/actions/contact.ts`), Resend email, honeypot (+ optional Cloudflare Turnstile) |
| Tech carousel | Pure CSS infinite scroll, pauses on `prefers-reduced-motion` |
| Testimonials | `embla-carousel-react`, keyboard accessible |
| Scroll reveals | `IntersectionObserver` + CSS transitions (`Reveal.tsx`), process and strengths only |
| Map | Lazy-loaded Google Maps embed (no API key required) |
| Resume | Static PDF in `public/`, download button |
| Analytics & Security | Vercel Analytics + Speed Insights; security headers & CSP in `next.config.ts` |
| SEO | Next.js Metadata API (`src/lib/seo.ts`), `sitemap.ts`, `robots.ts`, OG images, JSON-LD (`Person`, `Service`, `BreadcrumbList`, `FAQPage`) |

---

## 9. Content Model (`src/data/`)

| File | Purpose |
|---|---|
| `site.ts` | Name, role, location, positioning statement, email, phone, socials, copyright |
| `nav.ts` | Header links/groups, CTA, footer link groups, privacy link |
| `hero.ts` | Per-page hero content (`HeroContent`) |
| `services.ts` | Service cards and detail page data |
| `projects.ts` | Portfolio cards and case study data |
| `process.ts` | Process steps |
| `strengths.ts` | Strengths grid items |
| `testimonials.ts` | Client quotes |
| `src/lib/seo.ts` | Default metadata and per-page SEO helpers |

---

## 10. Environment & Targets

- **Env vars (`.env.example` → `.env.local`):** `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- **Quality targets:** Lighthouse 95+ across all categories (mobile), LCP < 2.5s, zero layout shift, responsive at 375px / 768px / 1025px / 1280px+, clean `lint` / `tsc` / `build`.
