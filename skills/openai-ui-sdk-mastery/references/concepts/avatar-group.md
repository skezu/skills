# AvatarGroup

Display multiple avatars as a single stack

## Usage

```tsx
import { AvatarGroup, Avatar } from "@openai/apps-sdk-ui/components/Avatar";

const Example = () => (
  <AvatarGroup size={32}>
    <Avatar name="Tyler" imageUrl="https://github.com/tnv.png" />
    <Avatar name="Jane" color="primary" />
    <Avatar name="+5" overflowCount={5} />
  </AvatarGroup>
);
```

## Overview

`AvatarGroup` provides a container to stack multiple `Avatar` components together. It automatically applies a negative margin and borders to create a cohesive stack. You can control the global size of the avatars and the stacking order.

## Examples

### Stacking direction

The `stack` prop controls whether the first or last avatar appears on top of the stack.

```tsx
<div className="flex flex-col gap-8">
  <AvatarGroup stack="start">
    <Avatar name="A" />
    <Avatar name="B" />
    <Avatar name="C" />
  </AvatarGroup>

  <AvatarGroup stack="end">
    <Avatar name="A" />
    <Avatar name="B" />
    <Avatar name="C" />
  </AvatarGroup>
</div>
```

### Group Sizing

Pass the `size` prop to the group to uniformly size all child avatars.

```tsx
<AvatarGroup size={48} stack="start">
  <Avatar color="info" name="Tyler" />
  <Avatar color="discovery" name="Jane" />
  <Avatar color="danger" name="Will" />
  <Avatar overflowCount={12} />
</AvatarGroup>
```

## Reference

### AvatarGroup

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **stack** | Determines layer order. Options: "start", "end" | `string` | `"start"` |
| **size** | Size of child avatars in pixels | `number` | `-` |
| **className** | Custom class applied to the container | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Stacking direction](#stacking-direction)
    - [Group sizing](#group-sizing)
- [Reference](#reference)
