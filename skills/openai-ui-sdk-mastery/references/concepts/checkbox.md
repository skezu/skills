# Checkbox

A toggle control for managing on/off states

## Usage

```tsx
import { Checkbox } from "@openai/apps-sdk-ui/components/Checkbox";

const Example = () => (
  <Checkbox
    label="I agree to the terms and conditions"
    onCheckedChange={(checked) => console.log("Checked:", checked)}
  />
);
```

## Overview

The `Checkbox` component is used to select one or more items from a set, or to toggle a single setting. It includes built-in support for labels, required validation, and indeterminate states.

## Examples

### Indeterminate State

Use `checked="indeterminate"` or `defaultChecked="indeterminate"` to represent a partially selected state (common in parent/child checkbox relationships).

```tsx
<Checkbox
  label="Select All"
  checked="indeterminate"
/>
```

### Label Orientation

By default, the checkbox appears to the left of the label. Change this with the `orientation` prop.

```tsx
<div className="flex flex-col gap-4">
  <Checkbox label="Label on the right" orientation="left" />
  <Checkbox label="Label on the left" orientation="right" />
</div>
```

### Disabled & Required

```tsx
<div className="flex flex-col gap-4">
  <Checkbox label="Required field" required defaultChecked />
  <Checkbox label="Disabled field" disabled />
</div>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **label** | Accessible label text or node | `ReactNode` | `-` |
| **checked** | Controlled state | `boolean \| "indeterminate"` | `-` |
| **defaultChecked** | Initial state for uncontrolled use | `boolean \| "indeterminate"` | `-` |
| **onCheckedChange** | Callback when state changes | `(checked: boolean) => void` | `-` |
| **disabled** | Prevents interaction | `boolean` | `false` |
| **required** | Indicates mandatory field for forms | `boolean` | `false` |
| **orientation** | Label placement. Options: "left", "right" | `string` | `"left"` |
| **id** | Unique identifier | `string` | `-` |
| **name** | Form field name | `string` | `-` |
| **value** | Form field value | `string` | `-` |
| **onBlur** | Called when focus is lost | `function` | `-` |
| **onFocus** | Called when focus is gained | `function` | `-` |
| **className** | Custom class for the wrapper | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Indeterminate](#indeterminate-state)
    - [Orientation](#label-orientation)
- [Reference](#reference)
