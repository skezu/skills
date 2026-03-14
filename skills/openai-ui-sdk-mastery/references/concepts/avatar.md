# Avatar

Display user identities with text, photos, or icons

## Usage

```tsx
import { Avatar } from "@openai/apps-sdk-ui/components/Avatar";

const Example = () => (
  <Avatar
    name="Jane Doe"
    size={48}
  />
);
```

## Overview

The `Avatar` component represents a user or entity. It can display an image, the first initial of a name, a specific icon, or an overflow count. It supports various visual states, colors, and interactive behaviors.

## Examples

### Text

Displays a single initial derived from the `name` prop.

```tsx
<Avatar name="David" size={48} />
```

### Image

Displays a remote image. It includes a soft fade entrance on load and falls back to text initials if the image fails.

```tsx
<Avatar
  imageUrl="https://github.com/tnv.png"
  name="Tyler"
  size={48}
/>
```

### Icon

Displays a custom icon within the avatar circle.

```tsx
import { RobotIcon } from "@openai/apps-sdk-ui/icons";

<Avatar Icon={RobotIcon} size={48} />
```

### Overflow count

Useful for indicating additional hidden items in a list or group.

```tsx
<Avatar overflowCount={12} size={48} />
```

### Colors & variants

Use `color` and `variant` to change the background and text appearance.

```tsx
<div className="flex gap-4">
  <Avatar color="primary" name="A" variant="soft" />
  <Avatar color="success" name="B" variant="solid" />
  <Avatar color="danger" name="C" variant="solid" />
</div>
```

### Custom Roundness

While fully rounded by default, you can override the border-radius using `className`.

```tsx
<Avatar
  className="rounded-lg"
  color="primary"
  name="Acme"
  size={64}
  variant="solid"
/>
```

### Interactive

Passing an `onClick` or `onPointerDown` handler makes the avatar interactive with appropriate hover and focus states.

```tsx
<Avatar
  name="Will"
  size={48}
  onClick={() => alert("Avatar clicked!")}
/>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **name** | Name used for initials | `string` | `""` |
| **size** | Dimensions in pixels (width and height) | `number` | `-` |
| **className** | Custom class applied to container | `string` | `-` |
| **overflowCount** | Formatted count display | `number` | `-` |
| **color** | Tone of the avatar. Options: "primary", "secondary", "success", "info", "discovery", "danger" | `string` | `"secondary"` |
| **variant** | Visual style. Options: "soft", "solid" | `string` | `"soft"` |
| **imageUrl** | URL of the profile image | `string` | `-` |
| **Icon** | SVGR icon component to render | `Component` | `-` |
| **onClick** | Optional click event handler | `function` | `-` |
| **onPointerDown** | Optional pointer event handler | `function` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Text](#text)
    - [Image](#image)
    - [Icon](#icon)
    - [Overflow count](#overflow-count)
    - [Colors & variants](#colors--variants)
    - [Roundness](#roundness)
    - [Interactive](#interactive)
- [Reference](#reference)
