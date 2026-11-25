# Graph Report - aazib-dev  (2026-11-25)

## Corpus Check
- 44 files · ~10,078 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .example 1, .ico 1)

## Summary
- 139 nodes · 132 edges · 39 communities (9 shown, 30 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8fd43410`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- devDependencies
- next
- scripts
- allowBuilds
- nav.ts
- layout.tsx
- clsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `next` - 8 edges
3. `scripts` - 5 edges
4. `eslint` - 3 edges
5. `eslint-config-next` - 3 edges
6. `clsx` - 3 edges
7. `tailwind-merge` - 3 edges
8. `allowBuilds` - 3 edges
9. `Site` - 2 edges
10. `site` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (39 total, 30 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.12
Nodes (23): dependencies, embla-carousel-react@^8.6.0, @hookform/resolvers@^7.0.8, lucide-react@^1.77.0, motion@^14.14.0, react@19.3.0, react-dom@19.3.0, react-hook-form@^7.92.0 (+15 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "devDependencies"
Cohesion: 0.11
Nodes (18): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.6, tailwindcss@4.3.3, @tailwindcss/turbopack@4.3.3, @types/node@^20, @types/react@^19 (+10 more)

### Community 3 - "next"
Cohesion: 0.20
Nodes (3): nextConfig, next@16.4.6, next

### Community 5 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 6 - "allowBuilds"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 34 - "nav.ts"
Cohesion: 0.50
Nodes (3): headerCta, headerLinks, NavLink

### Community 40 - "layout.tsx"
Cohesion: 0.16
Nodes (10): metadata, Site, site, SocialLink, aldrich, fontVariables, jetBrainsMono, poppins (+2 more)

### Community 42 - "clsx"
Cohesion: 0.33
Nodes (4): clsx@^2.1.1, tailwind-merge@^3.7.1, clsx, tailwind-merge

## Knowledge Gaps
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `package.json`, `layout.tsx`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.11594202898550725 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `package.json` to `clsx`, `next`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._