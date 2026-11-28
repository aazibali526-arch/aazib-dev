# Graph Report - aazib-dev  (2026-11-28)

## Corpus Check
- 61 files · ~18,665 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 283 nodes · 621 edges · 15 communities (10 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `30c5c70b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- utils.ts
- MobileNav.tsx
- Button.tsx
- allowBuilds
- lucide-react
- TestimonialCarousel.tsx
- app/page.tsx
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 35 edges
2. `Button()` - 17 edges
3. `react` - 17 edges
4. `compilerOptions` - 16 edges
5. `next` - 14 edges
6. `SectionIntro()` - 13 edges
7. `lucide-react` - 13 edges
8. `Section()` - 12 edges
9. `NavLink` - 11 edges
10. `Home()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `CodeWindow()`  [EXTRACTED]
  src/app/page.tsx → src/components/sections/CodeWindow.tsx
- `CodeWindowEditor()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/CodeWindowEditor.tsx → src/lib/utils.ts
- `Hero()` --calls--> `Eyebrow()`  [EXTRACTED]
  src/components/sections/Hero.tsx → src/components/ui/Eyebrow.tsx
- `Services()` --calls--> `Section()`  [EXTRACTED]
  src/components/sections/Services.tsx → src/components/shared/Section.tsx
- `Services()` --calls--> `SectionIntro()`  [EXTRACTED]
  src/components/sections/Services.tsx → src/components/shared/SectionIntro.tsx

## Import Cycles
- None detected.

## Communities (15 total, 5 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (49): eslintConfig, dependencies, clsx@^2.1.1, embla-carousel-react@^8.6.0, @hookform/resolvers@^7.0.8, lucide-react@^1.77.0, motion@^14.14.0, next@16.4.6 (+41 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "utils.ts"
Cohesion: 0.12
Nodes (30): react, Process(), ProcessList(), ProcessListProps, Strengths(), Reveal(), RevealProps, backgrounds (+22 more)

### Community 3 - "MobileNav.tsx"
Cohesion: 0.11
Nodes (20): contentSecurityPolicy, nextConfig, securityHeaders, next, DesktopNav(), getScrolled(), getServerScrolled(), Header() (+12 more)

### Community 4 - "Button.tsx"
Cohesion: 0.14
Nodes (16): accent, ButtonAsButtonProps, ButtonAsLinkProps, ButtonOwnProps, ButtonProps, ButtonVariant, isInternal(), variants (+8 more)

### Community 6 - "allowBuilds"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 16 - "lucide-react"
Cohesion: 0.16
Nodes (20): lucide-react, CodeWindow(), CodeWindowEditor(), CodeWindowEditorProps, getAutocomplete(), getCodeLocation(), CodeWindowSelection, getTokenTone() (+12 more)

### Community 24 - "TestimonialCarousel.tsx"
Cohesion: 0.16
Nodes (15): Control(), ControlProps, TestimonialCarousel(), TestimonialCarouselProps, processSection, ProcessStep, processSteps, Strength (+7 more)

### Community 26 - "app/page.tsx"
Cohesion: 0.14
Nodes (22): Home(), FooterGroupProps, ClosingCTA(), Hero(), HeroProps, Services(), TechCarousel(), Testimonials() (+14 more)

### Community 40 - "layout.tsx"
Cohesion: 0.12
Nodes (18): metadata, RootLayout(), Footer(), FooterGroup(), FooterLinks, footerLinks, NavItem, privacyLink (+10 more)

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `utils.ts` to `package.json`, `MobileNav.tsx`, `Button.tsx`, `lucide-react`, `TestimonialCarousel.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._
- **Why does `next` connect `MobileNav.tsx` to `package.json`, `layout.tsx`, `Button.tsx`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `utils.ts` to `MobileNav.tsx`, `Button.tsx`, `layout.tsx`, `lucide-react`, `TestimonialCarousel.tsx`, `app/page.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Should `utils.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1207897793263647 - nodes in this community are weakly interconnected._
- **Should `MobileNav.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10634920634920635 - nodes in this community are weakly interconnected._