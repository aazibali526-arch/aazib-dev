# STATE.md: AAZIB-DEV

> Single source of truth for current progress. Agents: read this before starting, update it after every chunk.
> Rules: one chunk at a time, mark `[x]` only after lint, type check, and build pass. Never delete completed items.

**Legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (add reason)

**Definition of done (every chunk):** matches `docs/DESIGN.md`, responsive at 375 / 768 / 1280px, hover and focus states, accessible, `pnpm lint` + `pnpm exec tsc --noEmit` + `pnpm build` all pass.

---

## CURRENT STATUS

- Phase: 0 nearly done (`.env.local` and Vercel import pending, owner). Phase 1 done. Phase 2 written, local test pending.
- Code: tokens.css, globals.css (`@theme`, `.hero`, `.btn-shine`, `.reveal`), fonts.ts, utils.ts, layout.tsx, site.ts, nav.ts, seo.ts. UI primitives written: Button, Card, Eyebrow, IconNode, Field, Input, Textarea, SectionIntro, Reveal.
- `page.tsx` is a TEMP UI preview page with placeholder copy (uses `/globe.svg`). Replaced in Phase 4. Other `src/` files (data, sections, layout components, actions) are still empty (0 bytes).
- Docs: `docs/` has AGENTS, CLAUDE, CONTENT, DESIGN, PROJECT, STATE. DESIGN.md updated with motion tokens, light eyebrow pill, form focus ring, Section intro (6.15).
- Last chunk: Phase 2 primitives (Button, Card, Eyebrow, IconNode, Input, Textarea, SectionIntro, Reveal).
- Last full local test (lint, tsc, build): pass at Phase 1 close. Re-run pending for Phase 2 (VERIFY).
- Owner approved in preview: Button, Card, Eyebrow, IconNode, SectionIntro. Not yet previewed: Input, Textarea, Reveal.

## NEXT (IN ORDER)

