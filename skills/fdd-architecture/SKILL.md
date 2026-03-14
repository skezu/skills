---
name: fdd-architecture
description: "Expert guide for implementing Feature-Driven Development (FDD) architecture. Use when: (1) Creating new features, (2) Refactoring folder structures, (3) Initializing project layouts. Enforces strict feature isolation, clear public APIs, and scalable organization."
---

# Feature-Driven Development (FDD) Architecture

Organize code by **what it does**, not **what it is**. This skill ensures high cohesion, clear boundaries, and team ownership.

## Feature Isolation Rules

Each feature MUST own its technical layers within its directory. **Never scatter related logic.**

### Mandatory Folder Structure
```
src/features/<feature-name>/
├── components/     # UI components specific to this feature
├── hooks/          # Hooks for data fetching, state, or side effects
├── services/       # API calls, business logic, utility functions
├── types/          # TypeScript interfaces/types
└── index.ts        # The Public API (Required)
```

## The "Public API" Pattern

To prevent "import leakage" and tangled dependencies, features must only communicate through their `index.ts` file.

1. **Internal by Default**: Files inside a feature should NOT be imported directly (e.g., `import { MyComponent } from '@/features/auth/components/MyComponent'`).
2. **Export Explicitly**: Only export what's needed for the rest of the application in `index.ts`.
3. **Consumption**: Other features/pages import from the feature root (e.g., `import { MyComponent } from '@/features/auth'`).

### Example `index.ts`
```typescript
// features/auth/index.ts
export * from './components';
export * from './hooks';
export * from './services';
export * from './types';
```

## Absolute Imports

Always use absolute imports (e.g., `@/features/...`) for cross-feature communication. This ensures:
- Refactoring folder structures doesn't break relative paths.
- Clearer understanding of where a component or hook originates.

## Shared Code Strategy

- **`src/components/ui/`**: Truly universal UI primitives (Button, Input, Card).
- **`src/features/shared/`**: Business-domain specific code used across multiple features (e.g., a shared `ProductCard` or `useUserPreferences`).

## Workflow: Creating a New Feature

1. Create the directory structure: `mkdir -p src/features/<name>/{components,hooks,services,types}`.
2. Initialize `index.ts` in each subdirectory.
3. Initialize the main `index.ts` for the feature.
4. Populate `types/` first to define the data model.
5. Implement `services/` and `hooks/` for logic.
6. Build `components/` using the established logic.
