# Task List Patterns

Tasks should be actionable prompts for a coding agent, building incrementally toward the complete feature.

## Task Format

Each task is a checkbox item with:
1. Clear objective (the checkbox line)
2. Implementation details (sub-bullets)
3. Requirement references (italic, links to requirements.md)

```markdown
- [ ] 1. Create user authentication service
  - Implement `AuthService` class with login/logout methods
  - Add password hashing using bcrypt
  - Write unit tests for authentication logic
  - _Requirements: 1.1, 1.2_
```

## Hierarchy Rules

- Use flat numbering (1, 2, 3) when possible
- Use decimal sub-tasks (1.1, 1.2) only when a parent task has clear sub-components
- Maximum two levels of hierarchy
- Each item must be a checkbox

**Good structure:**
```markdown
- [ ] 1. Set up database schema
  - Create users table migration
  - Add indexes for email lookup
  - _Requirements: 2.1_

- [ ] 2. Implement repository layer
- [ ] 2.1 Create UserRepository interface
  - Define CRUD method signatures
  - _Requirements: 2.1, 2.2_

- [ ] 2.2 Implement PostgresUserRepository
  - Implement all interface methods
  - Write integration tests
  - _Requirements: 2.1, 2.2_
```

## Task Sequencing Principles

### 1. Foundation First
Start with infrastructure and interfaces before implementations.

```markdown
- [ ] 1. Define core interfaces (no dependencies)
- [ ] 2. Implement data layer (depends on #1)
- [ ] 3. Implement business logic (depends on #2)
- [ ] 4. Add API endpoints (depends on #3)
- [ ] 5. Wire everything together (depends on all)
```

### 2. Test-Driven When Appropriate
Include test writing as part of each task, not as a separate phase.

```markdown
- [ ] 1. Implement UserService with tests
  - Write failing tests for createUser
  - Implement createUser to pass tests
  - Write failing tests for getUser
  - Implement getUser to pass tests
```

### 3. Incremental Complexity
Start simple, add complexity in later tasks.

```markdown
- [ ] 1. Basic login (email + password only)
- [ ] 2. Add token generation
- [ ] 3. Add token refresh
- [ ] 4. Add session management
```

### 4. No Orphaned Code
Every task should integrate with previous work. No hanging implementations.

**Bad:**
```markdown
- [ ] 1. Create AuthService
- [ ] 2. Create UserService  
- [ ] 3. Create API routes
# Problem: Nothing connects these!
```

**Good:**
```markdown
- [ ] 1. Create AuthService with tests
- [ ] 2. Create UserService that uses AuthService
- [ ] 3. Create API routes that use both services
- [ ] 4. Add middleware to wire auth into request pipeline
```

## What NOT to Include

Tasks must be coding-only. Exclude:

- User acceptance testing
- Deployment to environments
- Performance metrics gathering
- User training or documentation
- Manual testing flows
- Marketing or communication
- Business process changes

**Bad task:** "Deploy to staging and verify with QA team"
**Good task:** "Write E2E tests that verify the complete flow"

## Referencing Requirements

Always link tasks to specific requirements using the requirement numbers.

```markdown
- [ ] 3. Implement password validation
  - Minimum 8 characters
  - At least one number and special character
  - _Requirements: 1.3, 1.4_
```

This enables traceability and ensures all requirements are covered.
