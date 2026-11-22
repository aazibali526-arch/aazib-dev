# CLAUDE.md — aazib-dev

Portfolio site for **Aazib Ali**, a freelance developer in Islamabad, Pakistan (web, mobile, AI/LLM solutions). Deployed on Vercel.

**Read `docs/DESIGN.md` before writing any UI.** It is the single source of truth for colors, type, spacing, components, and copy. If it conflicts with this file for anything visual, DESIGN.md wins.

---

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4 (theme defined in CSS via `@theme`, no `tailwind.config.js` unless needed)
- `next/font/google`: Space Grotesk, Poppins, JetBrains Mono, Aldrich
- `lucide-react` icons, `motion` for animation, `embla-carousel-react` for testimonials
- `react-hook-form` + `zod` + `@hookform/resolvers` for forms
- `resend` for email (via Server Action)
- `clsx` + `tailwind-merge` via a `cn()` helper in `src/lib/utils.ts`
- Package manager: **pnpm** only. Never use npm or yarn.

The installed Next.js version may be newer than your training data. When unsure about an API, check `node_modules/next/dist/docs/` before guessing. Zod is v4: use v4 APIs.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build (must pass before finishing a task)
pnpm lint       # ESLint (must pass)
pnpm exec tsc --noEmit   # type check (must pass)
```

## Folder structure

```
docs/            DESIGN.md and other context files
public/          images/{projects,services,tech}, icons
src/app/         layout.tsx, page.tsx, about/, contact/, sitemap.ts, robots.ts
src/components/
  ui/            primitives: Button, Card, Eyebrow, IconNode, Input, Textarea
  layout/        Header, Footer, MobileNav
  sections/      page blocks: Hero, Services, TechCarousel, Work, Process,
                 Strengths, Testimonials, ClosingCTA, ContactForm, MapEmbed, CodeWindow
  shared/        SectionIntro, Reveal
