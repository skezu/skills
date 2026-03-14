# FDD Migration Guide

## Contents
1. [Pre-Migration Checklist](#pre-migration-checklist)
2. [Phase 1 — Audit](#phase-1--audit)
3. [Phase 2 — Feature Grouping](#phase-2--feature-grouping)
4. [Phase 3 — Incremental Migration](#phase-3--incremental-migration)
5. [Phase 4 — Cleanup](#phase-4--cleanup)
6. [Common Patterns](#common-patterns)

---

## Pre-Migration Checklist

Before starting, confirm:
- [ ] TypeScript path aliases are configured (`@/` → `src/` in `tsconfig.json` and `vite.config.ts`)
- [ ] The project compiles without errors
- [ ] Tests pass (if any)

---

## Phase 1 — Audit

Run the analysis script from the **project root**:
```bash
node path/to/skill/scripts/analyze-migration.js
```
This outputs a report grouping all `src/` files into feature candidates.

**Read the report and note:**
- Files that belong clearly to one feature (easy wins)
- Files used across multiple features (shared candidates)
- Root-level files (`App.tsx`, `main.tsx`) that should stay in place

---

## Phase 2 — Feature Grouping

From the audit output, finalize your feature list. Ask:
- Does this file contain logic specific to one domain? → That domain is its feature.
- Is it used by 2+ features? → Move to `src/features/shared/`.
- Is it a pure UI primitive (Button, Input)? → Keep in `src/components/ui/`.

**Naming Convention**: Use `kebab-case` for feature names: `user-profile`, `sentiment-analysis`.

---

## Phase 3 — Incremental Migration

Migrate **one feature at a time**. Never batch multiple features in one step.

### Per-feature steps:
1. **Scaffold and move files** using the script:
   ```bash
   node scripts/analyze-migration.js auth components src/components/LoginForm.tsx
   node scripts/scaffold-feature-move.js auth hooks src/hooks/useAuth.ts
   node scripts/scaffold-feature-move.js auth services src/api/authService.ts
   node scripts/scaffold-feature-move.js auth types src/types/auth.types.ts
   ```

2. **Fix internal imports** in moved files — change relative imports to absolute:
   ```ts
   // Before:
   import { apiClient } from '../../utils/apiClient';
   // After:
   import { apiClient } from '@/features/shared';
   ```

3. **Verify the public API** in `src/features/<feature>/index.ts`:
   ```ts
   // auth/index.ts — public feature API
   export * from './components';
   export * from './hooks';
   export * from './services';
   export * from './types';
   ```

4. **Update all consumers** — search for old import paths:
   ```bash
   # Find old imports to update
   grep -r "from '.*LoginForm'" src/
   grep -r "from '.*useAuth'" src/
   ```
   Replace with:
   ```ts
   import { LoginForm, useAuth } from '@/features/auth';
   ```

5. **Verify build**: Run `npm run build` or `tsc --noEmit` after each feature.

---

## Phase 4 — Cleanup

Once all features are migrated:
- Delete empty legacy folders: `src/components/`, `src/hooks/`, `src/utils/`, etc.
- Audit `src/features/shared/` — some files may now be feature-specific
- Verify no direct sub-path imports remain (e.g., `from '@/features/auth/components/...'`)

---

## Common Patterns

### Handling a Shared Hook
A hook used across 3 features belongs in `shared`:
```bash
node scripts/scaffold-feature-move.js shared hooks src/hooks/useDebounce.ts
```

### Handling a Global Store (Redux/Zustand)
Keep the store file in `src/store/` — do NOT move it into a feature. Features import from the store, not the other way around.

### Files to Leave in Place
| File | Reason |
| --- | --- |
| `src/main.tsx` | App entrypoint, not a feature |
| `src/App.tsx` | Root component, orchestrates features |
| `src/router.tsx` | Routing config referencing multiple features |
| `src/store/` | Global state, cross-cutting |
