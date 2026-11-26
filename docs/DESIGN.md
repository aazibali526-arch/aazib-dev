# DESIGN.md — AAZIB PORTFOLIO (V2 · FINAL)

> **Single source of truth for all UI.** Agents must follow it exactly.
> Never invent a color, font, size, radius, shadow or spacing value that is not listed here. If a value is missing, stop and add it here first.

**Tag legend** (every rule is tagged so you know what is locked):
- `[S]` Sourced: extracted exactly from the Elementor exports (Home 711, About 714, Contact 720).
- `[I]` Inferred: derived from consistent usage in the exports.
- `[P]` Proposed: not in the exports, designed to match the system. Change here before changing code.

Untagged rules in a `[S]` section inherit its tag.

---

## 1. BRAND & VIBE `[S]`

Freelance developer portfolio (web, mobile, AI). Calm, precise, technical. Dark navy hero with dot-grid, cool-gray light sections, terminal/code details, mono labels. Never playful, never decorative.

Keywords: engineered, minimal, blue-on-gray, terminal-inspired, high contrast.

---

## 2. TOKENS

Use these as CSS variables. Never hardcode hex values in components.

`````css
:root {
  /* Brand */
  --blue-900: #0E1B3D;   /* hero base */                                     [S]
  --blue-700: #1F4688;   /* hover blue, eyebrow text on light */             [S]
  --blue-600: #2A5BB0;   /* PRIMARY accent */                                [S]

  /* Ink */
  --ink-950: #11151B;    /* dark surfaces, footer, carousel, text on white btn */ [S]
  --ink-900: #1A212B;    /* headings & taglines on light */                  [S]
  --slate-600: #4A5565;  /* body text on light */                            [S]

  /* Surfaces */
  --white: #FFFFFF;                                                          /* [S] */
  --surface-50: #F5F7FA; /* default section bg, headings on dark */          /* [S] */
  --surface-100: #E8EDF3;/* alternate section bg, icon-node bg */            /* [S] */

  /* Borders */
  --border: #E3E8EF;        /* card border */                                /* [S] */
  --border-strong: #D3DAE3; /* card hover, icon-node border, divider */      /* [S]/[I] */

  /* Glass */
  --glass-eyebrow-from: #FFFFFF1F;                                           /* [S] */
  --glass-eyebrow-to: #8FB1EA2E;                                             /* [S] */
  --glass-eyebrow-border: #8FB1EA59;                                         /* [S] */
  --glass-cta-from: #FFFFFF38;                                               /* [S] */
  --glass-cta-to: #FFFFFF0F;                                                 /* [S] */
  --glass-cta-border: #FFFFFF59;                                             /* [S] */
  --on-glass: #FFFFFFD9;                                                     /* [S] */

  /* Code window (terminal widget only) [S] */
  --code-bg: #11151B; --code-border: #222936; --code-text: #ABB2BF;
  --code-title: #7F8799; --code-tab-text: #E6E9EF; --code-muted: #5C6370;
  --code-accent: #61AFEF;
  --dot-red: #FF5F56; --dot-yellow: #FFBD2E; --dot-green: #27C93F;

  /* Status (forms only) [P] */
  --error: #C62828;
  --success: #2E7D32;

  /* Fonts [S] */
  --font-display: var(--font-space-grotesk), system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: var(--font-poppins), system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  --font-tag: var(--font-aldrich), system-ui, sans-serif;

  /* Radius [S] */
  --r-btn: 4px;
  --r-card: 5px;
  --r-pill: 9999px;
  --r-circle: 50%;

  /* Spacing [S] */
  --gap: 16px;
  --gap-card: 12px;
  --pad-card: 16px;

  /* Shadows [S] */
  --shadow-card: 0 2px 12px rgba(17, 21, 27, 0.04);
  --shadow-card-hover: 0 8px 24px rgba(42, 91, 176, 0.12);
  --ring-node-hover: 0 0 0 4px rgba(42, 91, 176, 0.12);
  --ring-field-focus: 0 0 0 3px rgba(42, 91, 176, 0.12);   /* [P] */

  /* Motion [P] */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);

  /* Button sheen [P] */
  --shine-ink: rgba(17, 21, 27, 0.12);
  --shine-blue: rgba(42, 91, 176, 0.16);
}
`````