src/data/        typed content: services, projects, process, strengths, testimonials, nav
src/lib/         fonts.ts, utils.ts, seo.ts
src/actions/     contact.ts (Server Action)
src/styles/      tokens.css (the ONLY place hex values live)
```

## Core rules

1. **Pages only compose sections.** No layout logic or copy inside `page.tsx`.
2. **All copy lives in `src/data/`.** Never hardcode headlines, card text, or nav items in components.
3. **Build primitives once in `ui/`, reuse everywhere.** Never duplicate button or card styles.
4. **Tokens only.** Every color, radius, shadow, and font comes from `tokens.css` / the Tailwind theme mapped from DESIGN.md. No raw hex, no arbitrary Tailwind values like `text-[#2A5BB0]`, `p-[13px]`, or `rounded-[7px]` unless DESIGN.md lists that exact value.
5. **Mobile-first.** Write the base (≤767px) style, then `md:` (tablet) and `lg:` (desktop). Match DESIGN.md breakpoints: tablet 768px, desktop 1025px (map to custom Tailwind screens, do not use default values if they differ).
6. **Server Components by default.** Add `"use client"` only for interactivity (mobile nav, carousel, form, reveal animations, hover-driven state). Keep client components small and leaf-level.
7. **Never alter `[S]`-tagged values in DESIGN.md.** `[P]` values can change only if the user approves, and DESIGN.md must be updated in the same change.

## Code conventions

- Components: named exports for components, default export only for `page.tsx`/`layout.tsx`.
- File names: `PascalCase.tsx` for components, `camelCase.ts` for utilities and data.
- Props typed with `interface`, no `any`. Prefer `type` imports.
- Import with the `@/` alias, never long relative paths (`../../..`).
- Use `next/image` for all images (with width/height or `fill` + `sizes`), `next/link` for internal links, `next/font` for fonts. Never use raw `<img>`, `<a>` for internal routes, or CSS `@import` for fonts.
- Use `cn()` for conditional classes.
- Icons: `lucide-react` only, stroke width 2, no emoji icons.
- Keep components under ~150 lines. Split when larger.
- No default exports of anonymous functions, no inline styles except for dynamic values that Tailwind cannot express.
- No `console.log` left in committed code.

## Design essentials (full details in DESIGN.md)

- Fonts: Space Grotesk = headings, Poppins 400 = body, JetBrains Mono 500 = eyebrows/buttons, Aldrich = h6 taglines only.
- Primary accent `#2A5BB0`. Hero navy `#0E1B3D` with the dot-grid background from DESIGN.md Section 5.
- Radius only: 0 (code window), 4px (buttons), 5px (cards), 9999px (pills), 50% (icon nodes).
- Section padding: 80/40 desktop, 64/32 tablet, 48/20 mobile. Hero: 160/40/80/40, 144/32/64/32, 112/20/48/20.
- Section backgrounds alternate `--surface-50` and `--surface-100`.
- Section intros centered. Card paragraphs justified. CTA panel text left-aligned.
- Copy: Title Case headlines, buttons 2–5 words, card links end with ` →`, use `&` in service names, typographic apostrophe `’`.

## Forms and email

- Contact form: `react-hook-form` + `zod` schema shared between client and server.
- Submit through the Server Action in `src/actions/contact.ts`. Always re-validate on the server.
- Send with Resend. Add a honeypot field (and Cloudflare Turnstile if configured).
- Return typed results (`{ success: true }` or `{ success: false, error }`). Show inline errors and a success state per DESIGN.md Section 6.14.
- Environment variables (never commit, never log):
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`
- Keep `.env.local` out of git. Document required vars in `.env.example`.

## SEO and performance

- Use the Metadata API in each page and `src/lib/seo.ts` for shared defaults (title template, description, Open Graph, `metadataBase`).
- Maintain `sitemap.ts` and `robots.ts`.
- Add JSON-LD `Person` schema on the home page.
- Use `priority` only on the hero image if one exists. Lazy-load below-the-fold images, the map iframe, and the carousel.
- Target Lighthouse 95+ on all four categories. No layout shift: set image dimensions and use `next/font`.
- Add Vercel Analytics and Speed Insights in the root layout.

## Accessibility (non-negotiable)

- Semantic HTML: one `h1` per page, ordered headings, `header`/`main`/`footer`/`nav`/`section`.
- `aria-label` on regions, `aria-hidden` on decorative icons, real `alt` on meaningful images.
- Visible `:focus-visible` outline (2px `--blue-600`, 2px offset; `--white` on dark).
- All interactive elements keyboard-reachable; touch targets at least 44px.
- Respect `prefers-reduced-motion`: disable carousel scroll, reveals, and the link-button float.
- Contrast must meet WCAG AA using only the DESIGN.md color roles.

## NEVER

- Never add a color, font, radius, shadow, or spacing value not in DESIGN.md.
- Never hardcode copy in components.
- Never use `npm`/`yarn`, class components, `useEffect` for things a Server Component or CSS can do, or global CSS outside `tokens.css`/`globals.css`.
- Never add a UI library (shadcn, MUI, Chakra, etc.) or a CMS/database without asking.
- Never use default Tailwind palette colors (`blue-500`, `gray-100`, etc.).
- Never style per page. Change the token or the primitive, not the instance.
- Never skip the tablet and mobile variants.
- Never commit secrets or `.env.local`.
- Never delete or rewrite files outside the task's scope.

## Workflow

1. Read `docs/DESIGN.md` and this file. Check `TODO.md` for current tasks.
2. Work in small steps: one section or feature per task.
3. Reuse existing `ui/` primitives and `data/` files before creating new ones.
4. Before finishing, run `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`. Fix all errors.
5. Verify at three widths: 375px, 768px, 1280px. Check hover and focus states.
6. Update `TODO.md`. If a design value changed, update `docs/DESIGN.md` in the same change.
7. If something is ambiguous or missing from DESIGN.md, ask. Do not guess.

## Build order

1. `tokens.css`, fonts, Tailwind theme (from DESIGN.md)
2. `ui/` primitives: Button, Card, Eyebrow, IconNode
3. Header and Footer
4. Hero (with dot-grid background)
5. Remaining Home sections (Services, TechCarousel, Work, Process, Strengths, Testimonials, ClosingCTA)
6. About page, then Contact page (form, map)
7. SEO, analytics, accessibility pass, performance pass
8. Deploy to Vercel