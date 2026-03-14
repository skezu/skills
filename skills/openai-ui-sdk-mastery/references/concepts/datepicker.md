# DatePicker

Select a single date with an interactive calendar popover

## Usage

```tsx
import { useState } from "react";
import { DatePicker } from "@openai/apps-sdk-ui/components/DatePicker";
import { DateTime } from "luxon"; // Usually used with Luxon

const Example = () => {
  const [selectedDate, setSelectedDate] = useState<DateTime | null>(null);

  return (
    <DatePicker
      value={selectedDate}
      onChange={setSelectedDate}
      clearable
      pill
      placeholder="Pick a day"
    />
  );
};
```

## Overview

The `DatePicker` component provides a user-friendly way to select a date. It features a dropdown trigger that displays the current selection and a calendar popover for picking new dates. It supports range limits, custom formatting, and various visual styles.

## Examples

### Date Limits

Use `min` and `max` props to restrict the selectable range. Dates outside this range will be visually disabled and unclickable in the calendar.

```tsx
const minDate = DateTime.now().minus({ months: 1 });
const maxDate = DateTime.now().plus({ months: 1 });

<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  min={minDate}
  max={maxDate}
/>
```

### Custom Trigger Appearance

You can customize the trigger's icon, format, and layout.

```tsx
<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  triggerShowIcon={false}
  triggerDateFormat="dd LLL yyyy"
  variant="ghost"
  placeholder="Birthday"
/>
```

### Disabled State

```tsx
<DatePicker
  value={selectedDate}
  onChange={setSelectedDate}
  disabled
/>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **value*** | The selected date | `DateTime \| null` | `-` |
| **onChange*** | Callback when date is selected | `function` | `-` |
| **id** | Identifier for labels and forms | `string` | `-` |
| **placeholder** | Text displayed when no date is selected | `string` | `"Select date..."` |
| **min** | Earliest selectable date | `DateTime` | `-` |
| **max** | Latest selectable date | `DateTime` | `-` |
| **clearable** | Show button to unset the date | `boolean` | `false` |
| **pill** | Rounded trigger shape | `boolean` | `false` |
| **size** | Scale level. Options: "sm", "md", "lg", etc | `string` | `"md"` |
| **variant** | Trigger style. Options: "soft", "outline", "ghost" | `string` | `"outline"` |
| **block** | Take 100% available width | `boolean` | `true` |
| **triggerShowIcon** | Toggle the calendar icon | `boolean` | `true` |
| **triggerDateFormat** | Format of the displayed date | `string` | `-` |
| **side** | Popover placement. Options: "top", "right", "bottom", "left" | `string` | `"bottom"` |
| **align** | Popover alignment. Options: "start", "center", "end" | `string` | `"center"` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Limits](#date-limits)
    - [Appearance](#custom-trigger-appearance)
- [Reference](#reference)