### Color roles (strict) `[S]`

| Need | Token |
|---|---|
| Primary accent, links, icons | `--blue-600` |
| Hover blue | `--blue-700` |
| Heading on light | `--ink-900` |
| Body on light | `--slate-600` |
| Headings on dark | `--surface-50` |
| Eyebrow / buttons text on dark | `--white` |
| Eyebrow on light | `--blue-700` |
| Section background | `--surface-50` or `--surface-100` |
| Card background | `--white` |
| Dark strips (carousel, footer) | `--ink-950` |

Only these colors exist. No `#000`, no extra blues, no gradients except the hero and glass fills.

---

## 3. TYPOGRAPHY `[S]`

Load via Google Fonts, `display=swap`: Space Grotesk 600/700, Poppins 400, JetBrains Mono 400/500, Aldrich 400.

**Font roles. Never swap:**
- Space Grotesk → all headings and strength labels
- Poppins 400 → all paragraphs, nav links, footer links and footer text `[P]`
- JetBrains Mono 500 → eyebrows, buttons, link-buttons, code UI. JetBrains Mono 400 → footer bottom bar `[P]`
- Aldrich 400 → h6 taglines, contact detail line

| Style | Font | Wt | Desktop / Tablet / Mobile (px) | Line-h | Tracking | Color |
|---|---|---|---|---|---|---|
| H1 hero | Space Grotesk | 700 | 64 / 56 / 48 | 1.1 | -0.02em | `--surface-50` |
| H2 section | Space Grotesk | 600 | 40 / 36 / 32 | 1.2 | 0 | `--ink-900` (`--white` in CTA) |
| H2 card title | Space Grotesk | 600 | 24 / 20 / 18 | 1.3 | 0 | `--ink-900` |
| Lead paragraph | Poppins | 400 | 18 / 16 / 14 | 1.6 | 0 | `--slate-600` (hero: `--surface-50` `[I]`) |
| Card paragraph | Poppins | 400 | 16 / 14 / 13 | 1.6 | 0 | `--slate-600` |
| Tagline (h6) | Aldrich | 400 | 16 (12 on project category tags) | 1.6 | 0 | `--ink-900` |
| Eyebrow | JetBrains Mono | 500 | 16 / 16 / 14 | 1.4 | 0 | `--blue-700` light · `--white` dark |
| Link-button | JetBrains Mono | 500 | 18 / 16 / 15 | 1.5 | 0.02px | `--blue-600` |
| Button label | JetBrains Mono | 500 | 16 / 16 / 15 `[P]` | 1.4 | 0 | per variant |
| Nav link `[P]` | Poppins | 400 | 16 / 16 / 16 | 1.4 | 0 | `--surface-50` (hover/active `--white`) |
| Footer heading `[P]` | Space Grotesk | 600 | 18 / 18 / 18 | 1.3 | 0 | `--surface-50` |
| Footer statement `[P]` | Poppins | 400 | 20 / 20 / 18 | 1.6 | 0 | `--surface-50` |
| Footer link `[P]` | Poppins | 400 | 14 / 14 / 14 | 1.5 | 0 | `--code-text` (hover `--code-accent`) |
| Footer meta `[P]` | JetBrains Mono | 400 | 13 / 13 / 13 | 1.5 | 0 | `--code-title` (hover `--code-accent`) |

### Alignment rules `[S]`
- **Section intro** (eyebrow + H2 + lead): centered.
- **Hero**: left on desktop, centered on tablet and mobile (H1, lead, buttons).
- **Card paragraphs**: justified. Card titles and taglines: left.
- **CTA glass panel** and **Contact "Let’s Connect" intro**: left-aligned (`start`).
- Tagline sits under card title with `margin-top: -12px`.

---

