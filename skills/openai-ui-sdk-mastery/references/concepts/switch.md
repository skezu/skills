# Switch

Toggle control for on and off states

## Usage

```tsx
import { Switch } from "@openai/apps-sdk-ui/components/Switch";

const Example = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch 
      checked={enabled} 
      onCheckedChange={setEnabled} 
      label="Enable feature"
    />
  );
};
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **id** | The id of the switch | `string` | `-` |
| **defaultChecked** | Initial state when uncontrolled | `boolean` | `-` |
| **checked** | The controlled state of the switch | `boolean` | `-` |
| **label** | Accessible label rendered next to the switch | `ReactNode` | `-` |
| **onCheckedChange** | Event handler called when state changes | `((nextState: boolean) => void)` | `-` |
| **onBlur** | blur event handler | `FocusEventHandler<HTMLButtonElement>` | `-` |
| **onFocus** | focus event handler | `FocusEventHandler<HTMLButtonElement>` | `-` |
| **disabled** | Prevents user interaction | `boolean` | `-` |
| **required** | Indicates field must be checked for form submission | `boolean` | `-` |
| **name** | Form name for the switch | `string` | `-` |
| **value** | Value submitted with a name | `string` | `-` |
| **className** | CSS classes applied to wrapper node | `string` | `-` |
| **labelPosition** | Position of the label. Options: "start", "end" | `string` | `"end"` |

## Examples

### With label

You can add a label via the `label` prop. It automatically connects to the switch with an internal ID.

```tsx
<Switch label="Notifications" />
```

### Label position

Set `labelPosition="start"` to place the label on the left side of the switch.

```tsx
<Switch
  label="Right aligned"
  labelPosition="start"
/>
```

### Default checked

Initialize the switch with `defaultChecked` when you don't need to control its state.

```tsx
<Switch
  defaultChecked
  name="feature-enabled"
/>
```

### Controlled

Pass `checked` and `onCheckedChange` to manage the state manually.

```tsx
const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />;
```

### Disabled

Use `disabled` to prevent the user from toggling the control.

```tsx
<div className="flex gap-6">
  <Switch disabled />
  <Switch
    checked
    disabled
  />
</div>
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [With label](#with-label)
    - [Label position](#label-position)
    - [Default checked](#default-checked)
    - [Controlled](#controlled)
    - [Disabled](#disabled)
