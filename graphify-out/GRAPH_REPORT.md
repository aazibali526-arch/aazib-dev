# Graph Report - aazib-dev  (2026-11-25)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 123 nodes · 105 edges · 43 communities (7 shown, 36 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2888ffa3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `next` - 5 edges
3. `scripts` - 5 edges
4. `eslint` - 3 edges
5. `eslint-config-next` - 3 edges
6. `allowBuilds` - 3 edges
7. `clsx@^2.1.1` - 2 edges
8. `embla-carousel-react@^8.6.0` - 2 edges
9. `@hookform/resolvers@^7.0.8` - 2 edges
10. `lucide-react@^1.77.0` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (43 total, 36 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (27): dependencies, clsx@^2.1.1, embla-carousel-react@^8.6.0, @hookform/resolvers@^7.0.8, lucide-react@^1.77.0, motion@^14.14.0, react@19.3.0, react-dom@19.3.0 (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (13): devDependencies, tailwindcss@4.3.3, @tailwindcss/turbopack@4.3.3, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5, tailwindcss (+5 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (6): nextConfig, next@16.4.6, next, geistMono, geistSans, metadata

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.6, eslint, eslint-config-next

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

## Knowledge Gaps
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Community 3` to `Community 0`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10052910052910052 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Community 2` to `Community 0`, `Community 4`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._