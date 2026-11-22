# DESIGN.md — Aazib Portfolio (v2 · Final)

> **Single source of truth for all UI.** Agents must follow it exactly.
> Never invent a color, font, size, radius, shadow or spacing value that is not listed here. If a value is missing, stop and add it here first.

**Tag legend** (every rule is tagged so you know what is locked):
- `[S]` Sourced: extracted exactly from the Elementor exports (Home 711, About 714, Contact 720).
- `[I]` Inferred: derived from consistent usage in the exports.
- `[P]` Proposed: not in the exports, designed to match the system. Change here before changing code.

Untagged rules in a `[S]` section inherit its tag.

---

## 1. Brand & Vibe `[S]`

Freelance developer portfolio (web, mobile, AI). Calm, precise, technical. Dark navy hero with dot-grid, cool-gray light sections, terminal/code details, mono labels. Never playful, never decorative.

Keywords: engineered, minimal, blue-on-gray, terminal-inspired, high contrast.

---

## 2. Tokens

Use these as CSS variables. Never hardcode hex values in components.

```css
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
  --font-display: 'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: 'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  --font-tag: 'Aldrich', system-ui, sans-serif;

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
}
```

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

## 3. Typography `[S]`

Load via Google Fonts, `display=swap`: Space Grotesk 600/700, Poppins 400, JetBrains Mono 400/500, Aldrich 400.

**Font roles. Never swap:**
- Space Grotesk → all headings and strength labels
- Poppins 400 → all paragraphs
- JetBrains Mono 500 → eyebrows, buttons, link-buttons, code UI
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

### Alignment rules `[S]`
- **Section intro** (eyebrow + H2 + lead): centered.
- **Hero**: left on desktop, centered on tablet and mobile (H1, lead, buttons).
- **Card paragraphs**: justified. Card titles and taglines: left.
- **CTA glass panel** and **Contact "Let's Connect" intro**: left-aligned (`start`).
- Tagline sits under card title with `margin-top: -12px`.

---

## 4. Layout

### Breakpoints `[S]`
| Name | Range |
|---|---|
| Mobile | ≤ 767px (base) |
| Tablet | 768–1024px |
| Desktop | ≥ 1025px |
| Carousel extra | ≤ 640px |

### Content width `[P]`
Max **1200px**, centered. Section backgrounds full-bleed.

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

Hero direction: row on desktop, column on tablet and below.

### Gaps `[S]`
Between blocks 16px · inside cards 12px · card padding 16px · grid gap 16px.

### Card grids `[S]`/`[P]`
Desktop 3 columns · tablet 2 `[S]` · mobile 1 `[P]`. Services: 3 cards. Projects: 6 cards (3×2).

### Section background order `[S]`
Hero (navy) → Services `--surface-50` → Tech carousel `--ink-950` → Work `--surface-100` → Process `--surface-50` → Strengths `--surface-100` → Testimonials `--surface-100` → Closing CTA (cover image + glass panel).

About: Hero → `--surface-50` content (+ timeline). Contact: Hero → intro/map → `--surface-50` form + strengths.

---

## 5. Hero Background `[S]`

Used on every page hero (class `.hero`). Tokenized, no `!important` needed in code (Elementor needs it).

```css
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
```

---

## 6. Components

### 6.1 Buttons `[S]` (colors, border, radius) · `[P]` (size)
All: JetBrains Mono 500, **2px border, radius 4px**. Size `[P]`: padding `14px 28px`, min-height 48px, full width on mobile when alone in a row. Hero button row: flex, gap 16px, centered on tablet.

| Variant | Use | Bg | Text | Border | Hover |
|---|---|---|---|---|---|
| Primary (dark bg) | "Let's Work Together", CTA, "Download My Resume ↓" | `--white` | `--ink-950` | `--white` | bg `--ink-950`, text `--white`, border `--ink-950` |
| Ghost (dark bg) | "Explore My Work" | transparent | `--white` | `--white` | bg `--white`, text `--ink-950` |
| Outline (light bg) | "Explore All Services" | transparent | `--blue-600` | `--blue-600` `[I]` | text `--blue-700` |
| Link-button | inside cards | transparent | `--blue-600` | none, padding 0, margin 0 | `float` animation, transition 1.3s |

Link-button: right-aligned, label ends with ` →`.
Form submit `[P]`: bg `--blue-600`, text `--white`, border `--blue-600`; hover bg/border `--blue-700`.

### 6.2 Eyebrow pill `[S]`
JetBrains Mono 500, 16px (mobile 14), padding `7px 20px`, radius `--r-pill`, 1px border `--glass-eyebrow-border`, gradient 110° `--glass-eyebrow-from` → `--glass-eyebrow-to`, text `--white`, `align-self: flex-start`.
On light sections the eyebrow is plain text (no pill) in `--blue-700`.

