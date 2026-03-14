# AnimateLayout

Animate width & height of components as they mount and unmount

## Usage

```tsx
import { AnimateLayout } from "@openai/apps-sdk-ui/components/Transition";

const Example = ({ show }) => (
  <AnimateLayout transitionClassName="pt-4">
    {show && <div key="content" className="w-full h-[80px] bg-primary" />}
  </AnimateLayout>
);
```

## Overview

`<AnimateLayout>` is an abstraction around `<TransitionGroup>` for batteries-included transition animations that can also animate height and width changes during transitions.

All of the same properties from `<Animate>` are supported here, as well as new properties for customizing the timing of layout transitions—`layoutEnter`, `layoutExit`, and `layoutMove`.

### When to use

`<AnimateLayout>` is great for transitions that should naturally affect the layout of surrounding DOM nodes. It's intended for transitioning between states that occupy the same space:

- `null` → Component
- Component → `null`
- Component → AnotherComponent

## Examples

### Height

By default, `<AnimateLayout>` animates the height of a component as it enters and exits the DOM.

```tsx
<>
  <Line className="w-full h-12" />
  <AnimateLayout transitionClassName="pt-4">
    {show && <PrimaryLine key="s" className="w-full h-[80px]" />}
  </AnimateLayout>
  <Line className="w-full h-12 mt-4" /> 
</>
```

### Width

You can also animate the width of components by passing `dimension="width"`.

```tsx
<div className="flex">
  <Square className="w-[200px] h-[200px]" />
  <AnimateLayout
    dimension="width"
    transitionClassName="pl-6"
    enter={{ delay: 200 }}
    layoutExit={{ delay: 75 }}
  >
    {show && <PrimarySquare key="s" className="w-[200px] h-[200px]" />}
  </AnimateLayout>
  <Square className="w-[200px] h-[200px] ml-6" />
</div>
```

### Accordion

Accordion items are a great example of dynamic content that affects surrounding layout.

```tsx
<AnimateLayout
  enter={{ y: 0, delay: 150, duration: 450 }}
  exit={{ y: -8 }}
  layoutEnter={{ duration: 400 }}
>
  {open && (
    <div key="content" className="pb-4 text-secondary">
      {children}
    </div>
  )}
</AnimateLayout>
```

### Talk button

When animating width, the height should remain consistent. Use `transitionClassName` to maintain layout structure.

```tsx
<Button
  color={recording ? "danger" : "primary"}
  onClick={handleClick}
>
  <AnimateLayout dimension="width" transitionClassName="h-full flex items-center gap-2">
    {recording ? (
      <ArrowUp key="recording" />
    ) : (
      <Fragment key="record">
        <Wave /> Talk
      </Fragment>
    )}
  </AnimateLayout>
</Button>
```

## Gotchas

- `<AnimateLayout>` provides a wrapping element. Apply transition properties here.
- Avoid box model properties like `margin`, `padding`, or `border` on `className`. These can't be easily animated as they are additive to the height of the empty state.
- Avoid `box-shadow` on `className` as it remains visible when the component is hidden.
- `margin` cannot be animated and should be avoided on children. Use `padding` instead, as it's included in height calculations.

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Class passed to wrapping elements | `string` | `-` |
| **children*** | Components controlled by TransitionGroup | `ReactNode` | `-` |
| **as** | Wrapping element tag. Options: "div", "span" | `string` | `-` |
| **insertMethod** | How new children are added. Options: "append", "prepend" | `string` | `-` |
| **preventInitialTransition** | Skip enter transition during initial mount | `boolean` | `true` |
| **hideOverflow** | Apply `overflow: hidden` to wrapper | `boolean` | `false` |
| **itemAnchor** | Side items pin to. Options: "start", "end" | `string` | `"start"` |
| **dimension** | Property to animate. Options: "width", "height" | `string` | `"height"` |
| **layoutEnter** | Layout enter transition config | `LayoutTransitionDefinition` | `-` |
| **layoutExit** | Layout exit transition config | `LayoutTransitionDefinition` | `-` |
| **layoutMove** | Layout move transition config | `LayoutTransitionDefinition` | `-` |
| **enter** | Individual item enter transition config | `TransitionDefinition` | `-` |
| **exit** | Individual item exit transition config | `TransitionDefinition` | `-` |
| **initial** | Initial state of items | `InitialTransitionDefinition` | `-` |
| **transitionClassName**| Class applied to the inner TransitionGroup | `string` | `-` |
| **forceCompositeLayer**| Force composite layers via `will-change` | `boolean` | `false` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Height](#height)
    - [Width](#width)
    - [Accordion](#accordion)
    - [Talk button](#talk-button)
- [Gotchas](#gotchas)
- [Reference](#reference)
