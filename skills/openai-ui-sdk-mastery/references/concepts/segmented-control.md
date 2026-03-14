# SegmentedControl

Toggle through grouped options

## Usage

```tsx
import { SegmentedControl } from "@openai/apps-sdk-ui/components/SegmentedControl";

const Example = () => {
  const [view, setView] = useState("all");

  return (
    <SegmentedControl
      aria-label="Select view"
      value={view}
      onChange={setView}
    >
      <SegmentedControl.Option value="all">
        All
      </SegmentedControl.Option>
      <SegmentedControl.Option value="failed">
        Failed
      </SegmentedControl.Option>
      <SegmentedControl.Option value="successful">
        Successful
      </SegmentedControl.Option>
    </SegmentedControl>
  );
};
```

## Reference

### SegmentedControl
| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **value*** | Controlled value for the group | `string` | `-` |
| **onChange** | Callback for when a new value is selected | `((nextValue: T) => void)` | `-` |
| **onClick** | Callback any time the control is clicked | `(() => void)` | `-` |
| **aria-label*** | Text read aloud to screen readers when the control is focused | `string` | `-` |
| **size** | Controls the size of the segmented control. Options: "sm", "md", "lg", "3xs", "2xs", "xs", "xl", "2xl" | `string` | `"md"` |
| **gutterSize** | Controls gutter on the edges of the button. Options: "sm", "md", "lg", "2xs", "xs", "xl" | `string` | `-` |
| **disabled** | Disable the entire group | `boolean` | `-` |
| **block** | Display the control as a block element with equal width segments | `boolean` | `false` |
| **pill** | Determines if the segment control and its options should be a fully rounded pill shape. | `boolean` | `true` |
| **className** | Custom class applied to the control container | `string` | `-` |

### SegmentedControl.Option
| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **value*** | Option value | `string` | `-` |
| **aria-label** | Text read aloud to screen readers when the option is focused | `string` | `-` |
| **children*** | Content to render in the option | `ReactNode` | `-` |
| **disabled** | Disable the individual option | `boolean` | `-` |

## Examples

### Sizing & roundness

Sizing of the control is controlled with `size` and `gutterSize` props. `size` sets the control to a specific height, and `gutterSize` sets the horizontal padding of the inner options.

Each size provides default values for `gutterSize`, as well as `font-size` and `border-radius`. Each of these values can be overridden independently.

Create a fully rounded control with the `pill` prop. When `pill` is set, extra horizontal gutter is dynamically applied to the inner options.

```tsx
<SegmentedControl size="lg" pill gutterSize="sm" aria-label="Large rounded control">
  <SegmentedControl.Option value="1">Option 1</SegmentedControl.Option>
  <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
</SegmentedControl>
```

### Block

Create full-width controls with the `block` prop.

```tsx
<SegmentedControl block aria-label="Block control">
  <SegmentedControl.Option value="1">All</SegmentedControl.Option>
  <SegmentedControl.Option value="2">Favorites</SegmentedControl.Option>
  <SegmentedControl.Option value="3">Archived</SegmentedControl.Option>
</SegmentedControl>
```

### Disabled group

Use `disabled` on the `SegmentedControl` root to disable all options.

```tsx
<SegmentedControl disabled aria-label="Disabled group">
  <SegmentedControl.Option value="1">Option 1</SegmentedControl.Option>
  <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
</SegmentedControl>
```

### Disabled option

Use `disabled` on a given `SegmentedControl.Option` to disable only that option.

```tsx
<SegmentedControl aria-label="Single disabled option">
  <SegmentedControl.Option value="1">Available</SegmentedControl.Option>
  <SegmentedControl.Option value="2" disabled>Unavailable</SegmentedControl.Option>
</SegmentedControl>
```

### Scrollable

`SegmentedControl` can support scrolling, but is not enabled by default.

To create a scrollable segmented control, wrap the component in a simple flex wrapper, which will then cause the control to create inner scrolling when applicable. When scrollable, the selected option will automatically be scrolled into view.

```tsx
<div className="flex">
  <SegmentedControl aria-label="Scrollable control">
    <SegmentedControl.Option value="1">Option 1</SegmentedControl.Option>
    <SegmentedControl.Option value="2">Option 2</SegmentedControl.Option>
    {/* ... more options ... */}
  </SegmentedControl>
</div>
```

- [Usage](#usage)
- [Reference](#reference)
    - [SegmentedControl](#segmentedcontrol)
    - [SegmentedControl.Option](#segmentedcontroloption)
- [Examples](#examples)
    - [Sizing & roundness](#sizing--roundness)
    - [Block](#block)
    - [Disabled group](#disabled-group)
    - [Disabled option](#disabled-option)
    - [Scrollable](#scrollable)