## 4. LAYOUT

### Breakpoints `[S]`
| Name | Range | Tailwind |
|---|---|---|
| Mobile | ≤ 767px (base) | base |
| Tablet | 768–1024px | `md` (768px, default) |
| Desktop | ≥ 1025px | `lg` (overridden to 1025px) |
| Carousel extra | ≤ 640px | `sm` / max-width rule |

### Content width `[P]`
Max **1200px** (`max-w-300` in Tailwind v4), centered. Section backgrounds full-bleed.

### Section padding `[S]`
| | Top/Bottom | Left/Right |
|---|---|---|
| Desktop | 80px | 40px |
| Tablet | 64px | 32px |
| Mobile | 48px | 20px |

### Hero padding `[S]`
| | T | R | B | L |
|---|---|---|---|---|
| Desktop | 160 | 40 | 80 | 40 |
| Tablet | 144 | 32 | 64 | 32 |
| Mobile | 112 | 20 | 48 | 20 |

Hero direction: row on desktop, column on tablet and below. The hero extends under the fixed Header (the Header is transparent at the top of the page).

### Gaps `[S]`
Between blocks 16px · inside cards 12px · card padding 16px · grid gap 16px.

### Card grids `[S]`/`[P]`
Desktop 3 columns · tablet 2 `[S]` · mobile 1 `[P]`. Services: 3 cards. Projects: 6 cards (3×2).

### Section background order `[S]`
Hero (navy) → Services `--surface-50` → Tech carousel `--ink-950` → Work `--surface-100` → Process `--surface-50` → Strengths `--surface-100` → Testimonials `--surface-100` → Closing CTA (cover image + glass panel).

About: Hero → `--surface-50` content (+ timeline). Contact: Hero → intro/map → `--surface-50` form + strengths.

Every page starts with a dark `.hero` banner so the transparent Header stays readable.

---

## 5. HERO BACKGROUND `[S]`

Used on every page hero (class `.hero`). Tokenized, no `!important` needed in code (Elementor needs it).

`````css
.hero {
  --dot: rgba(255,255,255,0.13);
  --major: rgba(255,255,255,0.022);
  --cell: 40px;
  --major-cell: 200px;
  background-color: var(--blue-900);
  background-image:
    radial-gradient(ellipse 60% 70% at 35% 50%, rgba(14,27,61,0.35), transparent 70%),
    radial-gradient(circle at center, var(--dot) 0.8px, transparent 1.2px),
    linear-gradient(var(--major) 1px, transparent 1px),
    linear-gradient(90deg, var(--major) 1px, transparent 1px),
    linear-gradient(70deg, var(--blue-900) 0%, var(--blue-700) 55%, var(--blue-600) 100%);
  background-size: 100% 100%, var(--cell) var(--cell), var(--major-cell) var(--major-cell), var(--major-cell) var(--major-cell), 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat, repeat, repeat, repeat, no-repeat;
}
@media (max-width: 767px) { .hero { --cell: 32px; --major-cell: 160px; } }
`````

---

## 6. COMPONENTS

### 6.1 Buttons `[S]` (colors, border, radius) · `[P]` (size, motion)
All: JetBrains Mono 500, **2px border, radius 4px**. Size `[P]`: padding `14px 28px`, min-height 48px, full width on mobile when alone in a row. Hero button row: flex, gap 16px, centered on tablet.

| Variant | Use | Bg | Text | Border | Hover |
|---|---|---|---|---|---|
| Primary (dark bg) | "Contact Me" (header), CTA, "Download My Resume ↓" | `--white` | `--ink-950` | `--white` | bg `--ink-950`, text `--white`, border `--ink-950` |
| Ghost (dark bg) | "Explore My Work" | transparent | `--white` | `--white` | bg `--white`, text `--ink-950`, sheen sweep |
| Outline (light bg) | "Explore All Services" | transparent | `--blue-600` | `--blue-600` `[I]` | text `--blue-700`, sheen sweep |
| Link-button | inside cards | transparent | `--blue-600` | none, padding 0, margin 0 | `float` animation, transition 1.3s |