### 6.3 Card `[S]`
Bg `--white`, 1px `--border`, radius 5px, padding 16px, gap 12px, `--shadow-card`.
Hover: border `--border-strong`, `--shadow-card-hover`.
Content order: icon image (24% width desktop, 18% mobile, auto tablet) → H2 title → Aldrich tagline → paragraph → divider (gap 0, `--border-strong` `[I]`) → link-button.
Project cards: same, tagline is the category in 12px Aldrich.

### 6.4 Icon node `[S]`
Circle, bg `--surface-100`, 1px `--border-strong`, icon `--blue-600`. Stroke icons: 24 viewBox, stroke 2, round caps/joins (Lucide style).
Hover (pointer devices only): bg and border `--blue-600`, icon `--white`, `--ring-node-hover`. Transition 0.6s (process) / 0.5s (strengths) ease.

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
- Fixed top, height 72px (64px mobile), bg `--blue-900` at 85% opacity, `backdrop-filter: blur(8px)`, 1px bottom border `--glass-eyebrow-border`.
- Logo: Space Grotesk 700, 20px, `--surface-50`.
- Links: JetBrains Mono 500, 16px, `--surface-50`, gap 32px. Hover/active: `--white`, 2px underline `--blue-600`, offset 6px.
- Right: one Primary button "Let's Work Together".
- Mobile: 24px stroke hamburger, full-width panel bg `--blue-900`, links stacked, gap 24px.

### 6.13 Footer `[P]`
- Bg `--ink-950`, text `--code-text`. Padding `64px 40px 32px` (tablet `64 32 32`, mobile `48 20 24`).
- 3 columns (brand + bio, links, contact), gap 32px; 1 column on mobile.
- Headings Space Grotesk 600 18px `--surface-50`. Links Poppins 400 14px `--code-text`, hover `--code-accent`.
- Bottom bar: 1px top border `--code-border`, copyright JetBrains Mono 400 13px `--code-title`.
- Social icons 20px stroke, `--code-text`, hover `--code-accent`.

### 6.14 Forms `[P]`
- Container: card style, padding 32px (mobile 20px).
- Label: JetBrains Mono 500, 14px, `--ink-900`, 6px above field.
- Input/textarea: bg `--white`, 1px `--border-strong`, radius 4px, padding `12px 16px`, Poppins 400 16px, text `--ink-900`, placeholder `--slate-600` at 60%. Textarea min-height 140px.
- Focus: border `--blue-600` + `0 0 0 3px rgba(42,91,176,0.12)`.
- Error: border + message `--error`. Success: border + message `--success`. Messages Poppins 400 13px.
- Field gap 16px.

---

## 7. Motion

| Item | Value | Tag |
|---|---|---|
| Carousel logos | 300ms ease | `[S]` |
| Strength node | 500ms ease | `[S]` |
| Process node | 600ms ease | `[S]` |
| Link-button | float animation, 1.3s | `[S]` |
| Scroll reveal | process + strengths only, JS-enabled | `[S]` |
| `prefers-reduced-motion: reduce` | disable carousel, reveals, float | `[P]` |

No parallax, bounce, or auto-playing video.

---

## 8. Content & Copy

- Voice: first person, direct, confident. `[S]`
- Headlines: Title Case, benefit-led. `[S]`
- Taglines: short, end with a period ("Your Website, Built to Perform."). `[S]`
- Buttons: Title Case, 2–5 words. Card links end with ` →`; downloads end with ` ↓`. `[S]`
- Services names: Web Development · Mobile App Development · AI & LLM Solutions. Use `&`, not "and". `[S]`
- Apostrophes: always typographic `’` (the source mixes `’` and `'`). `[P]`
- Eyebrows: short, 2–4 words ("Open For Freelance", "A Bit About Me", "My Journey", "My Location", "Let’s Connect"). `[S]`
- Location: Islamabad, Pakistan. Contact line uses Aldrich. `[S]`

---

## 9. Accessibility `[P]`

- `--slate-600` and `--ink-900` on `--surface-50/100/white` pass WCAG AA. Never put `--blue-600` text on `--blue-900`.
- `:focus-visible`: 2px outline `--blue-600`, offset 2px (on dark: `--white`).
- `lang="en"`, `aria-label` on regions, `aria-hidden` on decorative icons, real alt text on logos.
- Body text never below 13px. Touch targets at least 44px.

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

## 11. Agent Checklist

Before finishing any task, confirm:
1. Every color is a token from Section 2.
2. Every text style matches a row in Section 3.
3. Spacing matches Section 4 for all three breakpoints.
4. Components match Section 6 exactly (including hover and focus).
5. Copy follows Section 8.
6. No `[S]` value was altered.

---

## 12. Still Unconfirmed (needs your input)

- Real logo / brand mark
- Final nav items
- Footer text, links, socials
- Whether mobile card grid is 1 column (assumed)