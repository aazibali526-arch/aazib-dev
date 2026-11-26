# Graph Report - aazib-dev  (2026-11-26)

## Corpus Check
- 49 files · ~13,422 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 195 nodes · 329 edges · 35 communities (13 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa1316a8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dependencies
- compilerOptions
- devDependencies
- MobileNav.tsx
- package.json
- scripts
- allowBuilds
- eslint.config.mjs
- @hookform/resolvers@^7.0.8
- cn
- Button.tsx
- IconNode.tsx
- utils.ts
- layout.tsx
- clsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 25 edges
2. `compilerOptions` - 16 edges
3. `next` - 13 edges
4. `Button()` - 11 edges
5. `NavDropdown()` - 10 edges
6. `react` - 10 edges
7. `Home()` - 9 edges
8. `MobileNav()` - 7 edges
9. `isActivePath()` - 7 edges
10. `DesktopNav()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `Header()`  [EXTRACTED]
  src/app/layout.tsx → src/components/layout/Header.tsx
- `DesktopNav()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/DesktopNav.tsx → src/lib/utils.ts
- `Header()` --calls--> `Button()`  [EXTRACTED]
  src/components/layout/Header.tsx → src/components/ui/Button.tsx
- `MobileNav()` --calls--> `Button()`  [EXTRACTED]
  src/components/layout/MobileNav.tsx → src/components/ui/Button.tsx
- `MobileNav()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/MobileNav.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (35 total, 22 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, motion@^14.14.0, next@16.4.6, react@19.3.0, react-dom@19.3.0, react-hook-form@^7.92.0, tailwind-merge@^3.7.1, zod@^4.6.7 (+5 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, tailwindcss@4.3.3, @tailwindcss/turbopack@4.3.3, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5, tailwindcss (+5 more)

### Community 3 - "MobileNav.tsx"
Cohesion: 0.12
Nodes (15): nextConfig, next, DesktopNav(), Header(), MobileNav(), NavDropdown(), NavDropdownProps, navLinkActive (+7 more)

### Community 4 - "package.json"
Cohesion: 0.22
Nodes (8): embla-carousel-react@^8.6.0, resend@^6.39.0, name, packageManager, private, version, embla-carousel-react, resend

### Community 5 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 6 - "allowBuilds"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 10 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.6, eslint, eslint-config-next

### Community 26 - "cn"
Cohesion: 0.18
Nodes (19): Home(), previewCards, previewStrengths, Reveal(), RevealProps, SectionIntro(), SectionIntroProps, Button() (+11 more)

### Community 28 - "Button.tsx"
Cohesion: 0.32
Nodes (7): ButtonAsButtonProps, ButtonAsLinkProps, ButtonOwnProps, ButtonProps, ButtonVariant, isInternal(), variants

### Community 31 - "IconNode.tsx"
Cohesion: 0.33
Nodes (5): lucide-react@^1.77.0, lucide-react, IconNodeProps, IconNodeVariant, sizes

### Community 32 - "utils.ts"
Cohesion: 0.33
Nodes (9): react, Field(), fieldControlClasses, FieldProps, FieldStatus, fieldStatusClasses, messageClasses, InputProps (+1 more)

### Community 40 - "layout.tsx"
Cohesion: 0.16
Nodes (11): metadata, RootLayout(), Site, site, SocialLink, aldrich, fontVariables, jetBrainsMono (+3 more)

## Knowledge Gaps
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `MobileNav.tsx` to `dependencies`, `package.json`, `layout.tsx`, `cn`, `Button.tsx`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `react` connect `utils.ts` to `dependencies`, `MobileNav.tsx`, `package.json`, `cn`, `Button.tsx`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `MobileNav.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `utils.ts`, `MobileNav.tsx`, `Button.tsx`, `IconNode.tsx`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._