Link-button: right-aligned, label ends with ` →`, min-height 44px (touch target). Float `[P]`: `translateY(-4px)`, 1.3s `--ease-smooth`.
Form submit `[P]`: bg `--blue-600`, text `--white`, border `--blue-600`; hover bg/border `--blue-700`.
Colour transition `[P]`: 500ms `--ease-smooth`. Sheen `[P]` (ghost, outline only): skewed bar sweeps left to right on hover, colour `--shine-ink` (ghost) / `--shine-blue` (outline), hover-capable devices only.
Disabled `[P]`: opacity 60%, `not-allowed` cursor.

### 6.2 Eyebrow pill `[S]`
JetBrains Mono 500, 16px (mobile 14), padding `7px 20px`, radius `--r-pill`, 1px border `--glass-eyebrow-border`, gradient 110° `--glass-eyebrow-from` → `--glass-eyebrow-to`, text `--white`, `align-self: flex-start`.
On light sections the eyebrow is a pill: bg `--white`, 1px `--border-strong`, text `--blue-700`, same padding and radius. Centered when inside a Section Intro.

### 6.3 Card `[S]`
Bg `--white`, 1px `--border`, radius 5px, padding 16px, gap 12px, `--shadow-card`.
Hover: border `--border-strong`, `--shadow-card-hover`. Transition `[P]`: 500ms `--ease-smooth`.
Content order: icon image (24% width desktop, 18% mobile, auto tablet) → H2 title → Aldrich tagline → paragraph → divider (gap 0, `--border-strong` `[I]`) → link-button.
Divider `[P]`: sits flush above the link-button row (zero gap between them).
Project cards: same, tagline is the category in 12px Aldrich.

### 6.4 Icon node `[S]`
Circle, bg `--surface-100`, 1px `--border-strong`, icon `--blue-600`. Stroke icons: 24 viewBox, stroke 2, round caps/joins (Lucide style).
Hover (pointer devices only): bg and border `--blue-600`, icon `--white`, `--ring-node-hover`. Transition 0.6s (process) / 0.5s (strengths) ease.
Sizes: process node 36/40/44, icon 16/18/20 (6.5). Strengths node 32/34/36, icon 14/16/18 (6.6).

### 6.5 Process timeline `[S]`
Vertical list, node left, track 2px `rgba(74,85,101,0.20)` with `--blue-600` fill animating on scroll. Section bg `--surface-50`, text `--slate-600`, titles Space Grotesk 600 `--ink-900`.

| Var | Mobile | Tablet | Desktop |
|---|---|---|---|
| Node | 36 | 40 | 44 |
| Icon | 16 | 18 | 20 |
| Gap node→text | 14 | 16 | 18 |
| Step spacing | 24 | 28 | 32 |
| Title size | 18 | 20 | 24 |
| Text size | 14 | 16 | 18 |

### 6.6 Strengths grid `[S]`
2 columns at all sizes. Icon node + Space Grotesk 600 label `--ink-900`, line-height 1.3. Transparent bg.

| Var | Mobile | Tablet | Desktop |
|---|---|---|---|
| Node | 32 | 34 | 36 |
| Icon | 14 | 16 | 18 |
| Gap | 10 | 12 | 14 |
| Row gap | 14 | 16 | 18 |
| Column gap | 12 | 16 | 24 |
| Label size | 15 | 16 | 18 |

### 6.7 Tech carousel `[S]`
Bg `--ink-950`. Logos monochrome white, opacity .75; hover: color, opacity 1, scale 1.12 (300ms ease). Infinite linear scroll 40s, edge fade mask 8% / 92%. Viewport padding 12px 0 (8px ≤640).

| Var | Desktop | ≤1024 | ≤640 |
|---|---|---|---|
| Slot | 160 | 130 | 104 |
| Logo height | 44 | 38 | 30 |
| Logo max-width | 100 | 84 | 66 |

