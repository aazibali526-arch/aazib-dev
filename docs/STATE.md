# STATE.md: aazib-dev

> Single source of truth for current progress. Agents: read this before starting, update it after every chunk.
> Rules: one chunk at a time, mark `[x]` only after lint, type check, and build pass. Never delete completed items.

**Legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (add reason)

**Definition of done (every chunk):** matches `docs/DESIGN.md`, responsive at 375 / 768 / 1280px, hover and focus states, accessible, `pnpm lint` + `pnpm exec tsc --noEmit` + `pnpm build` all pass.

---

## Current Status

- Phase: 0 nearly done, Phase 1 in progress (tokens.css, globals.css, @theme done).
- Code: Next.js scaffold only. Default create-next-app `layout.tsx`, `globals.css`, `page.tsx` (Geist fonts, hex colors, Tailwind default classes). All other `src/` files exist but are empty (0 bytes).
- Docs: `docs/` has AGENTS, CLAUDE, CONTENT, DESIGN, PROJECT, STATE.
- Last chunk: globals.css + @theme mapping. lint, tsc, build all pass.
- Build/lint/tsc last run: all pass.
## Next (in order)

1. `src/lib/utils.ts` (`cn()`) + `src/lib/fonts.ts` (4 Google fonts via next/font).
2. Root `layout.tsx`: fonts, metadata base, `lang="en"`, Geist hatao.
3. `src/data/site.ts` + `src/data/nav.ts`.

## Open Questions

- `about/page.tsx`, `contact/page.tsx`, `robots.ts`, `sitemap.ts` abhi stub hain (build ke liye). Real code Phase 6 / 7 mein.
- Fonts: DESIGN.md ke `--font-*` tokens literal naam use karte hain, next/font hashed naam deta hai. fonts.ts chunk mein iska mapping decide hoga.

---

## Phase 0: Setup

- [x] Create `aazib-dev` folder and open in VS Code
- [x] Scaffold Next.js (App Router, TypeScript, Tailwind, ESLint, `src/`)
- [x] Install packages (lucide-react, motion, react-hook-form, zod, resolvers, resend, embla, clsx, tailwind-merge)
- [x] Create folder structure
- [x] Move `DESIGN.md` into `docs/`
- [x] Paste `CLAUDE.md`, `AGENTS.md`, `CONTENT.md`, `PROJECT.md`, `TODO.md` into root (they live in `docs/`; `TODO.md` is replaced by `STATE.md`)
- [ ] Add `.env.example` and `.env.local` (`.gitignore` already ignores `.env*`, keeps `!.env.example`)
- [x] Initial commit
- [x] Create GitHub repo `aazib-dev` and push
- [ ] Import repo into Vercel (auto-deploy on `main`) (VERIFY if done)

## Phase 1: Foundation

- [x] `src/styles/tokens.css`: all tokens from DESIGN.md Section 2
- [x] Tailwind v4 `@theme` mapped to tokens (colors, fonts, radius, shadows, screens)
- [x] `globals.css`: base reset, body styles, `:focus-visible`, reduced-motion rules
- [~] `src/lib/fonts.ts`: 4 fonts defined, tokens updated to use next/font variables. Verified only after layout.tsx imports it.
- [x] `src/lib/utils.ts`: `cn()` helper
- [ ] Root `layout.tsx`: fonts, metadata base, Header and Footer slots, `lang="en"`
- [ ] `src/data/site.ts` and `src/data/nav.ts`
- [ ] Hero background class (DESIGN.md Section 5)

## Phase 2: UI Primitives (`src/components/ui/`)

- [ ] `Button` (primary, ghost, outline, link, submit variants)
- [ ] `Card` (hover state, shadow, border)
- [ ] `Eyebrow` (pill on dark, plain on light)
- [ ] `IconNode` (sizes, hover ring)
- [ ] `Input` and `Textarea` (focus, error, success states)
- [ ] `shared/SectionIntro`
- [ ] `shared/Reveal` (motion, respects reduced motion)

