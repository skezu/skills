# Badge

Emphasize details with a status indicator

## Usage

```tsx
import { Badge } from "@openai/apps-sdk-ui/components/Badge";

const Example = () => (
  <Badge color="success" size="md">
    New
  </Badge>
);
```

## Overview

The `Badge` component is a small label used to highlight status, categories, or specific attributes of an item. It supports multiple colors, sizing levels, and visual variants like soft, solid, or outline.

## Examples

### Colors & variants

Stylize the badge using the `color` and `variant` props to convey different meanings.

```tsx
<div className="flex gap-4">
  <Badge variant="soft" color="success">Approved</Badge>
  <Badge variant="solid" color="danger">Failed</Badge>
  <Badge variant="outline" color="info">Beta</Badge>
</div>
```

### Size & roundness

Control the scale and shape with `size` and `pill`.

```tsx
<div className="flex items-center gap-4">
  <Badge size="sm">Small</Badge>
  <Badge size="md" pill>Medium Pill</Badge>
  <Badge size="lg">Large</Badge>
</div>
```

### With Icons & Indicators

Badges can contain icons or loading indicators. They automatically adjust spacing and alignment.

```tsx
<div className="flex gap-4">
  <Badge color="warning" size="lg">
    <SparklesIcon className="w-3 h-3" /> Featured
  </Badge>
  
  <Badge className="gap-1.5" color="secondary" size="lg">
    <LoadingIndicator size={12} />
    Syncing...
  </Badge>
</div>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **children*** | Content to render inside | `ReactNode` | `-` |
| **color** | Tone of the badge. Options: "secondary", "success", "info", "discovery", "danger", "warning" | `string` | `"secondary"` |
| **size** | Scale level. Options: "sm", "md", "lg" | `string` | `"sm"` |
| **pill** | Fully rounded shape with extra padding | `boolean` | `false` |
| **variant** | Visual style. Options: "soft", "solid", "outline" | `string` | `"soft"` |
| **className** | Custom class applied to container | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Colors & variants](#colors--variants)
    - [Size & roundness](#size--roundness)
    - [With Icons & Indicators](#with-icons--indicators)
- [Reference](#reference)
