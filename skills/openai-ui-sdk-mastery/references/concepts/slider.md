# Slider

Fine-tune values within a set range

## Usage

```tsx
import { Slider } from "@openai/apps-sdk-ui/components/Slider";

const Example = () => {
  const [value, setValue] = useState(1000);

  return (
    <div style={{ width: 300 }}>
      <Slider
        label="Example field"
        max={2000}
        min={0}
        onChange={setValue}
        resetValue={1000}
        step={10}
        unit="ms"
        value={value}
      />
    </div>
  );
};
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **label** | Optional label for the slider | `ReactNode` | `-` |
| **min*** | The minimum value the slider can have | `number` | `-` |
| **max*** | The maximum value the slider can have | `number` | `-` |
| **resetValue** | Value offered as a "reset to default" option | `number` | `-` |
| **step*** | The step increment between slider values | `number` | `-` |
| **unit** | Unit to display (e.g., ms, px) | `string` | `-` |
| **disabled** | Whether the slider is disabled | `boolean` | `false` |
| **value*** | The current value of the slider | `number` | `-` |
| **resetTooltip** | String displayed in the reset tooltip | `string` | `"Reset to default"` |
| **prefixUnit** | Unit to display to the right of the value | `string` | `-` |
| **marks** | List of marks to display below the track | `SliderMark[]` | `-` |
| **trackColor** | Color of the slider track | `string` | `-` |
| **rangeColor** | Color of the progress along the track | `string` | `-` |
| **className** | Custom class for the slider container | `string` | `-` |
| **onChange*** | Callback invoked when value changes | `(value: number) => void` | `-` |
| **onBlur** | blur event handler | `FocusEventHandler<HTMLInputElement>` | `-` |
| **onFocus** | focus event handler | `FocusEventHandler<HTMLInputElement>` | `-` |

## Examples

### Adding a tooltip

A tooltip can be added to the Slider label by providing JSX instead of a simple string.

```tsx
<Slider
  label={(
    <Tooltip content="More details about this field">
      <TriggerDecorator>Example field</TriggerDecorator>
    </Tooltip>
  )}
  max={2000}
  min={0}
  onChange={(v) => console.log(v)}
  resetValue={1000}
  step={10}
  unit="ms"
  value={1000}
/>
```

### Marks

Slider marks can be added by passing an array of values to the `marks` prop. Responsive behaviors are handled automatically.

```tsx
const [value, setValue] = useState(2);

<Slider
  value={value}
  onChange={setValue}
  label="Passing grade"
  min={1}
  max={3}
  step={1}
  marks={[
    { value: 1, label: "Inaccurate" },
    { value: 2, label: "Some inaccuracies" },
    { value: 3, label: "Accurate" },
  ]}
  trackColor="#61C454"
  rangeColor="#EF4146"
/>
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Adding a tooltip](#adding-a-tooltip)
    - [Marks](#marks)
