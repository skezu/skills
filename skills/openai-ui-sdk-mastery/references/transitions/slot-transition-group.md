# SlotTransitionGroup

Primitive for rendering components over time (slot-based)

## Usage

```tsx
import { SlotTransitionGroup } from "@openai/apps-sdk-ui/components/Transition";

const Example = ({ show }) => (
  <SlotTransitionGroup enterDuration={2000} exitDuration={1000}>
    {show && <div key="s" className="example-block" />}
  </SlotTransitionGroup>
);
```

```css
/* Styling based on data attributes */
.example-block {
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

`<SlotTransitionGroup>` manages the mounting and unmounting of components over time by applying stateful data attributes directly to the original child element(s). No wrapper elements are introduced.

When keyed children are mounted or unmounted, `<SlotTransitionGroup>` adds transition state data attributes on the child node itself. The timing of these stateful attributes is controlled with `enterDuration` and `exitDuration`. Children must provide a stable key for transitions to be tracked correctly.

### When to use

- Prefer `<Animate>`, `<AnimateLayout>`, or `<AnimateLayoutGroup>` first for standard animations.
- Use `<SlotTransitionGroup>` when you need `<TransitionGroup>`-like control but without any extra wrapper nodes in the DOM.

## Transition states

There are five data attributes applied directly to child elements during transitions. These attributes are transient and removed when no longer relevant. No styles are provided by default.

| Attribute | Description |
| :--- | :--- |
| `data-entering` | Component enter transition is staged. applied throughout the entire entrance transition. |
| `data-entering-active` | Component enter transition is active. |
| `data-exiting` | Component exit transition is staged. applied throughout the entire exit transition. |
| `data-exiting-active` | Component exit transition is active. |
| `data-interrupted` | Component was animating and then switched to the opposite transition before completion. |

## Initial mount transitions

By default, `<SlotTransitionGroup>` prevents initial transitions of children when it is mounted. If you want children to transition on the initial mount of the group, pass `preventInitialTransition={false}`.

```tsx
<SlotTransitionGroup preventInitialTransition={false}>
  {show && <Sample key="s" />}
</SlotTransitionGroup>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **children*** | Components controlled by rendering | `ReactNode` | `-` |
| **enterDuration** | Duration of enter state application | `number` | `-` |
| **exitDuration** | Duration of exit state application | `number` | `-` |
| **preventInitialTransition** | Apply enter transition during mounting of group | `boolean` | `true` |
| **enterMountDelay** | Delay in MS before mounting child (null for no delay) | `number` | `-` |
| **disableAnimations** | Skip transition timings and render immediately | `boolean` | `-` |
| **insertMethod** | New children order in array ("append", "prepend") | `string` | `-` |
| **ref** | Ref applied to single child when possible | `Ref<unknown>` | `-` |
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
