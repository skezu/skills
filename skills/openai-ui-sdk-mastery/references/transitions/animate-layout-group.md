# AnimateLayoutGroup

Animate width & height of lists of components as they enter and exit

## Usage

```tsx
import { AnimateLayoutGroup } from "@openai/apps-sdk-ui/components/Transition";

const Example = () => {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const handleRemove = (id: number) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <AnimateLayoutGroup
      initial={{ y: -10, opacity: 0, blur: 0 }}
      enter={{ y: 0, delay: 150, duration: 600 }}
      exit={{ scale: 0.8, blur: 10, duration: 500 }}
      layoutEnter={{ duration: 400, timingFunction: "ease" }}
      layoutExit={{ delay: 150 }}
    >
      {list.map(({ id }) => (
        <div key={id} className="py-2" onClick={() => handleRemove(id)}>
          Item {id}
        </div>
      ))}
    </AnimateLayoutGroup>
  );
};
```

## Overview

`<AnimateLayoutGroup>` is an abstraction around `<TransitionGroup>` specifically designed for rendering lists of components, with batteries-included transition animations that can also animate height and width changes.

All of the same properties from `<Animate>` are supported here, as well as new properties for customizing the timing of layout transitions—`layoutEnter`, `layoutExit`, and `layoutMove`.

### When to use

`<AnimateLayoutGroup>` is great for animating lists of components that should naturally affect the layout of surrounding DOM nodes.

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Class passed to wrapping elements | `string` | `-` |
| **children*** | Components controlled by TransitionGroup rendering | `ReactNode` | `-` |
| **as** | Determines the tag used by wrapping elements. Options: "div", "span" | `string` | `-` |
| **insertMethod** | Determines how new children are added. Options: "append", "prepend" | `string` | `-` |
| **preventInitialTransition** | If true, enter transition is skipped during initial mounting | `boolean` | `true` |
| **hideOverflow** | If true, `overflow: hidden` is applied to wrapper | `boolean` | `false` |
| **itemAnchor** | Side items pin to during enter/exit. Options: "start", "end" | `string` | `"start"` |
| **dimension** | Property animated during transitions. Options: "width", "height" | `string` | `"height"` |
| **layoutEnter** | Configuration for layout enter transition | `LayoutTransitionDefinition` | `-` |
| **layoutExit** | Configuration for layout exit transition | `LayoutTransitionDefinition` | `-` |
| **layoutMove** | Configuration for layout move transition | `LayoutTransitionDefinition` | `-` |
| **enter** | Configuration for individual item enter transition | `TransitionDefinition` | `-` |
| **exit** | Configuration for individual item exit transition | `TransitionDefinition` | `-` |
| **initial** | Initial state of items | `InitialTransitionDefinition` | `-` |
| **transitionClassName**| Class applied to the inner TransitionGroup | `string` | `-` |
| **forceCompositeLayer**| Applies `will-change` to force composite layers. Use with caution! | `boolean` | `false` |

## Examples

### Vertical list

Items animate y-offset and opacity on entry, and scale/blur on exit.

```tsx
<AnimateLayoutGroup
  initial={{ y: -10, opacity: 0, blur: 0 }}
  enter={{ y: 0, delay: 150, duration: 600 }}
  exit={{ scale: 0.8, blur: 10, duration: 500 }}
  layoutEnter={{ duration: 400, timingFunction: "ease" }}
  layoutExit={{ delay: 150 }}
>
  {list.map(({ id }) => (
    <div key={id} className="py-2">
      <Item onClick={() => handleRemove(id)} />
    </div>
  ))}
</AnimateLayoutGroup>
```

### Horizontal list

By setting `dimension="width"`, the layout transitions will focus on horizontal space management.

```tsx
<AnimateLayoutGroup dimension="width">
  {list.map(({ id }) => (
    <div key={id} className="px-2">
      <Square onClick={() => handleRemove(id)} />
    </div>
  ))}
</AnimateLayoutGroup>
```

- [Usage](#usage)
- [Overview](#overview)
- [Reference](#reference)
- [Examples](#examples)
    - [Vertical list](#vertical-list)
    - [Horizontal list](#horizontal-list)
