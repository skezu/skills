# Input

Semantic input text collection

## Usage

```tsx
import { Input } from "@openai/apps-sdk-ui/components/Input";

const Example = () => (
  <Input
    placeholder="Enter text..."
    onChange={(e) => console.log(e.target.value)}
  />
);
```

## Overview

The `Input` component provides a styled text input field with support for variants, sizing, adornments, and validation states. It handles browser autofill extensions and provides hooks for common accessibility patterns like auto-selection.

## Examples

### Variants

Use the `variant` prop to change the visual appearance.

```tsx
<div className="flex flex-col gap-4">
  <Input variant="outline" placeholder="Outline variant (default)" />
  <Input variant="soft" placeholder="Soft variant" />
</div>
```

### Sizing & roundness

Sizing is controlled via `size` and `gutterSize`. The `pill` prop applies maximum border radius.

```tsx
<Input size="lg" pill placeholder="Large pill input" />
```

### Adornments

Add icons or buttons to either side of the input using `startAdornment` and `endAdornment`.

```tsx
<div className="flex flex-col gap-4">
  <Input
    placeholder="Search..."
    startAdornment={<SearchIcon className="text-tertiary" />}
  />
  <Input
    placeholder="Clearable input"
    endAdornment={
      <Button size="3xs" variant="soft" onClick={() => {}}>
        <XIcon />
      </Button>
    }
  />
</div>
```

### States

Support for `disabled` and `invalid` states.

```tsx
<div className="flex flex-col gap-4">
  <Input disabled defaultValue="Jane Doe" />
  <Input invalid placeholder="Invalid input state" />
</div>
```

### Auto select text

The `autoSelect` prop automatically selects all text within the input when it is mounted.

```tsx
<Input
  defaultValue="Click to see auto-selection"
  autoSelect
/>
```

### Pairing with Buttons

You can easily pair `Input` and `Button` components by matching their `size` and `variant`.

```tsx
<div className="flex gap-2">
  <Input placeholder="name@example.com" size="lg" />
  <Button color="primary" size="lg">Subscribe</Button>
</div>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **placeholder** | Hint text | `string` | `-` |
| **allowAutofillExtensions** | Allow browser extensions to autofill | `boolean` | `false` |
| **disabled** | Disable interactions and dim appearance | `boolean` | `false` |
| **invalid** | Mark as invalid (red border/ring) | `boolean` | `false` |
| **variant** | Style variant. Options: "soft", "outline" | `string` | `"outline"` |
| **size** | Control height. Options: "sm", "md", "lg", "3xs", etc | `string` | `"md"` |
| **gutterSize** | Horizontal padding override | `string` | `-` |
| **autoSelect** | Select all text on mount | `boolean` | `false` |
| **onAutofill** | Callback when browser autofills | `function` | `-` |
| **startAdornment** | Content at the beginning | `ReactNode` | `-` |
| **endAdornment** | Content at the end | `ReactNode` | `-` |
| **pill** | Rounded ends | `boolean` | `false` |
| **opticallyAlign** | Offset gutter. Options: "start", "end" | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Variants](#variants)
    - [Sizing & roundness](#sizing--roundness)
    - [Adornments](#adornments)
    - [States](#states)
    - [Auto select text](#auto-select-text)
- [Reference](#reference)