1. Owner: run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`. Preview Input, Textarea, Reveal at 375 / 768 / 1280px. If all pass, mark Phase 2 items `[x]`.
2. Phase 3: `Header`, `MobileNav`, `Footer` (read DESIGN.md 6.12 and 6.13 first).
3. Phase 4: `Hero` and the home sections. Remove the TEMP preview from `page.tsx` and delete unused `public/` boilerplate (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) after owner approval.

## OPEN QUESTIONS

- VERIFY after build: `LucideIcon` type export (lucide-react `^1.77.0`), Tailwind classes `min-h-35`, `bg-linear-110`, `duration-[600ms]`, `ease-[ease]`, `ease-smooth`.
- `about/page.tsx`, `contact/page.tsx`, `robots.ts`, `sitemap.ts` are stubs (needed for build). Real code in Phase 6 / 7.
- Nav items (Home, About, Services, Work, Contact) are a proposal. Owner approval pending.
- `/services` and `/work` pages do not exist yet. Nav links will 404 until Phase 6.
- Footer links and Privacy link TBD. Add to `nav.ts` in the Footer chunk.
- Meta description for the default metadata: pending owner approval (CONTENT.md).
- Service icon images (`public/images/services/`) and service copy (`services.ts`) are empty. Needed before Phase 4 Services section and Phase 5.
- Dark-section variant of `SectionIntro` not defined. Add to DESIGN.md 6.15 when the carousel or CTA needs it.

---

## PHASE 0: SETUP

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

## PHASE 1: FOUNDATION

- [x] `src/styles/tokens.css`: all tokens from DESIGN.md Section 2
- [x] Tailwind v4 `@theme` mapped to tokens (colors, fonts, radius, shadows, screens)
- [x] `globals.css`: base reset, body styles, `:focus-visible`, reduced-motion rules
- [x] `src/lib/fonts.ts`: 4 fonts, imported by layout.tsx. Verified, build passes.
- [x] `src/lib/utils.ts`: `cn()` helper
- [x] Root `layout.tsx`: fonts, `lang="en"`, metadata base. Header and Footer slots pending (Phase 3).
- [x] `src/lib/seo.ts`: `defaultMetadata` (default title + template, `metadataBase` only if `NEXT_PUBLIC_SITE_URL` is set). Description pending owner approval.
- [x] `src/data/site.ts` and `src/data/nav.ts`. Nav items proposed, domain and socials TBD.
- [x] Hero background class `.hero` in `globals.css` (DESIGN.md Section 5)

## PHASE 2: UI PRIMITIVES (`src/components/ui/`)

- [~] `Button` (primary, ghost, outline, link, submit). Preview approved, test pending.
- [~] `Card` (hover state, shadow, border). Preview approved, test pending.
- [~] `Eyebrow` (glass pill on dark, white pill on light). Preview approved, test pending.
- [~] `IconNode` (process and strength sizes, hover ring). Preview approved, test pending.
- [~] `Field` (shared label and message shell for Input and Textarea). Written, preview pending.
- [~] `Input` and `Textarea` (focus, error, success, disabled). Written, preview pending.
- [~] `shared/SectionIntro`. Preview approved, test pending.
- [~] `shared/Reveal` (IntersectionObserver, respects reduced motion). Written, preview pending.

## PHASE 3: LAYOUT

- [ ] `Header` (fixed, translucent, active link state)
- [ ] `MobileNav` (hamburger, full-width panel, focus trap, Escape to close)
- [ ] `Footer` (3 columns, links, socials, copyright, Privacy link)

## PHASE 4: HOME SECTIONS

- [ ] `Hero`
- [ ] `CodeWindow`
- [ ] `Services` (3 cards)
- [ ] `TechCarousel` (pure CSS, mask fade, hover color)
- [ ] `Work` (6 project cards)
- [ ] `Process` (timeline with scroll fill)
- [ ] `Strengths` (2-column grid)
- [ ] `Testimonials` (Embla)
- [ ] `ClosingCTA` (image background + glass panel)
- [ ] Assemble `app/page.tsx` (composition only, remove TEMP preview)

## PHASE 5: CONTENT (FOLLOW `CONTENT.md`)

- [ ] Owner approves primary keyword for each page
- [ ] Extract and review existing copy from Elementor exports
- [ ] Generate and approve copy per section
- [ ] Fill `src/data/services.ts`
- [ ] Fill `src/data/projects.ts`
- [ ] Fill `src/data/process.ts`
- [ ] Fill `src/data/strengths.ts`
- [ ] Fill `src/data/testimonials.ts`
- [ ] Write meta title and description for every page

## PHASE 6: PHASE 1 PAGES

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

## PHASE 7: SEO, ACCESSIBILITY, PERFORMANCE

- [ ] Metadata API on every page (`src/lib/seo.ts` defaults)
- [ ] `sitemap.ts` and `robots.ts`
- [ ] Open Graph images
- [ ] JSON-LD: `Person` (home), `Service` (service pages), `BreadcrumbList`
- [ ] Vercel Analytics and Speed Insights in root layout
- [ ] Accessibility pass: headings order, landmarks, alt text, keyboard, contrast, reduced motion
- [ ] Performance pass: image sizes, lazy loading, no layout shift
- [ ] Lighthouse 95+ on all four categories (mobile)

## PHASE 8: LAUNCH

- [ ] Privacy page (`/privacy`) written and linked in footer
- [ ] Add resume PDF to `public/` and wire up download button
- [ ] Final responsive check at 375 / 768 / 1280px
- [ ] Connect custom domain on Vercel, confirm HTTPS
- [ ] Set production environment variables in Vercel
- [ ] Verify production contact form
- [ ] Set up Google Search Console and submit sitemap
- [ ] Announce and share

## PHASE 9: GROWTH (AFTER LAUNCH)

- [ ] Service detail pages ×3 (`/services/[service]`)
- [ ] Related projects block and FAQ component
- [ ] Project case study pages (`/work/[slug]`)
- [ ] Add FAQ and `Service` JSON-LD to service pages
- [ ] Optional: thank-you page tracking
- [ ] Optional: blog (only if publishing regularly)

---

## BLOCKED / WAITING ON OWNER

- [ ] Domain name
- [ ] Logo or brand mark
- [ ] Social profile links
- [ ] Resume PDF
- [ ] Project details and screenshots
- [ ] Service icon images and service copy approval
- [ ] Primary keyword approval per page
- [ ] Mobile card grid decision (1 column assumed)
- [ ] Final nav items approval
- [ ] Footer text, links, socials
- [ ] Default meta description approval

---

## NOTES / DECISIONS LOG

- Package manager: pnpm only.
- Zod is v4. Use v4 APIs.
- DESIGN.md `[S]` values are locked. `[P]` values change only with owner approval.
- `TODO.md` renamed to `STATE.md`. This is now the single task and state file.
- Update this file at the end of every chunk.
- Docs style: main headings (`#` and `##`) are UPPERCASE in DESIGN.md and STATE.md.
- Fonts: tokens in `tokens.css` use the next/font variables (`--font-space-grotesk`, `--font-poppins`, `--font-jetbrains-mono`, `--font-aldrich`). Mapping resolved.
- `metadataBase` is set only when `NEXT_PUBLIC_SITE_URL` exists. No invented domain.
- Header CTA label uses the typographic apostrophe: `Let’s Work Together`.
- `.hero` lives in `@layer components` in `globals.css`, values copied as-is from DESIGN.md Section 5.
- Motion standard: one easing token `--ease-smooth`. Button colour 500ms, card hover 500ms, field focus 300ms, link-button float `translateY(-4px)` 1.3s, scroll reveal 600ms. Owner approved the slower, smoother feel.
- Ghost and outline buttons have a sheen sweep on hover (`.btn-shine` in `globals.css`, tokens `--shine-ink` and `--shine-blue`).
- Light-section eyebrow is a white pill with `--border-strong` (owner approved, DESIGN.md 6.2 updated).
- Card divider sits flush above the link-button (gap 0 interpretation of DESIGN.md 6.3).
- `Reveal` is a client component using IntersectionObserver. Content is visible by default and hidden only when below the fold, so there is no flash and no-JS users still see everything. Used only on Process and Strengths.
- `Input` and `Textarea` share `Field.tsx` (label, message, status classes) so styles are never duplicated. They accept `ref` as a prop (React 19), so they work with `react-hook-form` `register`.
- `motion` package is installed but unused so far (Reveal uses IntersectionObserver and CSS).
- Preview workflow: TEMP `page.tsx` renders primitives with placeholder copy. Real copy stays in `src/data/`.
- Test policy: owner runs the full local test (lint, tsc, build) at the end of a phase group. Sandbox can run lint + tsc only (Google Fonts blocked for build).
- On a fresh clone, tsc may fail on `LayoutProps` until `pnpm exec next typegen` or `pnpm build` has run once.
- Never share secrets or client data in chat. Keys go only in `.env.local`.