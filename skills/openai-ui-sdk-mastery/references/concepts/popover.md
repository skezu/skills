# Popover

A flexible floating UI utility for contextual content and actions

## Usage

```tsx
import { Popover } from "@openai/apps-sdk-ui/components/Popover";
import { Button } from "@openai/apps-sdk-ui/components/Button";

const Example = () => (
  <Popover>
    <Popover.Trigger>
      <Button color="primary">Trigger Popover</Button>
    </Popover.Trigger>
    
    <Popover.Content side="bottom" align="center">
      <div className="p-4">
        <h3>Popover Content</h3>
        <p>This is a contextual popover with custom content.</p>
      </div>
    </Popover.Content>
  </Popover>
);
```

## Overview

The `Popover` component displays content in a floating container relative to a trigger element. It is built on top of Radix UI and handles positioning, collisions, and keyboard interactions (like the Escape key) out of the box.

### Sub-components

- **Popover**: The root container that manages the open/closed state.
- **Popover.Trigger**: The element that toggles the popover's visibility.
- **Popover.Content**: The floating container holding the content.
- **Popover.Anchor**: (Optional) Used to position the popover against a different element than the trigger.

## Examples

### Custom Sizing

Control the popover's dimensions using `width`, `minWidth`, and `maxWidth`.

```tsx
<Popover>
  <Popover.Trigger>
    <Button variant="outline">Wide Popover</Button>
  </Popover.Trigger>
  <Popover.Content width={500} side="right">
    <div className="p-4">Custom 500px wide content.</div>
  </Popover.Content>
</Popover>
```

### Show on Hover

Enable `showOnHover` for lightweight contextual info. Note: Standard tooltips are usually preferred for text-only hover states.

```tsx
<Popover showOnHover>
  <Popover.Trigger>
    <span className="underline cursor-help">Hover for info</span>
  </Popover.Trigger>
  <Popover.Content>
    <div className="p-2">Rich hover content with links or icons.</div>
  </Popover.Content>
</Popover>
```

### Programmatic Control

Use `usePopoverController()` within children of `Popover.Content` to imperatively close the popover or trigger a "shake" animation for invalid states.

```tsx
import { usePopoverController } from "@openai/apps-sdk-ui/components/Popover";

const InternalForm = () => {
  const { close, shake } = usePopoverController();
  
  const onSave = () => {
    if (isValid) close();
    else shake();
  };

  return <Button onClick={onSave}>Save</Button>;
};
```

## Reference

### Popover (Root)

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **open** | Controlled visibility state | `boolean` | `-` |
| **onOpenChange** | Visibility change callback | `function` | `-` |
| **showOnHover** | Show on hover/focus | `boolean` | `false` |
| **hoverOpenDelay** | Delay for hover trigger (ms) | `number` | `150` |

### Popover.Content

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **side** | Placement. Options: "top", "right", "bottom", "left" | `string` | `"bottom"` |
| **sideOffset** | Distance from trigger (px) | `number` | `8` |
| **align** | Alignment. Options: "start", "center", "end" | `string` | `"center"` |
| **width** | Pixel width | `number \| "auto"` | `"auto"` |
| **minWidth** | Pixel min-width | `number \| "auto"` | `300` |
| **translucent** | Glassmorphism effect | `boolean` | `false` |
| **autoFocus** | Focus first element on open | `boolean` | `true` |
| **className** | Custom class for content | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Sizing](#custom-sizing)
    - [Hover](#show-on-hover)
    - [Controller](#programmatic-control)
- [Reference](#reference)
