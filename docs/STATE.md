# STATE.md — AAZIB-DEV

> Single source of truth for current progress. Agents: read this before starting, update it after every chunk.
> Rules: one chunk at a time, mark `[x]` only after lint, type check, and build pass. Never delete completed items.

**Legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (add reason)

**Definition of done (every chunk):** matches `docs/DESIGN.md`, responsive at 375 / 768 / 1280px, hover and focus states, accessible, `pnpm lint` + `pnpm exec tsc --noEmit` + `pnpm build` all pass.

---

## CURRENT STATUS

- **Phase:** 0 nearly done (`.env.local` and Vercel import pending). Phase 1 done. Phase 2 written (preview pending for `Input`, `Textarea`, `Field`, `Reveal`). Phase 3 written (`Header`, `DesktopNav`, `NavDropdown`, `MobileNav`, `Footer`). Phase 4 in progress (`Hero`, `CodeWindow`, and `Services` implemented).
- **Implemented files:**
  - Config & styles: `next.config.ts` (Cache Components, Partial Prefetching, security headers), `src/styles/tokens.css`, `src/app/globals.css`
  - Lib & data: `src/lib/fonts.ts`, `src/lib/navigation.ts`, `src/lib/seo.ts`, `src/lib/utils.ts`, `src/data/site.ts`, `src/data/nav.ts`, `src/data/hero.ts`, `src/data/services.ts`
  - UI & shared primitives: `Button`, `Card`, `Eyebrow`, `IconNode`, `Field`, `Input`, `Textarea`, `SectionIntro`, `Reveal`
  - Layout & sections: `Header`, `DesktopNav`, `NavDropdown`, `MobileNav`, `navStyles.ts`, `Footer`, `Hero`, `CodeWindow`, `Services`
  - App routes & assets: `layout.tsx`, `page.tsx` (`Hero` + TEMP primitive preview), stubs for `about/page.tsx`, `contact/page.tsx`, `robots.ts`, `sitemap.ts`, and `public/images/logo-header.png`
- **Still empty (0 bytes):** `src/actions/contact.ts`, `src/data/{projects,process,strengths,testimonials}.ts`, and section components `TechCarousel`, `Work`, `Process`, `Strengths`, `Testimonials`, `ClosingCTA`, `ContactForm`, `MapEmbed`.
- **Checks:** `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` pass. CodeWindow browser checks pass at 375 / 768 / 1280px, including viewport entry/exit/resume, autocomplete, selection, and reduced motion. Services verified at 375 / 768 / 1280px with 1 / 2 / 3 columns, the shared IconNode hover, reduced motion, and no overlap or layout shift. Strict Mode and unmount runtime checks were not independently verified because another Next dev server holds the workspace lock.
- **CodeWindow files:** `CodeWindow.tsx`, `CodeWindowEditor.tsx`, `codeWindowSyntax.tsx`, `useCodeWindowAnimation.ts`, `src/data/codeWindow.ts`, `src/app/globals.css`, `src/styles/tokens.css`, `docs/DESIGN.md`, and the Hero width integration in `Hero.tsx`. No dependencies added.
- **Owner approved in preview:** `Button`, `Card`, `Eyebrow`, `IconNode`, `SectionIntro`. Pending preview: `Input`, `Textarea`, `Reveal`, `Header`, `Footer`, `Hero`.

## NEXT (IN ORDER)

1. Preview at 375 / 768 / 1025 / 1280px: `Header`, `MobileNav`, `Footer` (customized 64/80/96px logo + 14px `--code-text` statement), `Hero`, `Input`, `Textarea`, and `Reveal`. Mark Phase 2, Phase 3, and `Hero` `[x]` once verified.
2. Owner decisions: approve final `site.ts` positioning statement and page primary keywords, and supply social links, booking link (Calendly/Cal.com), resume PDF, light-bg logo, and project content.
3. Complete the remaining Phase 4 home sections (`TechCarousel` through `ClosingCTA`), remove the TEMP preview from `src/app/page.tsx`, and remove unused `public/*.svg` starter files once no longer referenced.

## OPEN QUESTIONS

