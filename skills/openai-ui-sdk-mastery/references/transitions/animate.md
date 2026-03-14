# Animate

Animate components as they mount and unmount

## Usage

```tsx
import { Animate } from "@openai/apps-sdk-ui/components/Transition";

const Example = ({ visible }) => (
  <Animate className="w-[200px] h-[200px]">
    {visible && <div key="s" className="w-full h-full bg-primary" />}
  </Animate>
);
```

## Overview

`<Animate>` is an abstraction around `<TransitionGroup>` for batteries-included transition animations.

`enter`, `exit`, and `initial` props allow you to define the behavior of the animation from a set of GPU-accelerated properties. Animatable properties include: `opacity`, `x`, `y`, `scale`, `rotate`, `skewX`, `skewY`, and `blur`.

### When to use

`<Animate>` is great for transitions that don't need to affect the layout of surrounding DOM nodes. Typically, this will mean components with a fixed size or absolute positioning. It's intended for transitioning between states that occupy the same space:

- `null` → Component
- Component → `null`
- Component → AnotherComponent

## Examples

### Fade

By default, `<Animate>` provides a simple fade in/out transition, using ease timing functions.

```tsx
<Animate className="w-[200px] h-[200px]">
  {visible && <Square key="s" />}
</Animate>
```

### Grow

You can extend the basic fade behavior by providing transform properties to `enter`, `exit`, and `initial`. When transform properties are passed, cubic timing functions (`--cubic-enter` and `--cubic-ext`) are automatically applied.

```tsx
<Animate
  className="w-[200px] h-[200px]"
  enter={{ scale: 1 }}
  exit={{ scale: 0.5, blur: 20 }}
>
  {visible && <Square key="s" />}
</Animate>
```

### Continuous transitions

By default, `<Animate>` toggles between `enter` and `exit` definitions. You can differentiate entrance and exit transitions by using the `initial` property.

```tsx
<Animate
  className="w-[200px] h-[200px]"
  initial={{ x: 120, skewX: 30 }}
  enter={{ duration: 800 }}
  exit={{ x: -120, skewX: -8, duration: 500 }}
>
  {visible && <Square key="s" />}
</Animate>
```

### Cross fade

Easily create cross fade effects between components, such as icons within a button or page transitions.

```tsx
<Button size="2xl" variant="soft" onClick={handleClick}>
  <Animate
    className="w-10 h-10"
    enter={{ scale: 1, delay: 150, duration: 400 }}
    exit={{ scale: 0.6, duration: 150 }}
  >
    {followed ? <Check key="followed" /> : <Plus key="follow" />}
  </Animate>
</Button>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Class passed to wrapping elements | `string` | `-` |
| **children*** | Components controlled by TransitionGroup | `ReactNode` | `-` |
| **as** | Wrapping element tag. Options: "div", "span" | `string` | `-` |
| **insertMethod** | How new children are added. Options: "append", "prepend" | `string` | `-` |
| **preventInitialTransition** | Skip enter transition during initial mount | `boolean` | `true` |
| **transitionClassName**| Class applied to the inner TransitionGroup | `string` | `-` |
| **enter** | Styles/config for enter transition | `TransitionDefinition` | `-` |
| **exit** | Styles/config for exit transition | `TransitionDefinition` | `-` |
| **initial** | Initial state before enter transition | `InitialTransitionDefinition`| `-` |
| **transitionPosition** | Position of transition states. Options: "static", "absolute"| `string` | `"absolute"` |
| **forceCompositeLayer**| Force composite layers via `will-change` | `boolean` | `false` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Fade](#fade)
    - [Grow](#grow)
    - [Continuous transitions](#continuous-transitions)
    - [Cross fade](#cross-fade)
- [Reference](#reference)