## Phase 3: Layout

- [ ] `Header` (fixed, translucent, active link state)
- [ ] `MobileNav` (hamburger, full-width panel, focus trap, Escape to close)
- [ ] `Footer` (3 columns, links, socials, copyright, Privacy link)

## Phase 4: Home Sections

- [ ] `Hero`
- [ ] `CodeWindow`
- [ ] `Services` (3 cards)
- [ ] `TechCarousel` (pure CSS, mask fade, hover color)
- [ ] `Work` (6 project cards)
- [ ] `Process` (timeline with scroll fill)
- [ ] `Strengths` (2-column grid)
- [ ] `Testimonials` (Embla)
- [ ] `ClosingCTA` (image background + glass panel)
- [ ] Assemble `app/page.tsx` (composition only)

## Phase 5: Content (follow `CONTENT.md`)

- [ ] Owner approves primary keyword for each page
- [ ] Extract and review existing copy from Elementor exports
- [ ] Generate and approve copy per section
- [ ] Fill `src/data/services.ts`
- [ ] Fill `src/data/projects.ts`
- [ ] Fill `src/data/process.ts`
- [ ] Fill `src/data/strengths.ts`
- [ ] Fill `src/data/testimonials.ts`
- [ ] Write meta title and description for every page

## Phase 6: Phase 1 Pages

- [ ] About page (`/about`)
- [ ] Journey timeline component
- [ ] Contact page (`/contact`)
- [ ] `MapEmbed` (lazy-loaded)
- [ ] `ContactForm` UI (fields, validation messages, success state)
- [ ] Contact Server Action (`src/actions/contact.ts`): zod validation, honeypot, Resend email
- [ ] Test form end to end (success, validation errors, spam, email delivery)
- [ ] Services page (`/services`)
- [ ] Work page (`/work`)
- [ ] 404 page (`not-found.tsx`)

## Phase 7: SEO, Accessibility, Performance

- [ ] Metadata API on every page (`src/lib/seo.ts` defaults)
- [ ] `sitemap.ts` and `robots.ts`
- [ ] Open Graph images
- [ ] JSON-LD: `Person` (home), `Service` (service pages), `BreadcrumbList`
- [ ] Vercel Analytics and Speed Insights in root layout
- [ ] Accessibility pass: headings order, landmarks, alt text, keyboard, contrast, reduced motion
- [ ] Performance pass: image sizes, lazy loading, no layout shift
- [ ] Lighthouse 95+ on all four categories (mobile)

## Phase 8: Launch

- [ ] Privacy page (`/privacy`) written and linked in footer
- [ ] Add resume PDF to `public/` and wire up download button
- [ ] Final responsive check at 375 / 768 / 1280px
- [ ] Connect custom domain on Vercel, confirm HTTPS
- [ ] Set production environment variables in Vercel
- [ ] Verify production contact form
- [ ] Set up Google Search Console and submit sitemap
- [ ] Announce and share

## Phase 9: Growth (after launch)

- [ ] Service detail pages ×3 (`/services/[service]`)
- [ ] Related projects block and FAQ component
- [ ] Project case study pages (`/work/[slug]`)
- [ ] Add FAQ and `Service` JSON-LD to service pages
- [ ] Optional: thank-you page tracking
- [ ] Optional: blog (only if publishing regularly)

---

## Blocked / Waiting on Owner

- [ ] Domain name
- [ ] Logo or brand mark
- [ ] Social profile links
- [ ] Resume PDF
- [ ] Project details and screenshots
- [ ] Primary keyword approval per page
- [ ] Mobile card grid decision (1 column assumed)

---

## Notes / Decisions Log

- Package manager: pnpm only.
- Zod is v4. Use v4 APIs.
- DESIGN.md `[S]` values are locked. `[P]` values change only with owner approval.
- `TODO.md` renamed to `STATE.md`. This is now the single task and state file.
- Update this file at the end of every chunk.