### 6.8 Code window `[S]`
Radius 0, 2px `--code-border`, bg `--code-bg`, JetBrains Mono 13.5px/1.7, text `--code-text`. Title bar height 2.7em with red/yellow/green dots (.82em). Tab bar height 2.6em, active tab text `--code-tab-text` with 2px `--code-accent` top inset.

### 6.9 Closing CTA `[S]`
Section bg: cover image, centered, no-repeat. Glass panel: gradient 110° `--glass-cta-from` → `--glass-cta-to`, 1px `--glass-cta-border`, radius 5px.
Panel padding: desktop `36px 32px` · tablet `28px 26px` · mobile `20px 18px`.
H2 `--white` left-aligned; paragraph `--on-glass` 18px Poppins; one Primary button.

### 6.10 Testimonials `[S]`
Carousel, 5 items: name, company, review. Short, plain, human quotes. Colors from tokens only.

### 6.11 Map (Contact) `[S]`
Full-width embedded map, height 560px. Section intro above: eyebrow "My Location", H2, lead (centered).

### 6.12 Header / Nav `[P]`
- **Position and size:** fixed top, full width, z above content. Height 72px (tablet and up), 64px mobile. Inner content max 1200px, padding `20 / 32 / 40px` (mobile / tablet / desktop).
- **Scroll states:** at the top of the page the Header is transparent with a transparent bottom border, so it blends into the hero banner. After scrolling more than 8px: bg `--blue-900` at 85% opacity, `backdrop-filter: blur(8px)`, 1px bottom border `--glass-eyebrow-border`. Transition 300ms `--ease-smooth`. While the mobile menu is open the Header is solid `--blue-900` with the border.
- **Desktop layout (≥1025px):** 3-column grid `1fr auto 1fr`. Logo left, nav centered, Primary button right.
- **Logo:** image `public/images/logo-header.png` (white wordmark, no tagline, for dark backgrounds). Height 36px mobile, 40px tablet and up. Links to `/`. The original logo with tagline is for light backgrounds only.
- **Links:** Poppins 400, 16px, `--surface-50`, gap 32px, min-height 44px, never wrap. Hover/active: `--white`, 2px underline `--blue-600`, offset 6px.
- **Items:** Home · Services · About · Portfolio · Resources, then the CTA. Data lives in `nav.ts`.
- **Services:** the label is a link to `/services`. A separate chevron button (32px wide, 44px tall) toggles the dropdown. Dropdown has exactly three items: Web Development, Mobile App Development, AI & LLM Solutions. "All Services" is not in the dropdown.
- **Resources:** a disclosure button with chevron. Dropdown items: FAQs, Schedule Consultation.
- **Dropdown panel:** bg `--blue-900`, 1px `--glass-eyebrow-border`, radius 5px, `--shadow-card-hover`, min-width 256px and grows to fit the longest item. Items: Poppins 400 16px, `--surface-50`, min-height 44px, padding `0 16px`, no line breaks. Item hover/active: bg `--glass-eyebrow-from`, text `--white`. Opens on mouse hover and on click / Enter / Space. Closes on Escape, outside click or focus leaving. Fade and 4px slide, 300ms `--ease-smooth`.
- **CTA:** one Primary button, label from `nav.ts` ("Contact Me").
- **Mobile (below 1025px, tablet included):** 24px stroke hamburger (44px target). Full-width panel under the Header, bg `--blue-900`, top border `--glass-eyebrow-border`, padding `32px 20px` (tablet `32px 32px`), scrolls if taller than the screen. Links stacked, gap 24px. Groups are accordions. The Services row is a link plus a separate chevron button. Primary button at the bottom, full width. Focus is trapped inside the panel, Escape closes it, page scroll is locked while open, and it closes on navigation.

