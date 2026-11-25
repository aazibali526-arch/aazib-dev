# STATE.md: aazib-dev

> Single source of truth for current progress. Agents: read this before starting, update it after every chunk.
> Rules: one chunk at a time, mark `[x]` only after lint, type check, and build pass. Never delete completed items.

**Legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (add reason)

**Definition of done (every chunk):** matches `docs/DESIGN.md`, responsive at 375 / 768 / 1280px, hover and focus states, accessible, `pnpm lint` + `pnpm exec tsc --noEmit` + `pnpm build` all pass.

---

## Current Status

- Phase: 0 nearly done (`.env.local` and Vercel import pending, owner). Phase 1 written, full local test pending.
- Code: tokens.css, globals.css (`@theme`, `.hero` class), fonts.ts, utils.ts, layout.tsx (fonts + `defaultMetadata`), site.ts, nav.ts, seo.ts. All other `src/` files exist but are empty (0 bytes). `page.tsx` is still the default create-next-app page.
- Docs: `docs/` has AGENTS, CLAUDE, CONTENT, DESIGN, PROJECT, STATE.
- Last chunk: Phase 0/1 setup finish: `.env.example`, `seo.ts`, layout metadata, `.hero` class, `site.ts`, `nav.ts`. Sandbox lint + tsc pass.
- Last full local test (lint, tsc, build): pass, before the last chunk. Re-run pending (VERIFY).
- Owner confirmed pasted: `site.ts`, `nav.ts`. VERIFY pasted: `.env.example`, `seo.ts`, layout metadata change, `.hero` block in globals.css.

## Next (in order)

1. VERIFY the 4 files above are pasted, then run the full local test: `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`. If all pass, mark the `[~]` Phase 1 items `[x]`.
2. Phase 2: `Button` primitive.
3. Header/Footer slots in `layout.tsx` (after Phase 3 components exist).

## Open Questions

- `about/page.tsx`, `contact/page.tsx`, `robots.ts`, `sitemap.ts` are stubs (needed for build). Real code in Phase 6 / 7.
- Nav items (Home, About, Services, Work, Contact) are a proposal. Owner approval pending.
- `/services` and `/work` pages do not exist yet. Nav links will 404 until Phase 6.
- Footer links and Privacy link TBD. Add to `nav.ts` in the Footer chunk.
- Meta description for the default metadata: pending owner approval (CONTENT.md).

---

## Phase 0: Setup

- [x] Create `aazib-dev` folder and open in VS Code
- [x] Scaffold Next.js (App Router, TypeScript, Tailwind, ESLint, `src/`)
- [x] Install packages (lucide-react, motion, react-hook-form, zod, resolvers, resend, embla, clsx, tailwind-merge)
- [x] Create folder structure
- [x] Move `DESIGN.md` into `docs/`
- [x] Paste `CLAUDE.md`, `AGENTS.md`, `CONTENT.md`, `PROJECT.md`, `TODO.md` into root (they live in `docs/`; `TODO.md` is replaced by `STATE.md`)
- [x] Add `.env.example` (empty placeholders only; `.gitignore` already ignores `.env*`, keeps `!.env.example`)
- [ ] Create `.env.local`: owner copies `.env.example` and fills own values (never share keys in chat)
- [x] Initial commit
- [x] Create GitHub repo `aazib-dev` and push
- [ ] Import repo into Vercel (auto-deploy on `main`) (VERIFY if done)

## Phase 1: Foundation

- [x] `src/styles/tokens.css`: all tokens from DESIGN.md Section 2
- [x] Tailwind v4 `@theme` mapped to tokens (colors, fonts, radius, shadows, screens)
- [x] `globals.css`: base reset, body styles, `:focus-visible`, reduced-motion rules
- [x] `src/lib/fonts.ts`: 4 fonts, imported by layout.tsx. Verified, build passes.
- [x] `src/lib/utils.ts`: `cn()` helper
- [~] Root `layout.tsx`: fonts, `lang="en"`, metadata base done (written, local test pending). Header and Footer slots pending (Phase 3).
- [~] `src/lib/seo.ts`: `defaultMetadata` (default title + template, `metadataBase` only if `NEXT_PUBLIC_SITE_URL` is set). Written, local test pending. Description pending owner approval.
- [~] `src/data/site.ts` and `src/data/nav.ts`: written, local test pending. Nav items proposed, domain and socials TBD.
- [~] Hero background class `.hero` in `globals.css` (DESIGN.md Section 5). Written, local test pending.

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
- [ ] Final nav items approval
- [ ] Footer text, links, socials
- [ ] Default meta description approval

---

## Notes / Decisions Log

- Package manager: pnpm only.
- Zod is v4. Use v4 APIs.
- DESIGN.md `[S]` values are locked. `[P]` values change only with owner approval.
- `TODO.md` renamed to `STATE.md`. This is now the single task and state file.
- Update this file at the end of every chunk.
- Fonts: tokens in `tokens.css` use the next/font variables (`--font-space-grotesk`, `--font-poppins`, `--font-jetbrains-mono`, `--font-aldrich`). Mapping resolved.
- `metadataBase` is set only when `NEXT_PUBLIC_SITE_URL` exists. No invented domain.
- Header CTA label uses the typographic apostrophe: `Let’s Work Together`.
- `.hero` lives in `@layer components` in `globals.css`, values copied as-is from DESIGN.md Section 5.
- Test policy: owner runs the full local test (lint, tsc, build) at the end of a phase group. Sandbox can run lint + tsc only (Google Fonts blocked for build).
- On a fresh clone, tsc may fail on `LayoutProps` until `pnpm exec next typegen` or `pnpm build` has run once.
- Never share secrets or client data in chat. Keys go only in `.env.local`.