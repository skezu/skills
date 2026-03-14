# DateRangePicker

Select a range of dates with an interactive calendar popover

## Usage

```tsx
import { useState } from "react";
import { DateRangePicker } from "@openai/apps-sdk-ui/components/DatePicker";
import { DateTime } from "luxon";

const Example = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null);

  return (
    <DateRangePicker
      value={selectedRange}
      onChange={setSelectedRange}
      clearable
      pill
      shortcuts={[
        { label: "Today", getValue: () => ({ start: DateTime.now().startOf("day"), end: DateTime.now().endOf("day") }) },
        { label: "Last 7 Days", getValue: () => ({ start: DateTime.now().minus({ days: 7 }), end: DateTime.now() }) }
      ]}
    />
  );
};
```

## Overview

The `DateRangePicker` component allows users to select a start and end date. It features a dropdown trigger showing the selected range and a popover containing an interactive calendar. It supports pre-defined shortcuts, range constraints, and specialized display modes like the month stepper.

## Examples

### Range Constraints

Use `min`, `max`, and `maxRangeDays` to enforce business rules on date selection.

```tsx
<DateRangePicker
  value={selectedRange}
  onChange={setSelectedRange}
  min={DateTime.now().minus({ years: 1 })}
  max={DateTime.now()}
  maxRangeDays={30}
/>
```

### Shortcuts

Pre-defined ranges can be displayed to the left of the calendar for quick selection.

```tsx
const myShortcuts = [
  { label: "Last Month", getValue: () => ({ start: DateTime.now().minus({ months: 1 }).startOf("month"), end: DateTime.now().minus({ months: 1 }).endOf("month") }) }
];

<DateRangePicker
  value={selectedRange}
  onChange={setSelectedRange}
  shortcuts={myShortcuts}
/>
```

### Month Stepper Mode

When `triggerStepperUnit="month"` is set, the trigger displays as a stepper (with back/forth arrows) if the selected range exactly matches a full month.

```tsx
<DateRangePicker
  value={selectedRange}
  onChange={setSelectedRange}
  triggerStepperUnit="month"
/>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **value*** | Selected start and end dates | `DateRange \| null` | `-` |
| **onChange*** | Callback when range changes | `function` | `-` |
| **shortcuts** | List of quick-select ranges | `DateRangeShortcut[]` | `-` |
| **min** | Earliest selectable date | `DateTime` | `-` |
| **max** | Latest selectable date | `DateTime` | `-` |
| **maxRangeDays** | Limit length of range | `number` | `-` |
| **clearable** | Show button to unset range | `boolean` | `false` |
| **pill** | Rounded trigger shape | `boolean` | `false` |
| **size** | Scale level. Options: "sm", "md", "lg", etc | `string` | `"md"` |
| **variant** | Trigger style. Options: "soft", "outline", "ghost" | `string` | `"outline"` |
| **triggerStepperUnit** | Enable stepper view. Options: "month" | `string` | `-` |
| **triggerDateFormat** | Format of displayed dates | `string` | `"MM/dd/yy"` |
| **placeholder** | Text when no range is selected | `string` | `"Select date range..."` |
| **block** | Take 100% available width | `boolean` | `true` |
| **side** | Popover placement. Options: "top", "right", "bottom", "left" | `string` | `"bottom"` |
| **align** | Popover alignment. Options: "start", "center", "end" | `string` | `"center"` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Constraints](#range-constraints)
    - [Shortcuts](#shortcuts)
    - [Month Stepper](#month-stepper-mode)
- [Reference](#reference)
