---
name: minimalist-frontend-logic
description: "Expert guide for building minimalist, high-end interfaces. Use when: (1) General frontend coding, (2) Layout discussions, (3) Polishing UI/UX. Enforces the Item-over-Card pattern, standardized spacing, and proper component categorization."
---

# Minimalist Frontend Logic

This skill distills the "Apple/OpenAI-style" minimalist interface patterns used in this project.

## "Items > Cards" Principle

**Strictly prefer the `ItemGroup` and `Item` pattern for settings, lists, and content groups.** Avoid bulky cards with borders/shadows.

- **`ItemGroup`**: Groups related items. Can have an optional uppercase `label`.
- **`Item`**: A single interactive or informational row.
  - Use `ItemContent`, `ItemTitle`, and `ItemDescription` for the left side.
  - Use `ItemActions` for the right side (buttons, toggles, badges).
- **Separators**: Use `separator={true}` (default) between items in a group. Manually set `separator={false}` for the **last element** in a group.

### Layout Logic (Standard Spacing)

- **`gap-2`**: For tight lists or very closely related elements.
- **`gap-3`**: For standard interactive elements and action bars.
- **`gap-4`**: For standard block-level spacing (e.g., between an icon and text).
- **`gap-8` / `gap-10`**: For major section layout in features.

## Component Categorization Heuristics

- **`src/components/ui/` (Shared)**:
  - Truly universal primitives (Button, Input, Dialog, Item).
  - No business logic.
  - Controlled via props only.
- **`src/features/<name>/components/` (Private)**:
  - Business-aware components (e.g., `SentimentBadge`, `ResultActions`).
  - Can use feature-specific hooks.
  - Should use `ui` components as building blocks.

## UX Micro-Logic

1. **Interactivity**: Add `onClick` to an `Item` to make it interactive (automatically adds hover states).
2. **Animation**: Use `animate-in fade-in slide-in-from-bottom-2 duration-500` for entry transitions.
3. **Empty States**: Prefer minimalist text or subtle icons over complex illustrations.
4. **Color Palette**: Use CSS variables for semantic colors (`var(--color-text-secondary)`, `var(--color-border)`).
