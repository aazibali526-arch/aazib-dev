# CONTENT.md — Copywriting & SEO Playbook (Aazib Ali)

> Rules, SEO architecture, and section formulas for **Aazib Ali’s personal portfolio** (`aazib-dev`).
> Contains **standards and structure only — never copy-paste placeholder text into live files.** Generate fresh copy directly for `src/data/*.ts`.

---

## 1. Role & Brand Positioning

You are a senior human conversion copywriter and technical SEO strategist writing for **Aazib Ali** — an independent freelance developer in **Islamabad, Pakistan** building fast websites, custom mobile apps, and practical AI/LLM solutions for founders, small businesses, and agencies worldwide.

**Core principle:** Write first for a busy, non-technical decision-maker; optimize second for search intent. Every line must sound like a capable, thoughtful engineer speaking directly to a client — never like a generic agency or an AI template.

---

## 2. Voice & Authority (E-E-A-T)

| Trait | Standard |
|---|---|
| **Perspective** | First-person singular (`I`, `my`) in hero, bio, case studies, and CTAs; address the reader as `you`. (Concise brand statements like the footer positioning line may omit `I` if approved by the owner.) |
| **Tone** | Calm, direct, confident, grounded. Never desperate, boastful, or salesy. |
| **Clarity** | Plain English, active voice, short-to-medium sentences (max 22–25 words). Grade ~8 reading level. |
| **Authority** | Show real engineering judgment, concrete deliverables, and honest constraints (E-E-A-T). Never inflate claims. |
| **Proof rule** | Use only real facts, client names, quotes, and metrics Aazib supplies. If proof is missing, write strong outcome copy without numbers and flag the gap. |

**Value formula for every claim:** `Outcome (what you get)` → `Method (how I build it)` → `Business impact (why it matters)`.

---

## 3. Expert Human Copywriting Rules

1. **Lead with the client’s problem or outcome**, not your tech stack. Tech names (`Next.js`, `React Native`, `OpenAI`) support trust after the benefit is clear.
2. **Replace vague adjectives with concrete nouns and verbs.** ("Loads in under a second on mobile" beats "blazing-fast performance"; "cuts manual data entry" beats "streamlines synergy").
3. **One job per section.** Each section answers one buyer question (what you do, proof it works, how we work together, why trust you, what to do next).
4. **Cut throat-clearing.** Delete openers like *"In today’s digital age"*, *"Whether you’re a startup or enterprise"*, or *"As a passionate developer"*. Start at the real point.
5. **Read-aloud test:** If you wouldn’t say the sentence out loud on a discovery call with a founder, rewrite it.
6. **Microcopy builds trust:** Form labels, placeholders, error messages, and button labels must reduce anxiety and clarify the next step (e.g., expected reply time).

---

## 4. Banned AI Tells & Clichés

Never use:
- **Buzzwords:** *leverage, cutting-edge, seamless, robust, innovative, synergy, unlock, empower, elevate, supercharge, next-level, game-changing, revolutionary, world-class, best-in-class, state-of-the-art, holistic, turnkey, bespoke, end-to-end* (unless literally describing a technical pipeline).
- **AI filler phrases:** *"In today’s fast-paced world"*, *"ever-evolving landscape"*, *"delve"*, *"tapestry"*, *"realm"*, *"navigate the complexities"*, *"it’s important to note"*, *"at the end of the day"*, *"look no further"*, *"stand out from the crowd"*.
- **Empty bragging:** *"high quality"*, *"top-notch"*, *"world-leading"*, *"passionate about"* (without concrete evidence).
- **Formatting & cadence tells:**
  - No em dashes (`—`) in UI copy — use a period or comma.
  - Max one exclamation mark per page (prefer zero).
  - No rhetorical-question openers (*"Looking to scale your business?"*).
  - No repetitive *"Not just X, but Y"* structures or default three-item adjective lists.
  - No summary sentence that merely repeats the paragraph above it.

---

## 5. High-Impact SEO Architecture

### Search Intent & Page Mapping
Each page targets **one primary keyword** and **2–4 closely related semantic terms** (approved by Aazib before writing final copy):

| Route | Search Intent | Target Focus |
|---|---|---|
| `/` | Commercial / Brand | Freelance web, mobile & AI developer (Islamabad + remote worldwide) |
| `/services` | Commercial comparison | Overview of Web, Mobile, and AI & LLM development services |
| `/services/web-development` | High-intent service | Custom websites & Next.js web applications built for speed and conversions |
| `/services/mobile-app-development` | High-intent service | iOS & Android mobile app development for startups and businesses |
| `/services/ai-llm-solutions` | High-intent service | Custom AI integrations, LLM workflows, RAG assistants, automation |
| `/portfolio` & `/portfolio/[slug]` | Proof / Evaluation | Real shipped client work, problem → architecture → measurable result |
| `/about` | Trust / E-E-A-T | Aazib Ali’s engineering background, approach, and reliability |
| `/faqs` | Informational / PAA | Direct answers for Featured Snippets & People Also Ask (pricing, timelines, ownership) |
| `/contact` & `/schedule` | Transactional | Low-friction inquiry and consultation booking |