- **Routes not built yet (404):** `/services`, `/services/*`, `/portfolio`, `/faqs`, `/schedule`, `/privacy`. `about/page.tsx`, `contact/page.tsx`, `robots.ts`, and `sitemap.ts` are stubs.
- **Dark hero requirement:** Every page needs a dark `.hero` banner at the top because `Header` is transparent at scroll `0` with light text.
- **Schedule Consultation:** Internal `/schedule` page vs external booking link (Calendly/Cal.com) pending owner input.
- **Footer socials & copyright:** Social links hidden until `site.socials` is populated (inline brand SVGs needed since `lucide-react` omits brand icons). `copyrightYear: 2026` is fixed in `site.ts` for Cache Components determinism; update before launch if year rolls over.
- **Assets & copy pending:** Light-bg logo, service/project copy (`docs/CONTENT.md`), and default meta description.
- **Dark-section `SectionIntro`:** Add dark variant to `docs/DESIGN.md` 6.15 when `TechCarousel` or `ClosingCTA` needs it.
- **Unused dependency:** `motion` (`^14.14.0`) is installed in `package.json` while `Reveal` currently uses `IntersectionObserver` + CSS. Remove or adopt in Phase 4/7.

---

## PHASE 0: SETUP

- [x] Create `aazib-dev` folder and open in VS Code
- [x] Scaffold Next.js (App Router, TypeScript, Tailwind, ESLint, `src/`)
- [x] Install packages (`lucide-react`, `motion`, `react-hook-form`, `zod`, `resolvers`, `resend`, `embla-carousel-react`, `clsx`, `tailwind-merge`)
- [x] Create folder structure
- [x] Move `DESIGN.md` into `docs/`
- [x] Place `CLAUDE.md`, `AGENTS.md`, `CONTENT.md`, `PROJECT.md`, `STATE.md` in `docs/` (replaces `TODO.md`)
- [x] Add `.env.example` (empty placeholders only; `.gitignore` ignores `.env*`, keeps `!.env.example`)
- [ ] Create `.env.local`: owner copies `.env.example` and fills own values (never commit or share keys)
- [x] Initial commit and push to GitHub `aazib-dev`
- [ ] Import repo into Vercel (auto-deploy on `main`)

## PHASE 1: FOUNDATION

- [x] `src/styles/tokens.css`: all tokens from `docs/DESIGN.md` Section 2
- [x] Tailwind v4 `@theme` mapped to tokens (`colors`, `fonts`, `radius`, `shadows`, `screens`)
- [x] `src/app/globals.css`: base reset, body styles, `:focus-visible`, reduced-motion rules, `.hero`, `.btn-shine`, `.reveal`
- [x] `src/lib/fonts.ts`: 4 Google fonts (`Space Grotesk`, `Poppins`, `JetBrains Mono`, `Aldrich`)
- [x] `src/lib/utils.ts`: `cn()` helper
- [x] `src/app/layout.tsx`: fonts, `lang="en"`, metadata base, `Header` and `Footer`
- [x] `src/lib/seo.ts`: `defaultMetadata` with safe `NEXT_PUBLIC_SITE_URL` parsing
- [x] `src/data/site.ts` and `src/data/nav.ts`

## PHASE 2: UI PRIMITIVES (`src/components/ui/` & `src/components/shared/`)

- [x] `Button` (`primary`, `ghost`, `outline`, `link`, `submit`)
- [x] `Card` (hover state, shadow, border)
- [x] `Eyebrow` (glass pill on dark, white pill on light)
- [x] `IconNode` (`process` and `strength` sizes, hover ring)
- [~] `Field` (shared label and message shell). Written, preview pending.
- [~] `Input` and `Textarea` (focus, error, success, disabled). Written, preview pending.
- [x] `shared/SectionIntro`
- [~] `shared/Reveal` (`IntersectionObserver`, respects `prefers-reduced-motion`). Written, preview pending.

## PHASE 3: LAYOUT

- [~] `Header` (`DesktopNav`, `NavDropdown`, `navStyles.ts`, `lib/navigation.ts`). Written, preview pending.
- [~] `MobileNav` (hamburger, full-width panel, accordions, focus trap, Escape, scroll lock). Written, preview pending.
- [~] `Footer` (customized 64/80/96px logo, 14px `--code-text` positioning statement, Pages / Services / Contact columns, bottom bar). Written, preview pending.

## PHASE 4: HOME SECTIONS

- [~] `Hero` (mounted on `/` from `src/data/hero.ts`; supporting text restored to prior copy, visual preview pending; `CodeWindow` right column upgraded; TEMP preview still below it)
- [~] `CodeWindow` (visual upgrade completed; title updated and trailing blank row removed; animation implemented; Strict Mode and unmount verification pending)
- [x] `Services` (3 cards; desktop 3-column grid, service icons, shared IconNode hover effect, and filled accent CTA)
- [ ] `TechCarousel` (pure CSS, mask fade, hover color)
- [ ] `Work` (6 project cards)
- [ ] `Process` (timeline with scroll fill)
- [ ] `Strengths` (2-column grid)
- [ ] `Testimonials` (Embla)
- [ ] `ClosingCTA` (image background + glass panel)
- [ ] Assemble `src/app/page.tsx` (composition only, remove TEMP preview)

