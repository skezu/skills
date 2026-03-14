---
name: fdd-architecture
description: "Expert guide for implementing Feature-Driven Development (FDD) architecture in frontend projects (React/TypeScript). Use when: (1) Creating new features, (2) Refactoring or migrating a legacy folder structure to FDD, (3) Initializing a new project layout, (4) Reviewing whether code follows FDD principles. Enforces strict feature isolation, clear public APIs via index.ts barrel files, and scalable feature organization."
---

# Feature-Driven Development (FDD) Architecture

Organize code by **what it does**, not **what it is**. Each feature is a self-contained vertical slice owning all its layers.

## Mandatory Folder Structure

```
src/
├── features/
│   ├── <feature-name>/
│   │   ├── components/   # UI components for this feature
│   │   ├── hooks/        # Data fetching, state, side-effects
│   │   ├── services/     # API calls, business logic
│   │   ├── types/        # TypeScript interfaces/types
│   │   └── index.ts      # Public API (REQUIRED)
│   └── shared/           # Cross-feature business logic
└── components/ui/        # Universal UI primitives (Button, Input)
```

## The Public API Rule

Features communicate **only** through their `index.ts` barrel file. Never import from a sub-path.

```ts
// ✅ Correct
import { useAuth, LoginForm } from '@/features/auth';

// ❌ Wrong — leaks internals
import { LoginForm } from '@/features/auth/components/LoginForm';
```

**Feature `index.ts` template:**
```ts
// features/<name>/index.ts — public feature API
export * from './components';
export * from './hooks';
export * from './services';
export * from './types';
```

The `assets/feature-template/` directory contains a ready-to-copy scaffold.

## Workflow: Creating a New Feature

1. Copy `assets/feature-template/` → `src/features/<name>/`
2. Populate `types/` first to define the data model
3. Implement `services/` and `hooks/`
4. Build `components/` using the established logic
5. Export the public API from `index.ts`

## Workflow: Migrating a Legacy Project

For migrating a layered structure (e.g., `src/components/`, `src/hooks/`) to FDD:

**Read [`references/migration-guide.md`](references/migration-guide.md)** for the full 4-phase process.

### Quick Start with Scripts

**1. Audit the project** (run from project root):
```bash
node path/to/skill/scripts/analyze-migration.js
```
Outputs a full report grouping existing files into FDD feature candidates. Use this before touching any files.

**2. Move files** (run per feature, per layer):
```bash
node path/to/skill/scripts/scaffold-feature-move.js <feature> <layer> <files...>
```
- Creates the FDD directory structure
- Moves files to the correct layer
- Auto-updates `index.ts` barrel exports

Valid layers: `components` | `hooks` | `services` | `types`

> **Token optimization**: Run the audit script first to generate a full project map in one shot, avoiding repeated `list_dir` calls across the codebase.

## Shared Code Rules

| Code | Location |
| :--- | :--- |
| Used by 2+ features | `src/features/shared/` |
| Pure UI primitive (Button, Input) | `src/components/ui/` |
| Global state store | `src/store/` |
| App entrypoint, router | `src/` root, unchanged |
