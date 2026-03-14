# Textarea

Semantic multi-line text input collection

## Usage

```tsx
import { Textarea } from "@openai/apps-sdk-ui/components/Textarea";

const Example = () => (
  <div className="w-[400px]">
    <Textarea
      autoResize
      placeholder="Enter text..."
      rows={3}
    />
  </div>
);
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **placeholder** | Placeholder text | `string` | `-` |
| **allowAutofillExtensions** | Allow autofill extensions to appear | `boolean` | `false` |
| **disabled** | Disables the textarea visually and from interactions | `boolean` | `false` |
| **invalid** | Mark the textarea as invalid | `boolean` | `false` |
| **rows** | Default number of rows to display | `number` | `3` |
| **autoResize** | Automatically adjust height based on contents | `boolean` | `false` |
| **variant** | Visual style. Options: "soft", "outline" | `string` | `"outline"` |
| **size** | Control the size. Options: "sm", "md", "lg", "3xs", "2xs", "xs", "xl", "2xl" | `string` | `"md"` |
| **gutterSize** | Control horizontal padding. Options: "sm", "md", "lg", "2xs", "xs", "xl" | `string` | `-` |
| **autoSelect** | Select all contents when mounted | `boolean` | `false` |
| **onAutofill** | Callback invoked when autofilled | `(() => void)` | `-` |
| **maxRows** | Maximum rows when `autoResize` is enabled | `number` | `Math.max(rows, 10)` |

## Examples

### Variants

Use `variant` to stylize the textarea.

```tsx
<Textarea variant="outline" placeholder="Outline variant" />
<Textarea variant="soft" placeholder="Soft variant" />
```

### Auto resize

Enable `autoResize` to automatically grow/shrink the textarea as the user types. Control the bounds with `rows` (initial height) and `maxRows`.

```tsx
<div className="w-[400px]">
  <Textarea
    autoResize
    maxRows={8}
    placeholder="Type to grow..."
    rows={3}
  />
</div>
```

### Sizing

Sizing of the textarea is controlled with `size` and `gutterSize` props. `size` sets the textarea to a specific control height for single-line equivalent, and `gutterSize` sets the horizontal padding.

```tsx
<Textarea size="lg" placeholder="Large size" />
<Textarea size="sm" gutterSize="xs" placeholder="Small size with extra small gutter" />
```

### Disabled

Use the `disabled` prop to disable the textarea, greying it out and preventing user interactions.

```tsx
<div className="w-[400px]">
  <Textarea
    defaultValue="Jane Doe"
    disabled
    rows={3}
  />
</div>
```

### Invalid

Use the `invalid` prop to mark the textarea as invalid. Default visual styles will be applied based on the variant.

```tsx
<div className="w-[400px]">
  <Textarea
    invalid
    placeholder="Invalid textarea"
    rows={3}
  />
</div>
```

### Auto select text

Pass `autoSelect` to select all text in the textarea—useful when pairing with other copy actions.

```tsx
<div className="w-[400px]">
  <Textarea
    defaultValue="This text will be selected on mount"
    autoSelect
    rows={3}
  />
</div>
```

### Autofill extensions

By default, autofill extensions are prevented. Pass `allowAutofillExtensions` to remove this restriction. When `name` is passed, this value defaults to `true`.

```tsx
<div className="w-[400px]">
  <Textarea
    allowAutofillExtensions
    name="email"
    placeholder="Allowed"
    rows={3}
  />
</div>
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Variants](#variants)
    - [Auto resize](#auto-resize)
    - [Sizing](#sizing)
    - [Disabled](#disabled)
    - [Invalid](#invalid)
    - [Auto select text](#auto-select-text)
    - [Autofill extensions](#autofill-extensions)