## PHASE 5: CONTENT (FOLLOW `docs/CONTENT.md`)

- [ ] Owner approves primary keyword for each page
- [ ] Extract and review existing copy from Elementor exports
- [ ] Generate and approve SEO-focused copy per section
- [ ] Finalize footer positioning text in `src/data/site.ts`
- [ ] Fill `projects.ts`, `process.ts`, `strengths.ts`, `testimonials.ts`
- [ ] Write unique meta title and description for every page

## PHASE 6: PAGES & CONTACT

- [ ] About page (`/about`) + Journey timeline
- [ ] Contact page (`/contact`) + lazy-loaded `MapEmbed` + `ContactForm` + `src/actions/contact.ts` (Zod v4, honeypot, Resend, Turnstile/rate limit)
- [ ] Test contact form end to end
- [ ] Services (`/services`), Portfolio (`/portfolio`), FAQs (`/faqs`), Schedule (`/schedule`), and 404 (`not-found.tsx`)

## PHASE 7: SEO, ACCESSIBILITY, SECURITY, PERFORMANCE

- [ ] Metadata API on every page (`src/lib/seo.ts` defaults)
- [ ] Complete `sitemap.ts` and `robots.ts`
- [ ] Open Graph images
- [ ] JSON-LD (`Person`, `Service`, `BreadcrumbList`, `FAQPage`)
- [ ] Vercel Analytics and Speed Insights in root layout
- [ ] Security headers (`next.config.ts`) verified with Maps/Turnstile origins
- [ ] Accessibility, performance, and Lighthouse 95+ pass (mobile)

## PHASE 8: LAUNCH

- [ ] Privacy page (`/privacy`) written and linked in footer
- [ ] Add resume PDF to `public/` and wire up download button
- [ ] Final responsive check at 375 / 768 / 1280px
- [ ] Connect custom domain on Vercel, confirm HTTPS & env vars
- [ ] Verify production contact form and submit sitemap in Google Search Console

## PHASE 9: GROWTH (AFTER LAUNCH)

- [ ] Service detail pages ×3 (`/services/[service]`) with FAQ & `Service` JSON-LD
- [ ] Project case study pages (`/portfolio/[slug]`)

---

## BLOCKED / WAITING ON OWNER

- [ ] Domain name (`NEXT_PUBLIC_SITE_URL`)
- [x] Header logo (`public/images/logo-header.png`)
- [ ] Light-background logo with tagline
- [ ] Social profile links & resume PDF
- [ ] Project details, screenshots, and service icons
- [ ] Primary keywords per page & copy approvals
- [ ] Booking link for Schedule Consultation (Calendly / Cal.com)
- [ ] Default meta description approval

---

## NOTES / DECISIONS LOG

- **Package manager:** `pnpm` only. `Zod` is v4.
- **Design governance:** `docs/DESIGN.md` `[S]` values are locked; `[P]` values change only with owner approval and doc sync.
- **Tailwind v4:** `--breakpoint-lg` overridden to `1025px`; `max-w-300` = `1200px`; `--blur-sm` = `8px`.
- **Fonts:** Next.js `next/font/google` CSS variables in `tokens.css`; `Poppins` loaded at `400` only (`font-normal`).
- **Header & Footer:** `Header` uses `useSyncExternalStore` (8px threshold, transparent at top, `bg-blue-900/85 backdrop-blur-sm` on scroll, solid when `#mobile-nav` is open). `Footer` uses customized `64/80/96px` logo and `14px` `--code-text` positioning statement.
- **Next.js 16 Cache Components:** `cacheComponents: true` + `partialPrefetching: true` preserve route UI with `<Activity>`; transient UI state (`MobileNav`, `Reveal`) must account for route transitions and re-mounting effects.
- **Security:** `poweredByHeader: false` + baseline HTTP security headers & CSP configured in `next.config.ts`; `seo.ts` guards `NEXT_PUBLIC_SITE_URL` parsing; `Button.tsx` rejects protocol-relative `//` links from internal `<Link>` routing.
- **Testing policy:** Sandbox runs `pnpm lint` + `pnpm exec tsc --noEmit` (no network for Google Fonts in `pnpm build`); run full `pnpm build` locally with network before marking chunks `[x]`.
