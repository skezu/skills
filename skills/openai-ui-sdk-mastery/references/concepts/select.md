# Select

Choose from a dropdown of options

## Usage

```tsx
import { Select } from "@openai/apps-sdk-ui/components/Select";

const Example = () => {
  const [fruit, setFruit] = useState("");
  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" }
  ];

  const handleChange = ({ value }) => setFruit(value);

  return (
    <Select
      value={fruit}
      options={fruits}
      onChange={handleChange}
      placeholder="Select a fruit..."
      variant="outline"
    />
  );
};
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **onChange*** | Callback triggered when selection changes | `CallbackWithOption<T> \| CallbackWithOptions<T>` | `-` |
| **options*** | Array of options or option groups | `Options<T>` | `-` |
| **value*** | The controlled value(s) of the select | `string \| string[]` | `-` |
| **actions** | Actions to display below the options list | `Actions` | `-` |
| **align** | preferred alignment against the trigger. Options: "start", "end", "center" | `string` | `"center"` |
| **alignOffset** | Offset in pixels from the alignment | `number` | `0` |
| **block** | Extends select to 100% of available width | `boolean` | `true` |
| **clearable** | Display a clear action that allows the select to be unset | `boolean` | `false` |
| **disabled** | Disables the select visually and from interactions | `boolean` | `false` |
| **dropdownIconType** | Icon displayed in the trigger. Options: "none", "chevronDown", "dropdown" | `string` | `"dropdown"` |
| **id** | Allows the select to be targeted with `htmlFor` | `string` | `-` |
| **listMaxWidth** | Max-width of the menu in pixels | `number \| "auto"` | `"auto"` |
| **listMinWidth** | Min-width of the menu in pixels | `number \| "auto"` | `"auto"` |
| **listWidth** | Width of the menu in pixels | `number \| "auto"` | `"auto"` |
| **loading** | Displays loading indicator | `boolean` | `false` |
| **loadingPlaceholder**| Placeholder text while loading | `string` | `"Loading..."` |
| **multiple** | Support multiple selection | `boolean` | `false` |
| **name** | Form name for the select | `string` | `-` |
| **opticallyAlign** | Applies negative margin to align trigger | `string` | `-` |
| **optionClassName** | Custom class for option containers | `string` | `-` |
| **OptionView** | Custom component for individual options | `FC<T>` | `-` |
| **pill** | Fully rounded pill shape for trigger | `boolean` | `false` |
| **placeholder** | Placeholder text | `string` | `"Select..."` |
| **required** | Mark as required field | `boolean` | `-` |
| **searchEmptyMessage**| Message when search results are empty | `ReactNode` | `-` |
| **searchPlaceholder** | Placeholder for search input | `string` | `-` |
| **searchPredicate** | Custom filter predicate for searches | `SearchPredicate<T>` | `-` |
| **side** | Preferred side to render. Options: "top", "bottom" | `string` | `"bottom"` |
| **size** | Controls size of trigger. Options: "sm", "md", "lg", "3xs", "2xs", "xs", "xl", "2xl" | `string` | `"md"` |
| **triggerClassName** | Custom class for trigger | `string` | `-` |
| **TriggerStartIcon** | Icon at start of trigger | `ComponentType<SVGProps<SVGSVGElement>>` | `-` |
| **TriggerView** | Custom component for trigger output | `FC<T> \| FC<MultiSelectTriggerViewProps<T>>` | `-` |
| **variant** | Style variant. Options: "soft", "outline", "ghost" | `string` | `"outline"` |

## Examples

### Custom views

You can fully customize the styling and rendering of select's trigger and options via `triggerClassName`, `TriggerStartIcon`, `TriggerView`, `optionClassName`, and `OptionView`.

```tsx
const RoleOptionDescription = ({ children }: { children: React.ReactNode }) => (
  <div className="font-normal text-secondary py-px text-[0.935em] leading-[1.45]">
    {children}
  </div>
);

const roles = [
  {
    value: "owner",
    label: "Owner",
    description: (
      <RoleOptionDescription>
        Can modify project information and manage project members
      </RoleOptionDescription>
    ),
  },
  {
    value: "reader",
    label: "Reader",
    description: (
      <RoleOptionDescription>
        Can make API requests that read or modify data
      </RoleOptionDescription>
    ),
  },
];

const CustomSelect = () => {
  const [role, setRole] = useState("reader");

  return (
    <Select
      value={role}
      options={roles}
      placeholder="Select role..."
      align="start"
      listMinWidth={260}
      variant="ghost"
      size="lg"
      onChange={({ value }) => setRole(value)}
      TriggerStartIcon={role === "owner" ? UserLock : User}
      triggerClassName="font-semibold"
      optionClassName="font-semibold"
    />
  );
};
```

### Actions

Custom, arbitrary actions can be displayed below the options list via the `actions` prop.

```tsx
<Select
  value={value}
  onChange={handleChange}
  options={items}
  placeholder="Select..."
  align="start"
  listMinWidth={240}
  triggerClassName="font-semibold"
  actions={[
    {
      id: "create",
      label: "Create project",
      Icon: Plus,
      onSelect: () => console.log("Create clicked"),
    },
    {
      id: "overview",
      label: "Organization overview",
      Icon: Workspace,
      onSelect: () => console.log("Overview clicked"),
    },
  ]}
/>
```

### Grouped options

Select supports option groups. All selects are searchable by default, but will only present a searchbox when there are 15 or more options.

```tsx
const groupedItems = [
  {
    label: "Models",
    options: [
      { value: "gpt-4", label: "GPT-4" },
      { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
    ],
    optionsLimit: {
      limit: 7,
      label: "Show all models",
    },
  },
  {
    label: "Fine-tunes",
    options: [
      { value: "ft-1", label: "Fine-tune 1" },
    ],
    optionsLimit: {
      limit: 100,
      label: "Show all",
    },
  },
];

const GroupedOptions = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      value={value}
      options={groupedItems}
      onChange={(v) => setValue(v.value)}
      variant="outline"
      size="lg"
      side="bottom"
      listMinWidth={300}
      searchPlaceholder="Select a model..."
      clearable
    />
  );
};
```

### Multiple selection

Multiple selection is supported through the `multiple` property. This changes how `value`, `onChange`, and `TriggerView` are typed, accepting and returning arrays of values.

```tsx
const MultiFruitTriggerView = ({
  values,
  selectedAll,
}: {
  values: { label: string }[];
  selectedAll: boolean;
}) => {
  const displayValue = selectedAll
    ? "All fruits"
    : values.length === 1
    ? values[0].label
    : `${values.length} fruits`;

  return <>{displayValue}</>;
};

const MultiFruitSelect = () => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const fruitsOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" }
  ];

  return (
    <Select
      variant="outline"
      placeholder="Select fruits..."
      options={fruitsOptions}
      name="fruits"
      multiple
      clearable
      value={selectedFruits}
      onChange={(values) => {
          setSelectedFruits(values.map(({ value }) => value));
      }}
      TriggerView={MultiFruitTriggerView}
    />
  );
};
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Custom views](#custom-views)
    - [Actions](#actions)
    - [Grouped options](#grouped-options)
    - [Multiple selection](#multiple-selection)
