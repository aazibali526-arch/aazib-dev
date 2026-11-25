# PROJECT.md: aazib-dev

> What we are building, why, and exactly which pages and features it includes.
> Visuals live in `docs/DESIGN.md`. Code rules live in `CLAUDE.md`. Copy rules live in `CONTENT.md`. Tasks live in `STATE.md`.

---

## 1. Overview

**Project:** Personal portfolio and lead-generation website
**Owner:** Aazib Ali, freelance developer
**Location:** Islamabad, Pakistan (works with clients worldwide)
**Services:** Web Development · Mobile App Development · AI & LLM Solutions
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, deployed on Vercel
**Domain:** TBD

## 2. Goals

1. Turn visitors into project inquiries (primary goal).
2. Build trust through real projects, process, and client feedback.
3. Rank for service-related searches (web, mobile, AI developer).
4. Load fast and work flawlessly on mobile.

**Primary conversion:** a completed contact form submission.
**Secondary conversions:** email click, phone click, resume download.

## 3. Audience

- Startup founders and small business owners who need a website, app, or AI feature built.
- Agencies and teams looking for a reliable freelance developer.
- Mostly non-technical decision makers. Copy and layout must be clear and fast to scan.

## 4. Contact Details (single source: `src/data/site.ts`)

- Email: aazibali.dev@gmail.com
- Phone: +92 371 2426373
- Location: Islamabad, Pakistan
- Social links: TBD

---

## 5. Site Map

### Phase 1: Launch

| Page | Route | Status |
|---|---|---|
| Home | `/` | Designed |
| About | `/about` | Designed |
| Contact | `/contact` | Designed |
| Services | `/services` | To design (reuses Home services section) |
| Work | `/work` | To design (reuses Home work section) |

### Phase 2: Growth

| Page | Route | Status |
|---|---|---|
| Web Development | `/services/web-development` | To design |
| Mobile App Development | `/services/mobile-app-development` | To design |
| AI & LLM Solutions | `/services/ai-llm-solutions` | To design |
| Project detail (one per project) | `/work/[slug]` | To design |

### Phase 3: Required

| Page | Route | Status |
|---|---|---|
| Privacy Policy | `/privacy` | To write |
| 404 | `not-found.tsx` | To design |
| Thank you (optional) | `/contact/thank-you` | Optional |

**Out of scope for now:** blog, CMS, user accounts, e-commerce, multi-language, dark mode toggle.

---

## 6. Page Specs

Each page uses the `Header` and `Footer`, and is built only from components in `src/components/sections/`. Section order below is the build order on the page.

### Home `/`
1. Hero (eyebrow pill, H1, lead, primary + ghost button, code window or visual)
2. Services intro + 3 service cards
3. Tech logo carousel
4. Work intro + 6 project cards
5. Process timeline
6. Strengths grid
7. Testimonials carousel
8. Closing CTA
- **Goal:** introduce, show proof, drive to Contact.
- **Primary CTA:** Contact. **Secondary:** Work.

### About `/about`
1. Hero (eyebrow, H1, bio paragraph, resume download button)
2. Journey intro + timeline
3. Strengths or values block
4. Closing CTA
- **Goal:** build trust and personality.
- **Primary CTA:** Contact. **Secondary:** resume download.

### Contact `/contact`
1. Hero (eyebrow, H1, lead)
2. Location intro + map embed
3. Contact intro + contact details + form
4. Strengths block ("what I bring")
- **Goal:** remove friction and capture the inquiry.
- **Form fields:** name, email, project type (select), budget (optional), message.
- **Primary CTA:** Send message.

### Services `/services`
1. Hero
2. Service cards (3), each linking to its detail page
3. Process timeline
4. Closing CTA
- **Goal:** compare services and route to the right detail page.

### Service detail `/services/[service]` (×3)
1. Hero (service-specific H1 with primary keyword)
2. What you get (outcomes)
3. How it works (process steps)
4. Technologies used
5. Related projects (from `projects.ts`, filtered by service)
6. FAQ
7. Closing CTA
- **Goal:** rank for one service keyword and convert.

### Work `/work`
1. Hero
2. Project grid (all projects, filterable by service type only if more than 6 exist)
3. Closing CTA