### 6.13 Footer `[P]`
- **Surface:** bg `--ink-950`, text `--code-text`. Padding `64px 40px 32px` (tablet `64 32 32`, mobile `48 20 24`). Inner content max 1200px. Sits at the bottom of the page even on short pages.
- **Desktop layout (≥1025px):** 12-column grid. Left, 5 columns: brand block. Right, 7 columns: three equal columns Pages, Services, Contact. Gap 32px between the two sides.
- **Tablet:** brand block full width on top, then Pages, Services, Contact as 3 columns. **Mobile:** everything in 1 column. Gap between blocks 48px, between columns 32px.
- **Brand block:** logo image `logo-header.png`, height 56px mobile / 64px tablet / 80px desktop, then the positioning statement under it (Poppins 400, 18px mobile / 20px tablet and up, line-height 1.6, `--surface-50`, max-width 28rem). Statement copy lives in `site.ts` (`positioning`), max 20 words (CONTENT.md), pending owner approval.
- **Link columns:** headings (`h2`) Space Grotesk 600 18px `--surface-50`. Links Poppins 400 14px `--code-text`, min-height 32px, hover `--code-accent`. Pages: Home, About, Portfolio, FAQs, Schedule Consultation, Contact. Services: Web Development, Mobile App Development, AI & LLM Solutions. Data lives in `nav.ts`.
- **Contact column:** email (`mailto:`), phone (`tel:`), location. Each with a 16px stroke icon, same link style. Data lives in `site.ts`.
- **Bottom bar:** margin-top 48px, padding-top 24px, 1px top border `--code-border`. Left: copyright "© 2026 Aazib Ali. All rights reserved." and the Privacy Policy link. Right: 16px coffee icon and "Built with Next.js, Tailwind CSS and a lot of coffee." All in JetBrains Mono 400 13px `--code-title`, link hover `--code-accent`. Stacks vertically below 768px.
- **Socials:** icons 20px stroke, `--code-text`, hover `--code-accent`. Hidden until real links exist in `site.ts`. lucide-react has no brand icons, so inline SVGs are used.

### 6.14 Forms `[P]`
- Container: card style, padding 32px (mobile 20px).
- Label: JetBrains Mono 500, 14px, `--ink-900`, 6px above field.
- Input/textarea: bg `--white`, 1px `--border-strong`, radius 4px, padding `12px 16px`, Poppins 400 16px, text `--ink-900`, placeholder `--slate-600` at 60%. Textarea min-height 140px, vertical resize only.
- Focus: border `--blue-600` + `--ring-field-focus` (`0 0 0 3px rgba(42,91,176,0.12)`). The global `:focus-visible` outline stays on (accessibility).
- Error: border + message `--error`. Success: border + message `--success`. Messages Poppins 400 13px, 6px below the field. No focus ring on error/success.
- Disabled: opacity 60%, `not-allowed` cursor.
- Field gap 16px.

### 6.15 Section intro `[P]`
Eyebrow (light pill) + H2 section + lead paragraph, all centered (see alignment rules). Gap between the three 16px. Max width 768px, centered. Space below the intro before the section content: 24px mobile · 32px tablet · 40px desktop. Dark-section variant (white H2, white eyebrow pill) is not defined yet: add it here when the carousel or CTA needs it.

---

## 7. MOTION

| Item | Value | Tag |
|---|---|---|
| Carousel logos | 300ms ease | `[S]` |
| Strength node | 500ms ease | `[S]` |
| Process node | 600ms ease | `[S]` |
| Link-button | float animation, 1.3s | `[S]` |
| Link-button float distance | `translateY(-4px)`, `--ease-smooth` | `[P]` |
| Button colour hover | 500ms `--ease-smooth` | `[P]` |
| Button sheen (ghost, outline) | 1000ms in, 500ms out, `--ease-smooth`, hover-capable devices only | `[P]` |
| Card hover | 500ms `--ease-smooth` | `[P]` |
| Form field focus | 300ms `--ease-smooth` | `[P]` |
| Header scroll state, nav dropdown, nav and footer link colour | 300ms `--ease-smooth` | `[P]` |
| Scroll reveal | process + strengths only, JS-enabled | `[S]` |
| Scroll reveal values | 600ms `--ease-smooth`, fade + `translateY(16px)`, 0.15 threshold, plays once. Content is visible by default and hidden only when below the fold. | `[P]` |
| `prefers-reduced-motion: reduce` | disable carousel, reveals, float, sheen | `[P]` |

