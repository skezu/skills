# RadioGroup

Semantic radio option selection

## Usage

```tsx
import { RadioGroup } from "@openai/apps-sdk-ui/components/RadioGroup";

const Example = () => {
  const [frequency, setFrequency] = useState("daily");

  return (
    <div>
      <h3 className="font-semibold text-sm mb-3">Notification frequency</h3>
      <RadioGroup
        direction="col"
        value={frequency}
        onChange={setFrequency}
        aria-label="Notification frequency"
      >
        <RadioGroup.Item value="daily">Daily</RadioGroup.Item>
        <RadioGroup.Item value="weekly">Weekly</RadioGroup.Item>
        <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
        <RadioGroup.Item value="never">Never</RadioGroup.Item>
      </RadioGroup>
    </div>
  );
};
```

## Reference

### RadioGroup
| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **disabled** | Controls whether the entire radio group is disabled | `boolean` | `false` |
| **defaultValue** | The default value of the radio group | `string` | `-` |
| **value** | The controlled value of the radio group | `string` | `-` |
| **name** | The name of the radio group | `string` | `-` |
| **onChange** | Callback triggered when selection changes | `((value: T) => void)` | `-` |
| **aria-label*** | Accessible label for the radio options | `string` | `-` |
| **direction** | Determines the layout direction of the radio items. Options: "row", "col" | `string` | `"row"` |
| **className** | Class applied to the radio group container | `string` | `-` |
| **required** | Whether the radio group is required | `boolean` | `-` |

### RadioGroup.Item
| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **value*** | The value of the radio item | `string` | `-` |
| **disabled** | Determines if a given radio item is disabled | `boolean` | `false` |
| **required** | Whether the radio item is required | `boolean` | `-` |
| **block** | Whether the radio item should take up 100% width | `boolean` | `false` |
| **className** | Custom class applied to the radio item container | `string` | `-` |

## Examples

### Direction

Use `direction` to control whether the items flow in a column or row. An optimal gap will be dynamically applied based on the orientation.

```tsx
<RadioGroup
  aria-label="Sample options"
  direction="col"
>
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup>
```

### Group disabled

Use `disabled` on `RadioGroup` to disable all radio options.

```tsx
<RadioGroup disabled aria-label="Disabled group">
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup>
```

### Item disabled

Use `disabled` on a single `RadioGroup.Item` to disable only that option.

```tsx
<RadioGroup aria-label="Single disabled item">
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2" disabled>Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup>
```

### Complex layout

Instrument complex layouts by leveraging component composition and `className` overrides.

```tsx
const ComplexExample = () => (
  <RadioGroup className="flex-col w-[390px] gap-4" onChange={() => {}} aria-label="Sample options">
    <RadioGroup.Item className="gap-2.5" value="basic">
      <div>
        <h4 className="font-semibold mb-1">Basic Plan</h4>
        <p className="text-secondary text-sm">5 GB storage • Email support • Free</p>
      </div>
    </RadioGroup.Item>
    <hr className="border-default" />
    <RadioGroup.Item className="gap-2.5" value="standard">
      <div>
        <h4 className="font-semibold mb-1">Standard Plan</h4>
        <p className="text-secondary text-sm">100 GB storage • Priority email support • $9.99/m</p>
      </div>
    </RadioGroup.Item>
    <hr className="border-default" />
    <Tooltip
      maxWidth={258}
      content={<>Contact our <TextLink href="#">support team</TextLink> for more information on enterprise plans.</>}
      interactive
    >
      <Tooltip.Trigger>
        <RadioGroup.Item className="gap-2.5" value="enterprise" disabled>
          <div>
            <h4 className="font-semibold mb-1">Enterprise Plan</h4>
            <p className="text-secondary text-sm">
              Unlimited storage • 24/7 phone support • Custom pricing
            </p>
          </div>
        </RadioGroup.Item>
      </Tooltip.Trigger>
    </Tooltip>
  </RadioGroup>
);
```

- [Usage](#usage)
- [Reference](#reference)
    - [RadioGroup](#radiogroup)
    - [RadioGroup.Item](#radiogroupitem)
- [Examples](#examples)
    - [Direction](#direction)
    - [Group disabled](#group-disabled)
    - [Item disabled](#item-disabled)
    - [Complex layout](#complex-layout)
