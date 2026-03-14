# SelectControl

Customizable select control for use with any type of floating UI

## Usage

```tsx
import { SelectControl } from "@openai/apps-sdk-ui/components/SelectControl";
import { Menu } from "@openai/apps-sdk-ui/components/Menu";
import { CalendarAlt } from "@openai/apps-sdk-ui/icons";

const Example = () => {
  const [value, setValue] = useState("");
  const placeholder = "Select date...";

  return (
    // Use any floating UI, like <Menu>, <Popover>, etc.
    <Menu>
      <Menu.Trigger>
        <SelectControl
          selected={!!value}
          onClearClick={() => setValue("")}
          StartIcon={CalendarAlt}
        >
          {value || placeholder}
        </SelectControl>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.RadioGroup value={value} onChange={setValue}>
          <Menu.RadioItem value="today">Today</Menu.RadioItem>
          <Menu.RadioItem value="tomorrow">Tomorrow</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu>
  );
};
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **variant** | Style variant for the control. Options: "soft", "outline", "ghost" | `string` | `"outline"` |
| **pill** | Determines if the control should be a fully rounded pill shape | `boolean` | `true` |
| **size** | Determines the size and spacing of the control. Options: "sm", "md", "lg", "3xs", "2xs", "xs", "xl", "2xl" | `string` | `"md"` |
| **block** | Extends the control to 100% of available width | `boolean` | `true` |
| **opticallyAlign** | Applies a negative margin to optically align with surrounding content. Options: "start", "end" | `string` | `-` |
| **disabled** | Disables the control visually and from interactions | `boolean` | `false` |
| **invalid** | Visually indicates that the control is in an invalid state | `boolean` | `false` |
| **selected** | Indicates that the control is selected. An unselected state will display placeholder styles. | `boolean` | `false` |
| **onClearClick** | Callback to display a clear action that allows the select to be unset. | `(() => void)` | `-` |
| **onInteract** | Primary handler for when the control is selected via pointer or keyboard. | `(() => void)` | `-` |
| **loading** | Displays a loading indicator on top of control contents | `boolean` | `false` |
| **dropdownIconType** | Icon displayed in the far right of the select trigger. Options: "none", "chevronDown", "dropdown" | `string` | `"dropdown"` |
| **StartIcon** | Icon displayed at the start of the control | `ComponentType<SVGProps<SVGSVGElement>>` | `-` |
| **ref** | Ref for the control wrapper | `Ref<HTMLSpanElement \| null>` | `-` |

## Examples

### Variants

Use the `variant` prop to stylize the select control. Available variant styles are similar to `<Button>`, but aligned with subtle differences from `<Input>` variant treatments.

```tsx
<SelectControl variant="soft">Soft variant</SelectControl>
<SelectControl variant="outline">Outline variant</SelectControl>
<SelectControl variant="ghost">Ghost variant</SelectControl>
```

### Sizing & roundness

Sizing of the control is determined with the `size` prop. Each size provides dynamic values for various aspects of the control, including icon and indicator placement, as well as font-size and gutter values.

Create fully rounded controls with the `pill` prop. When `pill` is set, extra horizontal gutter is dynamically applied, and the clear action is also set to pill.

```tsx
<SelectControl size="lg" pill>Large Pill</SelectControl>
<SelectControl size="sm">Small size</SelectControl>
```

### Selected

Use `selected` to indicate if the control has a selected value, which toggles visual placeholder styling. Note that this doesn't change the content of the control—that's handled manually.

```tsx
<SelectControl selected={false}>Placeholder style</SelectControl>
<SelectControl selected={true}>Selected style</SelectControl>
```

### Start icon

Use `StartIcon` to display an icon in the control. Sizing, spacing, and coloring are handled automatically.

```tsx
<SelectControl StartIcon={CalendarAlt}>Reader</SelectControl>
```

### Dropdown icon

Use `dropdownIconType` to control the presentation of the dropdown indicator.

```tsx
<SelectControl dropdownIconType="dropdown">Select...</SelectControl>
<SelectControl dropdownIconType="chevronDown">Select...</SelectControl>
<SelectControl dropdownIconType="none">Select...</SelectControl>
```

### Clearable

Pass a callback to `onClearClick` to enable the clearable action.

```tsx
<SelectControl
  selected
  onClearClick={() => console.log("Cleared")}
  onInteract={() => console.log("Interacted")}
>
  Sample value
</SelectControl>
```

### Loading

During loading, the dropdown icon and clear actions are automatically hidden. Interactions will be prevented by default during this state.

```tsx
<SelectControl loading>Loading models...</SelectControl>
```

### Invalid

Use `invalid` to visually indicate the control is in an invalid state.

```tsx
<SelectControl invalid>Pineapple on pizza</SelectControl>
```

### Disabled

Use `disabled` to both visually and accessibly disable the control.

```tsx
<SelectControl disabled>Reader</SelectControl>
```

### Block

Create full-width controls with the `block` prop.

```tsx
<div className="w-[290px]">
  <SelectControl block size="lg">Select...</SelectControl>
</div>
```

### Optical alignment

Use `opticallyAlign` with either "start" or "end" to offset the gutter of the control.

```tsx
<SelectControl opticallyAlign="start">Aligned start</SelectControl>
<SelectControl opticallyAlign="end">Aligned end</SelectControl>
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Variants](#variants)
    - [Sizing & roundness](#sizing--roundness)
    - [Selected](#selected)
    - [Start icon](#start-icon)
    - [Dropdown icon](#dropdown-icon)
    - [Clearable](#clearable)
    - [Loading](#loading)
    - [Invalid](#invalid)
    - [Disabled](#disabled)
    - [Block](#block)
    - [Optical alignment](#optical-alignment)
