# OpenAI UI SDK Rules

Guidelines and definitions for using the OpenAI UI SDK components and patterns

## Available Components

The following components are pre-registered and available within the `@openai/apps-sdk-ui` ecosystem. Use these primitives to ensure visual consistency and accessibility.

| Component | Description |
| :--- | :--- |
| **Alert** | Feedback and status messages |
| **AppsSDKUIProvider** | Root configuration and context provider |
| **Avatar** | User identities with text, photos, or icons |
| **Badge** | Status indicators and categorical labels |
| **Button** | Highly configurable action triggers |
| **Checkbox** | Boolean toggle control for forms |
| **CodeBlock** | Syntax-highlighted code snippets |
| **DatePicker** | Single date selection calendar popover |
| **DateRangePicker** | Start/End date selection with shortcuts |
| **EmptyMessage** | Placeholder UI for empty collection states |
| **Icon** | Curated set of specialized SVG icons |
| **Indicator** | Small status dots and loading primitives |
| **Input** | Standard single-line text input |
| **Markdown** | Rich text rendering with LaTeX support |
| **Menu** | Contextual dropdown navigation systems |
| **Popover** | Generic floating UI for rich content |
| **RadioGroup** | Mutually exclusive selection list |
| **SegmentedControl** | Tab-like toggle for switching views |
| **Select** | Dropdown selection with search support |
| **Slider** | Numeric range selection controls |
| **Switch** | Highly visible binary toggle control |
| **TagInput** | Multi-select interface for keyword tags |
| **TextLink** | Inline anchor tags with router support |
| **Textarea** | Multi-line text input for long-form content |
| **Tooltip** | Hover-based informational popups |
| **Transition** | Animation primitives for layout and enters |

## Implementation Guidelines

### Import Patterns

Always import components from their specific subpaths to optimize bundle size and ensure clear dependency mapping.

```tsx
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Badge } from "@openai/apps-sdk-ui/components/Badge";
```

### Styling Strategy

1. **SDK First**: Leverage component-level props (`color`, `variant`, `size`) as the primary styling mechanism.
2. **Tailwind for Layout**: Use Tailwind CSS 4 utility classes for grid/flex layouts, margins, and external padding.
3. **Design Tokens**: Access lower-level design tokens (colors, radius, shadows) via their CSS variable names if a component prop is insufficient.

### Palette & Variants

Standard color palettes across all components:
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `discovery`, `caution`.

Standard variants across interactive elements:
- `solid`, `soft`, `outline`, `ghost`.

- [Components](#available-components)
- [Guidelines](#implementation-guidelines)
- [Styling](#styling-strategy)