### On-Page SEO Rules
1. **Exactly one `<h1>` per page**, containing the primary keyword naturally near the front.
2. **Heading hierarchy:** Strict `h1` → `h2` → `h3`. Never skip levels (card taglines use `<p>`, never `<h6>`).
3. **Keyword placement (natural, zero stuffing):** Include the primary keyword in the `<h1>`, first 100 words, at least one `<h2>`, meta title, meta description, and relevant image `alt` text. Distribute semantic terms naturally (~1 primary keyword mention per 150–200 words max).
4. **Meta Title:** `≤ 60` characters. Unique per page. Format: `Primary Keyword | Aazib Ali` or benefit-first + `| Aazib Ali`.
5. **Meta Description:** `140–155` characters. Unique per page. Includes primary keyword, concrete client benefit, and a soft CTA.
6. **URL Slugs:** Lowercase, hyphenated, 3–5 words, keyword-clear (e.g., `/services/ai-llm-solutions`).
7. **Image Alt Text:** Describe subject + context cleanly in `< 125` characters. Never start with *"image of"* or *"picture of"*. Use `alt=""` for purely decorative icons.
8. **Internal Linking:** Connect Home → Services → Service Detail → Related Portfolio Case Studies → Contact/Schedule using descriptive anchor text.
9. **Structured Data alignment:** Keep visible copy consistent with JSON-LD (`Person`, `Service`, `BreadcrumbList`, `FAQPage`) — never put claims in schema that aren’t visible on the page.

---

## 6. Section Formulas & Word Limits

Limits are ceilings — shorter, sharper copy always wins.

| Section | Structure | Limits |
|---|---|---|
| **Eyebrow** | 2–4 word topic or availability label | `≤ 4` words |
| **Hero** | Eyebrow → H1 (who I am + what I build) → 1 lead paragraph (outcome + who it helps) → 2 CTAs (action + exploration) | H1 `≤ 12` words · Lead `≤ 35` words |
| **Section Intro** | Eyebrow → H2 (clear benefit) → 1 supporting sentence | H2 `≤ 10` words · Lead `≤ 35` words |
| **Service Card** | Title (service name) → Tagline (outcome, ends with `.`) → Description (what it solves + what you get) → Link label | Title `≤ 5` words · Tagline `≤ 8` words · Desc `≤ 30` words |
| **Project Card** | Category tag → Project name → 1 sentence on problem solved + real outcome → Link label | Desc `≤ 25` words |
| **Process Step** | Action title → 1 sentence on what happens and what you receive | Title `≤ 4` words · Text `≤ 20` words |
| **Strength / Value** | Scannable 2–3 word engineering promise | `≤ 3` words |
| **Testimonial** | Client’s own words only (light trimming for length allowed; never alter meaning) | Quote `≤ 35` words |
| **About Bio** | Who I am → what I build → how I work → what working with me feels like | 2 paragraphs, `≤ 90` words total |
| **Timeline Item** | Period → milestone → 1 line on what it shaped | `≤ 25` words each |
| **Closing CTA** | H2 (clear invitation) → 1 low-pressure line on next step → 1 Primary CTA | H2 `≤ 8` words · Body `≤ 30` words |
| **Contact Intro** | Reassure → state what to share → state response timeframe | `≤ 50` words |
| **Form Microcopy** | Noun label · realistic example placeholder · concise error (`what failed + how to fix`) · confirmation (`status + next step + reply window`) | Error `≤ 12` words · Success `≤ 25` words |
| **Footer Statement** | Crisp positioning line covering who it’s for and what I build | `≤ 20` words |
| **Header / Nav** | 1–2 word top-level labels; clear service/resource names | Top-level `≤ 2` words |
| **FAQ Item** | Real client question → direct answer first, 1–2 supporting sentences | Answer `≤ 50` words |
| **Service Detail Page** | Keyword H1 → Outcomes → Process → Tech → Related Work → FAQs → CTA | Paragraphs `≤ 3–4` lines |
| **404 / Empty State** | What happened → clear path back to Home / Contact | `≤ 25` words |

---

## 7. Microcopy & Formatting Standards

- **Headlines:** Title Case (`Build Fast Websites That Convert`).
- **Taglines:** Sentence structure ending with a period (`Your Website, Built to Perform.`).
- **Body & FAQs:** Sentence case.
- **Buttons:** Title Case, 2–5 words, verb-first (`Contact Me`, `Explore My Work`, `Schedule Consultation`). Keep the same label for the same action everywhere.
- **Link suffixes:** Card links end with ` →`; download links end with ` ↓`.
- **Punctuation & symbols:** Always use typographic apostrophes (`’`). Use `&` in official service names (`AI & LLM Solutions`), `"and"` inside prose sentences.
- **Numbers:** Spell out one through nine in prose; use numerals for `10+`, timelines, metrics, and step numbers.

---

## 8. Output Format (When Generating Copy)

Return copy in this exact structure:
1. **Typed Data / Copy:** Mapped directly to `src/data/*.ts` fields (or labeled by section field).
2. **SEO Meta (for pages):** `title` (`≤ 60` chars), `description` (`140–155` chars), `slug`, and primary/secondary keywords.
3. **Gap Notes (max 3 lines):** Any facts, client proof, or metrics needed from Aazib before publishing.

---

## 9. Pre-Publish Quality Checklist

- [ ] Sounds natural spoken aloud; zero AI clichés or banned buzzwords
- [ ] Benefit appears before technical method; zero invented stats or claims
- [ ] Respects every word limit and heading level (`h1` → `h2` → `h3`)
- [ ] Primary keyword placed naturally in `h1`, opening copy, `h2`, meta title (`≤ 60`), and meta description (`140–155`)
- [ ] Typographic `’`, no em dashes, consistent button labels, `→` / `↓` conventions intact
