# STATE.md: AAZIB-DEV

> Single source of truth for current progress. Agents: read this before starting, update it after every chunk.
> Rules: one chunk at a time, mark `[x]` only after lint, type check, and build pass. Never delete completed items.

**Legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (add reason)

**Definition of done (every chunk):** matches `docs/DESIGN.md`, responsive at 375 / 768 / 1280px, hover and focus states, accessible, `pnpm lint` + `pnpm exec tsc --noEmit` + `pnpm build` all pass.

---

## CURRENT STATUS

- Phase: 0 nearly done (`.env.local` and Vercel import pending, owner). Phase 1 done. Phase 2 mostly done (preview pending for Input, Textarea, Reveal). Phase 3 written: Header, MobileNav, Footer (preview and full build re-run pending).
- Code: tokens.css, globals.css (`@theme`, `.hero`, `.btn-shine`, `.reveal`), fonts.ts, utils.ts, layout.tsx (Header + Footer), site.ts, nav.ts, seo.ts, `lib/navigation.ts`. UI primitives: Button, Card, Eyebrow, IconNode, Field, Input, Textarea, SectionIntro, Reveal. Layout: Header, DesktopNav, NavDropdown, MobileNav, `navStyles.ts`, Footer. Asset: `public/images/logo-header.png`.
- `page.tsx` is a TEMP UI preview page with placeholder copy (uses `/globe.svg`). Replaced in Phase 4. Section components, remaining data files and `actions/contact.ts` are still empty (0 bytes).
- Docs: `docs/` has AGENTS, CLAUDE, CONTENT, DESIGN, PROJECT, STATE. DESIGN.md updated for Header (6.12) and Footer (6.13).
- Last chunk: Home page now renders `Hero` from `src/data/hero.ts` (`homeHero`). The rest of `page.tsx` is still the TEMP preview.
- Last confirmed full local test (lint, tsc, build): pass after the centered nav and Poppins change. Re-run pending after: scroll-state Header, Services link dropdown, MobileNav update, Footer (VERIFY).
- Owner approved in preview: Button, Card, Eyebrow, IconNode, SectionIntro. Not yet previewed: Input, Textarea, Reveal, Header, Footer.

## NEXT (IN ORDER)

1. Owner: apply the Footer logo and text diff if not yet applied, then run `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm build`. Preview at 375 / 768 / 1025 / 1280px: Header (transparent at top, solid after 8px scroll, centered nav, dropdowns by hover and keyboard, mobile focus trap, Escape, scroll lock), Footer, Input, Textarea (min 140px), Reveal. If all pass, mark Phase 2 and Phase 3 items `[x]`.
2. Owner: approve the footer positioning text (draft in `site.ts`), and provide social links and the booking link (Calendly or Cal.com) if any.
3. Phase 4: remaining home sections. Hero is mounted and must stay under the transparent Header. Remove the rest of the TEMP preview from `page.tsx` and delete unused `public/` boilerplate (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) after owner approval.

## OPEN QUESTIONS

