# Button

Create actions in many different styles and configurations

## Usage

```tsx
import { Button } from "@openai/apps-sdk-ui/components/Button";

const Example = () => (
  <Button
    color="primary"
    size="md"
    variant="solid"
    onClick={() => console.log("Clicked!")}
  >
    Submit
  </Button>
);
```

## Overview

The `Button` component is a ubiquitous interface element used to trigger actions. It supports various visual variants, comprehensive sizing options, and specialized states like `loading`, `selected`, and `inert`.

## Examples

### Colors & variants

Stylize the button using the `color` and `variant` props.

```tsx
<div className="flex gap-4">
  <Button color="primary" variant="solid">Solid</Button>
  <Button color="secondary" variant="soft">Soft</Button>
  <Button color="danger" variant="outline">Outline</Button>
  <Button color="info" variant="ghost">Ghost</Button>
</div>
```

### Sizing & Roundness

Control height and horizontal padding using `size` and `gutterSize`. The `pill` prop applies a fully rounded shape.

```tsx
<div className="flex items-center gap-4">
  <Button size="lg" pill>Large Pill</Button>
  <Button size="sm" gutterSize="xs">Small Tight Gutter</Button>
</div>
```

### Icons & Uniform Sizing

Add icons as children. Use the `uniform` prop for perfectly square buttons (handy for icon-only actions).

```tsx
<Button
  color="secondary"
  size="lg"
  uniform
  variant="ghost"
>
  <PlusIcon className="w-5 h-5" />
</Button>
```

### Specialized States

The component includes built-in support for standard and specialized interaction states.

- **Loading**: Displays an indicator while preserving button width.
- **Selected**: Highlights the button (e.g., for active menu triggers).
- **Disabled**: Prevents all interaction and applies dimming.
- **Inert**: Prevents interaction without changing the visual appearance.

```tsx
<div className="flex gap-4">
  <Button loading>Processing</Button>
  <Button selected>Active Menu</Button>
  <Button disabled>Not Allowed</Button>
</div>
```

### Optical alignment

Use `opticallyAlign` to remove the gutter on one side, allowing the text or icon to align flush with surrounding content.

```tsx
<Button opticallyAlign="start">Align with edge</Button>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **children** | Content inside the button | `ReactNode` | `-` |
| **variant** | Style variant. Options: "soft", "solid", "outline", "ghost" | `string` | `"solid"` |
| **color** | Tone/Intent color. Options: "primary", "secondary", "success", "info", etc | `string` | `"secondary"` |
| **size** | Height and scale. Options: "sm", "md", "lg", "xl", etc | `string` | `"md"` |
| **pill** | Fully rounded shape | `boolean` | `true` |
| **disabled** | Visually and accessibly disable | `boolean` | `false` |
| **loading** | Show loading state indicator | `boolean` | `false` |
| **selected** | Persist "active" styling | `boolean` | `false` |
| **block** | Take 100% available width | `boolean` | `false` |
| **uniform** | Force square dimensions | `boolean` | `false` |
| **inert** | Disable accessibly but not visually | `boolean` | `false` |
| **iconSize** | Icon scale override | `string` | `-` |
| **gutterSize** | Horizontal padding override | `string` | `-` |
| **opticallyAlign** | Gutter offset. Options: "start", "end" | `string` | `-` |
| **className** | Custom class applied to button | `string` | `-` |
| **ref** | Ref for the underlying button element | `Ref` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Colors & variants](#colors--variants)
    - [Sizing & roundness](#sizing--roundness)
    - [Icons](#icons)
    - [States](#specialized-states)
- [Reference](#reference)