### Project detail `/work/[slug]`
1. Hero (project name, category, one-line summary)
2. Overview (client, role, timeline, stack)
3. Problem
4. Approach
5. Result (only facts the owner supplies)
6. Screenshots
7. Next project + Closing CTA
- **Rule:** never invent results or metrics. Use only supplied facts.

### Privacy `/privacy`
Plain long-form page: what data the contact form collects, how it is used, how to request deletion, contact email.

### 404
Short message, link back Home, link to Contact.

---

## 7. Navigation

**Header (desktop and mobile):** Home · Services · Work · About · Contact, plus the primary button "Let’s Work Together".
**Footer:** brand + one-line positioning, link groups (Pages, Services, Contact), email, phone, social icons, copyright, Privacy link.
Labels are max 2 words. Active page is highlighted.

---

## 8. Features

| Feature | Details |
|---|---|
| Contact form | `react-hook-form` + `zod`, Server Action, Resend email, honeypot spam protection, inline errors, success state |
| Resend notifications | Email to owner on each submission, optional auto-reply to sender |
| Tech carousel | Pure CSS infinite scroll, pause on reduced motion |
| Testimonials | Embla carousel, keyboard accessible |
| Scroll reveals | `motion`, only on process and strengths |
| Map | Lazy-loaded Google Maps embed |
| Resume | Static PDF in `public/`, download button |
| Analytics | Vercel Analytics + Speed Insights |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, Open Graph images, JSON-LD (`Person`, `Service`, `BreadcrumbList`) |
| Accessibility | WCAG AA, keyboard navigation, reduced-motion support |

---

## 9. Content Model (typed files in `src/data/`)

| File | Holds |
|---|---|
| `site.ts` | Name, role, location, email, phone, social links, domain |
| `nav.ts` | Header and footer links |
| `services.ts` | Slug, title, tagline, description, icon, keyword, outcomes, FAQs |
| `projects.ts` | Slug, name, category, service, summary, stack, links, images, case-study fields |
| `process.ts` | Step title, text, icon |
| `strengths.ts` | Label, icon |
| `testimonials.ts` | Name, company, review |
| `seo.ts` (in `lib/`) | Default metadata and per-page title and description |

All copy is generated following `CONTENT.md`, then stored here. Components never contain hardcoded text.

---

## 10. SEO Plan

- One primary keyword per page, proposed first and approved by the owner before copy is written.
- Unique title and description for every page.
- Service detail pages are the main ranking targets.
- Internal linking: Home → Services → Service detail → Related projects → Contact.
- Submit sitemap to Google Search Console after launch.

---

## 11. Integrations and Environment

| Service | Use |
|---|---|
| Vercel | Hosting, previews, analytics |
| GitHub | Source control, auto-deploy on push to `main` |
| Resend | Contact form email |
| Google Maps | Embed only (no API key required) |
| Cloudflare Turnstile | Optional spam protection |

**Environment variables** (documented in `.env.example`, never committed):
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`

---

## 12. Performance and Quality Targets

- Lighthouse 95+ in Performance, Accessibility, Best Practices, SEO.
- Largest Contentful Paint under 2.5s on mobile.
- Zero layout shift from fonts or images.
- Fully responsive at 375px, 768px, 1280px and above.
- No console errors. Lint, type check, and build all pass.

---

## 13. Launch Checklist

- [ ] All Phase 1 pages built and responsive
- [ ] Copy written per `CONTENT.md` and approved
- [ ] Contact form tested end to end (submit, email arrives, errors, spam)
- [ ] Metadata, sitemap, robots, Open Graph images in place
- [ ] Accessibility pass (keyboard, contrast, alt text, reduced motion)
- [ ] Lighthouse targets met
- [ ] Custom domain connected on Vercel, HTTPS active
- [ ] Analytics confirmed
- [ ] Google Search Console set up, sitemap submitted
- [ ] Privacy page live and linked in footer

---

## 14. Open Items (owner input needed)

- Domain name
- Logo or brand mark
- Social profile links
- Resume PDF
- Project details and screenshots (per project)
- Approved primary keyword for each page
- Final decision on mobile card grid (1 column assumed)