- VERIFY in preview (build passing does not prove a class works): `min-h-35`, `bg-linear-110`, `duration-[600ms]`, `ease-[ease]`, `ease-smooth`, `md:h-18`, `underline-offset-[6px]`, `bg-blue-900/85`, `backdrop-blur-sm` (8px), `backdrop-filter` transition, `has-[#mobile-nav:not([hidden])]`.
- Every page needs a dark `.hero` banner at the top. The Header is transparent at the top and its text is light, so on a light background it would be invisible until scroll. Applies to `/about`, `/contact`, 404 and all later pages.
- Routes that do not exist yet and will 404: `/services`, `/services/*`, `/portfolio`, `/faqs`, `/schedule`, `/privacy`. Service detail pages are in Phase 9 but the nav already links them.
- `about/page.tsx`, `contact/page.tsx`, `robots.ts`, `sitemap.ts` are stubs (needed for build). Real code in Phase 6 / 7.
- Schedule Consultation: no booking link yet (Calendly / Cal.com?). Internal `/schedule` page assumed.
- Footer positioning text is a DRAFT (20 words, in `site.ts`). Needs owner approval and a primary keyword (CONTENT.md).
- Footer social icons are hidden until links exist. lucide-react has no brand icons, so inline SVG icons will be needed.
- Footer copyright year is fixed (`copyrightYear: 2026` in `site.ts`) because `new Date()` may break builds with Cache Components. VERIFY and revisit before launch.
- Footer "built with ... and a lot of coffee" line is an owner request. CONTENT.md says no jokes, so this is a deliberate exception.
- Original logo with tagline (for light backgrounds) is not in `public/images/` yet.
- Docs sync: `PROJECT.md`, `AGENTS.md`, `CLAUDE.md` still use `/work` and old nav naming. Update to `/portfolio`, `/faqs`, `/schedule` when approved.
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
- [x] Root `layout.tsx`: fonts, `lang="en"`, metadata base, Header and Footer rendered.
- [x] `src/lib/seo.ts`: `defaultMetadata` (default title + template, `metadataBase` only if `NEXT_PUBLIC_SITE_URL` is set). Description pending owner approval.
- [x] `src/data/site.ts` and `src/data/nav.ts`. Domain and socials TBD.
- [x] Hero background class `.hero` in `globals.css` (DESIGN.md Section 5)

## PHASE 2: UI PRIMITIVES (`src/components/ui/`)

- [x] `Button` (primary, ghost, outline, link, submit). Preview approved, build passes.
- [x] `Card` (hover state, shadow, border). Preview approved, build passes.
- [x] `Eyebrow` (glass pill on dark, white pill on light). Preview approved, build passes.
- [x] `IconNode` (process and strength sizes, hover ring). Preview approved, build passes.
- [~] `Field` (shared label and message shell for Input and Textarea). Written, preview pending.
- [~] `Input` and `Textarea` (focus, error, success, disabled). Written, preview pending.
- [x] `shared/SectionIntro`. Preview approved, build passes.
- [~] `shared/Reveal` (IntersectionObserver, respects reduced motion). Written, preview pending.

## PHASE 3: LAYOUT

- [~] `Header` (fixed, transparent over the hero at the top, solid after 8px scroll, centered desktop nav, Services link plus dropdown, Resources dropdown, image logo). Includes `DesktopNav`, `NavDropdown`, `navStyles.ts`, `lib/navigation.ts`. Written, preview and build re-run pending.
- [~] `MobileNav` (hamburger, full-width panel, accordion groups, focus trap, Escape to close, scroll lock). Written, preview and build re-run pending.
- [~] `Footer` (brand block with logo and positioning text, Pages / Services / Contact columns, bottom bar with copyright, Privacy link and "built with" line). Written, preview and build pending. Socials hidden until links exist.

## PHASE 4: HOME SECTIONS

- [~] `Hero` (rendered on `/` from `homeHero`. Rest of the page is still the TEMP preview. Lint and tsc passed. Full `pnpm build` still pending.)
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
- [ ] Approve footer positioning text (draft in `site.ts`)
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
- [ ] Portfolio page (`/portfolio`)
- [ ] FAQs page (`/faqs`)
- [ ] Schedule page (`/schedule`) or external booking link
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

- [ ] Privacy page (`/privacy`) written and linked in footer (link already in Footer)
- [ ] Add resume PDF to `public/` and wire up download button
- [ ] Final responsive check at 375 / 768 / 1280px
- [ ] Connect custom domain on Vercel, confirm HTTPS
- [ ] Set production environment variables in Vercel
- [ ] Verify production contact form
- [ ] Set up Google Search Console and submit sitemap
- [ ] Announce and share

## PHASE 9: GROWTH (AFTER LAUNCH)