No parallax, bounce, or auto-playing video.

---

## 8. CONTENT & COPY

- Voice: first person, direct, confident. `[S]`
- Headlines: Title Case, benefit-led. `[S]`
- Taglines: short, end with a period ("Your Website, Built to Perform."). `[S]`
- Buttons: Title Case, 2–5 words. Card links end with ` →`; downloads end with ` ↓`. `[S]`
- Header button label: "Contact Me". `[P]`
- Services names: Web Development · Mobile App Development · AI & LLM Solutions. Use `&`, not "and". `[S]`
- Apostrophes: always typographic `’` (the source mixes `’` and `'`). `[P]`
- Eyebrows: short, 2–4 words ("Open For Freelance", "A Bit About Me", "My Journey", "My Location", "Let’s Connect"). `[S]`
- Location: Islamabad, Pakistan. Contact line uses Aldrich. `[S]`
- Footer "built with" line is a deliberate light-tone exception (owner request). `[P]`

---

## 9. ACCESSIBILITY `[P]`

- `--slate-600` and `--ink-900` on `--surface-50/100/white` pass WCAG AA. Never put `--blue-600` text on `--blue-900`.
- `:focus-visible`: 2px outline `--blue-600`, offset 2px (on dark surfaces such as the Header and Footer: `--white`).
- `lang="en"`, `aria-label` on regions and nav landmarks, `aria-hidden` on decorative icons, real alt text on logos. Dropdown triggers use `aria-expanded` and `aria-controls`; the current page link uses `aria-current="page"`.
- Body text never below 13px. Touch targets at least 44px for header and mobile nav controls; footer links at least 32px.
- Header is transparent at the top, so every page needs a dark hero behind it.

---

## 10. NEVER

1. Never add colors, fonts, radii, shadows or spacing outside this file.
2. Never use Space Grotesk for body text or Poppins for headings.
3. Never use radius other than 0 (code window only), 4, 5, 9999, 50%.
4. Never use `#000`, default framework blues, or emoji icons.
5. Never left-align section intros or center card paragraphs (see alignment rules).
6. Never use shadows heavier than `--shadow-card-hover`.
7. Never style per page. Change tokens, not components.
8. Never skip the tablet and mobile variants.
9. Never change `[S]` values without explicit approval.

---

## 11. AGENT CHECKLIST

Before finishing any task, confirm:
1. Every color is a token from Section 2.
2. Every text style matches a row in Section 3.
3. Spacing matches Section 4 for all three breakpoints.
4. Components match Section 6 exactly (including hover and focus).
5. Copy follows Section 8.
6. No `[S]` value was altered.

---

## 12. STILL UNCONFIRMED (NEEDS YOUR INPUT)

- Original logo with tagline (for light backgrounds). The white header variant is in `public/images/logo-header.png`.
- Footer positioning text approval (draft in `site.ts`) and social links
- Booking link for "Schedule Consultation" (Calendly or Cal.com)
- Whether mobile card grid is 1 column (assumed)
`````
`````

- **STATE.md mein maine kya maana:** Button, Card, Eyebrow, IconNode, SectionIntro `[x]` hain (preview approve aur build pass). Header, MobileNav, Footer `[~]` hain, kyunki scroll-header, Services link aur Footer ke baad full build result tumne paste nahi kiya. Pass ho jaye to `[x]` bol dena.
- **Footer logo/text diff:** DESIGN.md 6.13 mein wahi spec hai (logo 56/64/80px, Poppins 400 text). Agar wo diff abhi apply nahi kiya, pehle kar lo, warna code aur doc alag ho jayenge.
- **Dhyan:** `PROJECT.md`, `AGENTS.md` aur `CLAUDE.md` mein abhi `/work` aur purana nav likha hai. STATE.md ke Open Questions mein note kar diya hai, jab bologe tab unka diff bana dunga.