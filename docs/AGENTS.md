# AGENTS.md — aazib-dev

This file is for any AI coding agent (Claude Code, Cursor, Copilot, Codex, Gemini, etc.).

## Read first, in this order

1. `CLAUDE.md`: stack, folder structure, code rules, workflow. **It applies to every agent, not only Claude.**
2. `docs/DESIGN.md`: the single source of truth for all UI (colors, type, spacing, components, copy).
3. `TODO.md`: current tasks.
4. `CONTENT.md`: copy and tone of voice.
5. `PROJECT.md`: what the site is, pages, and features.

If any of these conflict: **DESIGN.md wins for visuals, CLAUDE.md wins for code, the user wins over both.**

## Project in one line

Portfolio site for Aazib Ali, freelance developer in Islamabad, Pakistan (web, mobile, AI/LLM). Next.js App Router + TypeScript + Tailwind v4, deployed on Vercel.

## Hard rules (short version)

- Use **pnpm** only.
- **No raw hex, no arbitrary Tailwind values, no default Tailwind palette colors.** Tokens from `src/styles/tokens.css` only.
- **All copy lives in `src/data/`.** Never hardcode text in components.
- **Pages only compose sections.** Reusable primitives live in `src/components/ui/`.
- **Server Components by default.** `"use client"` only for interactivity.
- **Mobile-first.** Always build mobile, tablet, and desktop variants.
- **Never change `[S]` values in DESIGN.md** without explicit user approval.
- Never add a UI library, CMS, or database without asking.
- Never commit secrets or `.env.local`.

## Before you start any task

1. Read the files above.
2. Confirm which section or feature the task covers. Do one at a time.
3. Check whether a `ui/` primitive or `data/` file already exists. Reuse it.
4. If a value is missing from DESIGN.md, ask. Do not guess.

## Before you finish any task

Run all three. They must pass:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Then:
- Check 375px, 768px, and 1280px widths, plus hover and focus states.
- Update `TODO.md`.
- If a design value changed, update `docs/DESIGN.md` in the same change.
- Summarize what you changed and which files you touched. Do not modify files outside the task's scope.

## Scope and safety

- Do not delete, rename, or rewrite files unrelated to the task.
- Do not run destructive commands (`rm -rf`, `git reset --hard`, force pushes) without asking.
- Do not install packages without saying which and why.
- Do not change deployment, environment, or Vercel settings.
- Treat `.env*` files as secret. Never print or log their contents.

## Definition of done

- Matches DESIGN.md exactly (tokens, type, spacing, components, copy).
- Responsive at all three breakpoints.
- Accessible: semantic HTML, focus states, alt text, reduced-motion respected.
- Lint, type check, and build all pass.
- No `console.log`, no unused code, no TODO comments left behind.