- [ ] Service detail pages ×3 (`/services/[service]`). Nav and footer already link them.
- [ ] Related projects block and FAQ component
- [ ] Project case study pages (`/portfolio/[slug]`)
- [ ] Add FAQ and `Service` JSON-LD to service pages
- [ ] Optional: thank-you page tracking
- [ ] Optional: blog (only if publishing regularly)

---

## BLOCKED / WAITING ON OWNER

- [ ] Domain name
- [x] Logo: header variant received (`public/images/logo-header.png`)
- [ ] Original logo with tagline for light backgrounds
- [ ] Social profile links
- [ ] Resume PDF
- [ ] Project details and screenshots
- [ ] Service icon images and service copy approval
- [ ] Primary keyword approval per page
- [ ] Mobile card grid decision (1 column assumed)
- [x] Final nav items approval (Home, Services, About, Portfolio, Resources, CTA "Contact Me")
- [ ] Booking link for Schedule Consultation (Calendly / Cal.com)
- [ ] Footer positioning text approval (draft in `site.ts`)
- [ ] Default meta description approval

---

## NOTES / DECISIONS LOG

- Package manager: pnpm only.
- Zod is v4. Use v4 APIs.
- DESIGN.md `[S]` values are locked. `[P]` values change only with owner approval.
- `TODO.md` renamed to `STATE.md`. This is now the single task and state file.
- Update this file at the end of every chunk, only when the owner says so.
- Docs style: main headings (`#` and `##`) are UPPERCASE in DESIGN.md and STATE.md.
- Fonts: tokens in `tokens.css` use the next/font variables (`--font-space-grotesk`, `--font-poppins`, `--font-jetbrains-mono`, `--font-aldrich`). Poppins is loaded at weight 400 only, so use `font-normal` with it.
- Breakpoints: `md` is the Tailwind default 768px, `lg` is overridden to 1025px (`--breakpoint-lg`).
- Content width 1200px is written as `max-w-300` (Tailwind v4 spacing scale), not `max-w-[1200px]`.
- `metadataBase` is set only when `NEXT_PUBLIC_SITE_URL` exists. No invented domain.
- Header CTA label is `Contact Me` (2-5 words, first-person), set in `nav.ts`.
- Nav approved: Home, Services (label links to `/services`, dropdown of 3 service pages), About, Portfolio, Resources (FAQs, Schedule Consultation), CTA "Contact Me". "Work" was renamed "Portfolio".
- Header is a client component. Scroll state uses `useSyncExternalStore` (threshold 8px). At the top it is transparent so it blends into the hero. After scroll: `--blue-900` at 85%, blur 8px, bottom border. While the mobile menu is open it is solid (`has-[#mobile-nav:not([hidden])]`).
- Header layout on desktop is a 3-column grid (`1fr auto 1fr`): logo left, nav centered, CTA right. Nav links use Poppins (owner request), not JetBrains Mono.
- Nav dropdown items never wrap (`whitespace-nowrap`). Services trigger is a link plus a separate chevron button (accessible split control).
- Header uses `logo-header.png` (white wordmark, no tagline). Footer reuses the same file.
- Footer nav data lives in `nav.ts` (`footerLinks`, `privacyLink`). Footer text data lives in `site.ts` (`positioning`, `builtWith`, `copyrightYear`).
- Footer layout (owner request): brand block (large logo plus Poppins 400 positioning text) on the left, three organized columns on the right, bottom bar with copyright, Privacy link and a "Built with Next.js, Tailwind CSS and a lot of coffee." line.
- `.hero` lives in `@layer components` in `globals.css`, values copied as-is from DESIGN.md Section 5.
- Motion standard: one easing token `--ease-smooth`. Button colour 500ms, card hover 500ms, field focus 300ms, header and dropdown 300ms, link-button float `translateY(-4px)` 1.3s, scroll reveal 600ms. Owner approved the slower, smoother feel.
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