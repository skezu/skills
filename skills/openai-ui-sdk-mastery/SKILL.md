---
name: openai-ui-sdk-mastery
description: "Expert UI component builder and OpenAI SDK integrator. Use when building or refactoring React components using the `@openai/apps-sdk-ui` library to ensure visual consistency, logic-driven variant selection, and adherence to specific workspace conventions (Anti-Pill rule, uniform icons)."
---

# OpenAI UI SDK Mastery

This skill guides the implementation of UI components using the OpenAI Apps SDK UI library, enforcing the "coding DNA" of the project.

## Core Mandates

### Logic-Driven Variant Selection
- **Status & Feedback**: Use `soft` variant for `Badge` and `Alert` to indicate state (success, danger, info) without overwhelming visual noise.
- **Navigational Actions**: Use `ghost` variant for buttons that trigger menus, sidebars, or secondary actions.
- **Primary Actions**: Use `solid` variant sparingly for the main call-to-action on a page.

### The "Anti-Pill" Rule
- **Standard UI Elements**: Set `pill={false}` (rectilinear style) for all sidebar items, list items, and standard navigation buttons.
- **Exceptions**: `pill={true}` is reserved exclusively for high-impact Call-To-Action (CTA) buttons that need to stand out.

### Icon Constraints
- **Single Icon Buttons**: Always use the `uniform` prop on `Button` when it contains only an icon.
- **List Integrations**: Use `iconSize="sm"` (16px) for icons embedded in lists, menus, or compact rows.
- **Standalone Icons**: In sidebars or headers, `iconSize="lg"` may be used for primary navigation toggles.

## Component Selection Map

| Intent | Recommended Component | Variant | Props |
| :--- | :--- | :--- | :--- |
| Status / Category | `Badge` | `soft` | `color` based on state |
| Blocker / Critical Error | `Alert` | `soft` | `color="danger"` |
| Sidebar Navigation | `Button` | `ghost` | `pill={false}`, `block` |
| List Action (e.g. Delete) | `Button` | `ghost` | `uniform`, `pill={false}`, `iconSize="sm"` |
| User Profile | `Avatar` | - | `size={32}` for sidebar, `size={26}` for menu items |

## Resources

Detailed component documentation and examples are available in the [references/](references/) directory:
- [General Rules](references/openai-sdk-rules.md)
- [Components Guide](references/components/)
- [Concepts & Primitives](references/concepts/)
- [Transitions & Animations](references/transitions/)

## Implementation Workflow

1. **Identify Intent**: Determine if you are showing status, a navigational action, or a primary CTA.
2. **Apply DNA**: Consult the Anti-Pill and Icon constraints before finalizing component props.
3. **Validate Consistency**: Ensure the new component matches existing patterns in `Sidebar.tsx` or `HistoryList.tsx`.
