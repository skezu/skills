---
name: antigravity-onboarding
description: Systematically analyze an unfamiliar codebase and produce a structured onboarding guide plus a starter AGENTS.md for Antigravity CLI (Google's terminal coding agent). Use this skill when the user says "onboard me", "help me understand this codebase", "generate an AGENTS.md", "set up Antigravity for this project", "I'm new to this repo", or asks for a project instructions file for Antigravity, agy, Gemini CLI, or cross-tool agent compatibility. Also trigger when the user wants to create or update any AGENTS.md file.
---

# Antigravity Codebase Onboarding

Systematically analyze an unfamiliar codebase and produce a structured onboarding guide plus a starter AGENTS.md — the cross-tool standard instruction file used by Antigravity CLI (agy), Cursor, Claude Code, and other AI coding agents.

## When to Use

- First time opening a project with Antigravity CLI
- Joining a new team or repository
- User asks "help me understand this codebase"
- User asks to generate an AGENTS.md for a project
- User says "onboard me" or "walk me through this repo"
- User wants Antigravity CLI ready to work in this project

## How It Works

### Phase 1: Reconnaissance

Gather raw signals about the project without reading every file. Run these checks in parallel:

```
1. Package manifest detection
   → package.json, go.mod, Cargo.toml, pyproject.toml, pom.xml, build.gradle,
     Gemfile, composer.json, mix.exs, pubspec.yaml

2. Framework fingerprinting
   → next.config.*, nuxt.config.*, angular.json, vite.config.*,
     django settings, flask app factory, fastapi main, rails config

3. Entry point identification
   → main.*, index.*, app.*, server.*, cmd/, src/main/

4. Directory structure snapshot
   → Top 2 levels of the directory tree, ignoring node_modules, vendor,
     .git, dist, build, __pycache__, .next

5. Config and tooling detection
   → .eslintrc*, .prettierrc*, tsconfig.json, Makefile, Dockerfile,
     docker-compose*, .github/workflows/, .env.example, CI configs

6. Test structure detection
   → tests/, test/, __tests__/, *_test.go, *.spec.ts, *.test.js,
     pytest.ini, jest.config.*, vitest.config.*

7. Existing agent instruction files
   → AGENTS.md, CLAUDE.md, .cursorrules, .cursor/rules/, .github/copilot-instructions.md
     (if any exist, read them — they contain prior decisions worth preserving)
```

### Phase 2: Architecture Mapping

From the reconnaissance data, identify:

**Tech Stack**
- Language(s) and version constraints
- Framework(s) and major libraries
- Database(s) and ORMs
- Build tools and bundlers
- CI/CD platform

**Architecture Pattern**
- Monolith, monorepo, microservices, or serverless
- Frontend/backend split or full-stack
- API style: REST, GraphQL, gRPC, tRPC

**Key Directories**
Map the top-level directories to their purpose:

```
src/components/  → React UI components
src/api/         → API route handlers
src/lib/         → Shared utilities
src/db/          → Database models and migrations
tests/           → Test suites
scripts/         → Build and deployment scripts
```

**Data Flow**
Trace one request from entry to response:
- Where does a request enter? (router, handler, controller)
- How is it validated? (middleware, schemas, guards)
- Where is business logic? (services, models, use cases)
- How does it reach the database? (ORM, raw queries, repositories)

### Phase 3: Convention Detection

Identify patterns the codebase already follows:

**Naming Conventions**
- File naming: kebab-case, camelCase, PascalCase, snake_case
- Component/class naming patterns
- Test file naming: `*.test.ts`, `*.spec.ts`, `*_test.go`

**Code Patterns**
- Error handling style: try/catch, Result types, error codes
- Dependency injection or direct imports
- State management approach
- Async patterns: callbacks, promises, async/await, channels

**Git Conventions**
- Branch naming from recent branches
- Commit message style from recent commits
- PR workflow (squash, merge, rebase)
- If the repo has no commits yet or only a shallow history, skip this section and note "Git history unavailable or too shallow to detect conventions"

### Phase 4: Generate Onboarding Artifacts

Produce two outputs:

#### Output 1: Onboarding Guide

```markdown
# Onboarding Guide: [Project Name]

## Overview
[2-3 sentences: what this project does and who it serves]

## Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript | 5.x |
| Framework | Next.js | 14.x |
| Database | PostgreSQL | 16 |
| ORM | Prisma | 5.x |
| Testing | Jest + Playwright | - |

## Architecture
[Diagram or description of how components connect]

## Key Entry Points
- **API routes**: `src/app/api/` — Next.js route handlers
- **UI pages**: `src/app/(dashboard)/` — authenticated pages
- **Database**: `prisma/schema.prisma` — data model source of truth
- **Config**: `next.config.ts` — build and runtime config

## Directory Map
[Top-level directory → purpose mapping]

## Request Lifecycle
[Trace one API request from entry to response]

## Conventions
- [File naming pattern]
- [Error handling approach]
- [Testing patterns]
- [Git workflow]

## Common Tasks
- **Run dev server**: `npm run dev`
- **Run tests**: `npm test`
- **Run linter**: `npm run lint`
- **Database migrations**: `npx prisma migrate dev`
- **Build for production**: `npm run build`

## Where to Look
| I want to... | Look at... |
|--------------|-----------|
| Add an API endpoint | `src/app/api/` |
| Add a UI page | `src/app/(dashboard)/` |
| Add a database table | `prisma/schema.prisma` |
| Add a test | `tests/` matching the source path |
| Change build config | `next.config.ts` |
```

#### Output 2: Starter AGENTS.md

AGENTS.md is the cross-tool standard instruction file — it works in Antigravity CLI (agy), Cursor, Claude Code, and other AI coding agents. Place it at the project root.

If an AGENTS.md already exists, read it first and enhance it — preserve existing project-specific instructions and clearly call out what was added or changed. If a CLAUDE.md or .cursorrules exists with relevant content, migrate the useful parts into AGENTS.md.

```markdown
# AGENTS.md

This file provides instructions to AI coding agents (Antigravity/agy, Claude Code, Cursor, etc.) working in this repository.

## Project Overview
[1-2 sentences on what this project does]

## Tech Stack
[Detected stack summary — only the parts that shape how you write code]

## Build & Run
- Dev: `[detected dev command]`
- Build: `[detected build command]`
- Test: `[detected test command]`
- Lint: `[detected lint command]`
- Single test: `[detected single-test command, e.g. jest path/to/test]`

## Project Structure
[Key directory → purpose map — only non-obvious mappings]

## Code Style
- [Detected naming conventions]
- [Error handling approach]
- [Async patterns]

## Testing
- Test pattern: [detected test file convention, e.g. *.test.ts next to source]
- Coverage command: [if configured]

## Conventions
- [Commit style if detectable]
- [PR workflow if detectable]
- [Any non-obvious architectural constraints]
```

Keep the AGENTS.md under 100 lines. It should be scannable in under 2 minutes — implementation details belong in the code.

## Best Practices

1. **Don't read everything** — reconnaissance uses Glob and Grep, not Read on every file. Read selectively only for ambiguous signals.
2. **Verify, don't guess** — if a framework is detected from config but the actual code uses something different, trust the code.
3. **Respect existing AGENTS.md** — if one already exists, enhance rather than replace. Same for CLAUDE.md or .cursorrules — they may contain decisions worth migrating.
4. **Stay concise** — the onboarding guide should be scannable in 2 minutes. Details belong in the code, not the guide.
5. **Flag unknowns** — if a convention can't be confidently detected, say so rather than guessing. "Could not determine test runner" is better than a wrong answer.
6. **Cross-tool awareness** — AGENTS.md is read by multiple agents. Avoid tool-specific syntax or references (no `@mentions`, no Claude-specific patterns).

## Anti-Patterns to Avoid

- Generating an AGENTS.md that's longer than 100 lines — keep it focused
- Listing every dependency — highlight only the ones that shape how code is written
- Describing obvious directory names — `src/` doesn't need an explanation
- Copying the README — the onboarding guide adds structural insight the README lacks
- Tool-specific instructions — AGENTS.md is cross-tool; don't add Claude-only or Cursor-only sections unless clearly labeled

## Examples

### Example 1: First time in a new repo
**User**: "Onboard me to this codebase for Antigravity"
**Action**: Run full 4-phase workflow → produce Onboarding Guide + Starter AGENTS.md
**Output**: Onboarding Guide printed to conversation, `AGENTS.md` written to project root

### Example 2: Generate AGENTS.md for existing project
**User**: "Generate an AGENTS.md for this project"
**Action**: Run Phases 1-3, skip Onboarding Guide, produce only AGENTS.md
**Output**: Project-specific `AGENTS.md` at project root

### Example 3: Enhance existing AGENTS.md
**User**: "Update the AGENTS.md with current project conventions"
**Action**: Read existing AGENTS.md, run Phases 1-3, merge new findings
**Output**: Updated `AGENTS.md` with additions clearly marked

### Example 4: Migrate from CLAUDE.md
**User**: "I want to use Antigravity on this project, it already has a CLAUDE.md"
**Action**: Read CLAUDE.md, extract tool-agnostic content, produce AGENTS.md
**Output**: `AGENTS.md` at project root containing the portable subset of CLAUDE.md
