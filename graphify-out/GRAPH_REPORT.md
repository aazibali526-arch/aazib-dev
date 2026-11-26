# Graph Report - aazib-dev  (2026-11-26)

## Corpus Check
- 50 files · ~15,820 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 208 nodes · 379 edges · 27 communities (9 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a937ea45`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- utils.ts
- MobileNav.tsx
- Button.tsx
- allowBuilds
- app/page.tsx
- Header.tsx
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 27 edges
2. `compilerOptions` - 16 edges
3. `next` - 14 edges
4. `Button()` - 13 edges
5. `react` - 11 edges
6. `Home()` - 10 edges
7. `Header()` - 10 edges
8. `NavDropdown()` - 10 edges
9. `Eyebrow()` - 8 edges
10. `MobileNav()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `InputProps` --references--> `FieldStatus`  [EXTRACTED]
  src/components/ui/Input.tsx → src/components/ui/Field.tsx
- `TextareaProps` --references--> `FieldStatus`  [EXTRACTED]
  src/components/ui/Textarea.tsx → src/components/ui/Field.tsx
- `FooterGroupProps` --references--> `NavLink`  [EXTRACTED]
  src/components/layout/Footer.tsx → src/data/nav.ts
- `Field()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/Field.tsx → src/lib/utils.ts
- `Input()` --calls--> `Field()`  [EXTRACTED]
  src/components/ui/Input.tsx → src/components/ui/Field.tsx

## Import Cycles
- None detected.

## Communities (27 total, 18 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (49): eslintConfig, dependencies, clsx@^2.1.1, embla-carousel-react@^8.6.0, @hookform/resolvers@^7.0.8, lucide-react@^1.77.0, motion@^14.14.0, next@16.4.6 (+41 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "utils.ts"
Cohesion: 0.33
Nodes (9): react, Field(), fieldControlClasses, FieldProps, FieldStatus, fieldStatusClasses, messageClasses, InputProps (+1 more)

### Community 3 - "MobileNav.tsx"
Cohesion: 0.14
Nodes (10): nextConfig, lucide-react, next, NavDropdown(), NavDropdownProps, navLinkActive, navLinkBase, headerLinks (+2 more)

### Community 4 - "Button.tsx"
Cohesion: 0.32
Nodes (7): ButtonAsButtonProps, ButtonAsLinkProps, ButtonOwnProps, ButtonProps, ButtonVariant, isInternal(), variants

### Community 6 - "allowBuilds"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 26 - "app/page.tsx"
Cohesion: 0.15
Nodes (23): Home(), previewCards, previewStrengths, Hero(), Reveal(), RevealProps, SectionIntro(), SectionIntroProps (+15 more)

### Community 28 - "Header.tsx"
Cohesion: 0.15
Nodes (15): metadata, RootLayout(), DesktopNav(), Footer(), FooterGroup(), getScrolled(), getServerScrolled(), Header() (+7 more)

### Community 40 - "layout.tsx"
Cohesion: 0.18
Nodes (13): FooterGroupProps, HeroContent, homeHero, FooterLinks, footerLinks, headerCta, NavItem, NavLink (+5 more)

## Knowledge Gaps
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `MobileNav.tsx` to `package.json`, `Button.tsx`, `layout.tsx`, `app/page.tsx`, `Header.tsx`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._
- **Why does `react` connect `utils.ts` to `package.json`, `MobileNav.tsx`, `Button.tsx`, `app/page.tsx`, `Header.tsx`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `MobileNav.tsx` to `package.json`, `app/page.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `MobileNav.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14333333333333334 - nodes in this community are weakly interconnected._
- **Should `Header.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._