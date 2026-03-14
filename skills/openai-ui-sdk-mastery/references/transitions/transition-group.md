# TransitionGroup

Primitive for rendering components over time

## Usage

```tsx
import { TransitionGroup } from "@openai/apps-sdk-ui/components/Transition";

const Example = ({ show }) => (
  <TransitionGroup className="example-container" enterDuration={2000} exitDuration={1000}>
    {show && <div key="s" className="example-item" />}
  </TransitionGroup>
);
```

```css
/* Styling based on data attributes */
.example-container {
  &[data-entering] {
    opacity: 0;
  }

  &[data-entering-active] {
    opacity: 1;
    transition: opacity 2s ease;
  }

  &[data-exiting-active] {
    opacity: 0;
    transition: opacity 1s ease;
  }
}
```

## Overview

`<TransitionGroup>` manages the mounting and unmounting of components over time by controlling the rendering of children passed to the component.

When children are mounted and unmounted, `<TransitionGroup>` wraps the components with a containing element and applies stateful data attributes for entering and exiting transitions.

The timing of component rendering and stateful data attributes is based on `enterDuration` and `exitDuration` values. Children must provide a stable key to correctly keep track of component references.

### When to use

Always reach for `<Animate>`, `<AnimateLayout>`, or `<AnimateLayoutGroup>` before using `<TransitionGroup>` directly. Direct use of this primitive should only be necessary for very complex transitions with many moving parts.

## Transition states

There are five total data attributes that represent the possible state of transitions. These attributes are transient and only applied while relevant. No styles are provided by default.

| Attribute | Description |
| :--- | :--- |
| `data-entering` | Component enter transition is about to start. useful for staging enter animation styles. Remains applied through the entire entrance transition. |
| `data-entering-active` | Component enter transition is active. |
| `data-exiting` | Component exit transition is about to start. useful for staging exit animation styles. Remains applied through the entire exit transition. |
| `data-exiting-active` | Component exit transition is active. |
| `data-interrupted` | Component was animating, but then changed to the opposite transition before completion. |

## Initial mount transitions

By default, `<TransitionGroup>` prevents initial transitions of children components when it itself is mounted to the DOM. To allow transitions on initial mount, pass `preventInitialTransition={false}`.

```tsx
<TransitionGroup preventInitialTransition={false}>
  {show && <Sample key="s" />}
</TransitionGroup>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **children*** | Components controlled by rendering | `ReactNode` | `-` |
| **as** | Wrapping element tag. Options: "div", "span" | `string` | `-` |
| **className** | Class passed to wrapping elements | `string` | `-` |
| **transitionId** | Identifier passed as `[data-transition-id]` | `string` | `-` |
| **enterDuration** | Duration of enter state application | `number` | `-` |
| **exitDuration** | Duration of exit state application | `number` | `-` |
| **preventInitialTransition** | Skip enter transition during initial mount | `boolean` | `true` |
| **enterMountDelay** | Delay in MS before mounting child (null for no delay) | `number` | `-` |
| **disableAnimations** | Skip transition timings and render immediately | `boolean` | `-` |
| **insertMethod** | New children order in array ("append", "prepend") | `string` | `-` |
| **style** | Styles applied to wrapping elements | `CSSProperties` | `-` |
| **ref** | Ref for the TransitionGroup | `Ref<unknown>` | `-` |
| **onEnter** | Fired when enter animation staged | `Callback` | `-` |
| **onEnterActive** | Fired when enter animation starts | `Callback` | `-` |
| **onEnterComplete** | Fired when enter animation completes | `Callback` | `-` |
| **onExit** | Fired when exit animation staged | `Callback` | `-` |
| **onExitActive** | Fired when exit animation starts | `Callback` | `-` |
| **onExitComplete** | Fired when exit animation completes | `Callback` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Transition states](#transition-states)
- [Initial mount transitions](#initial-mount-transitions)
- [Reference](#reference)
