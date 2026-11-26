# Graph Report - aazib-dev  (2026-11-26)

## Corpus Check
- 49 files · ~15,635 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 204 nodes · 360 edges · 26 communities (7 shown, 19 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a3492e8f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- MobileNav.tsx
- allowBuilds
- app/page.tsx
- cn
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 27 edges
2. `compilerOptions` - 16 edges
3. `next` - 14 edges
4. `Button()` - 11 edges
5. `react` - 11 edges
6. `Header()` - 10 edges
7. `NavDropdown()` - 10 edges
8. `Home()` - 9 edges
9. `MobileNav()` - 7 edges
10. `isActivePath()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `Header()`  [EXTRACTED]
  src/app/layout.tsx → src/components/layout/Header.tsx
- `Home()` --calls--> `Button()`  [EXTRACTED]
  src/app/page.tsx → src/components/ui/Button.tsx
- `Home()` --calls--> `Card()`  [EXTRACTED]
  src/app/page.tsx → src/components/ui/Card.tsx
- `MobileNav()` --calls--> `isActivePath()`  [EXTRACTED]
  src/components/layout/MobileNav.tsx → src/lib/navigation.ts
- `DesktopNav()` --calls--> `NavDropdown()`  [EXTRACTED]
  src/components/layout/DesktopNav.tsx → src/components/layout/NavDropdown.tsx

## Import Cycles
- None detected.

## Communities (26 total, 19 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (49): eslintConfig, dependencies, clsx@^2.1.1, embla-carousel-react@^8.6.0, @hookform/resolvers@^7.0.8, lucide-react@^1.77.0, motion@^14.14.0, next@16.4.6 (+41 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 3 - "MobileNav.tsx"
Cohesion: 0.14
Nodes (10): nextConfig, lucide-react, next, NavDropdown(), NavDropdownProps, navLinkActive, navLinkBase, headerLinks (+2 more)

### Community 6 - "allowBuilds"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 26 - "app/page.tsx"
Cohesion: 0.13
Nodes (25): react, Home(), previewCards, previewStrengths, Reveal(), RevealProps, SectionIntro(), SectionIntroProps (+17 more)

### Community 28 - "cn"
Cohesion: 0.17
Nodes (19): DesktopNav(), getScrolled(), getServerScrolled(), Header(), subscribe(), MobileNav(), Button(), ButtonAsButtonProps (+11 more)

### Community 40 - "layout.tsx"
Cohesion: 0.12
Nodes (20): metadata, RootLayout(), Footer(), FooterGroup(), FooterGroupProps, FooterLinks, footerLinks, headerCta (+12 more)

## Knowledge Gaps
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `MobileNav.tsx` to `package.json`, `layout.tsx`, `cn`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._
- **Why does `react` connect `app/page.tsx` to `package.json`, `MobileNav.tsx`, `cn`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `MobileNav.tsx` to `package.json`, `app/page.tsx`, `layout.tsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `MobileNav.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14333333333333334 - nodes in this community are weakly interconnected._
- **Should `app/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1265597147950089 - nodes in this community are weakly interconnected._