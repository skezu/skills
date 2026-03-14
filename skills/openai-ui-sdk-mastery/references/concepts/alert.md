# Alert

Call attention to a specific message or warning

## Usage

```tsx
import { Alert } from "@openai/apps-sdk-ui/components/Alert";
import { Button } from "@openai/apps-sdk-ui/components/Button";

const Example = () => (
  <Alert
    title="Scheduled maintenance"
    description="We'll be offline 2 - 4 AM UTC on July 14 while we upgrade our database."
    actions={<Button color="primary" pill variant="soft">Dismiss</Button>}
  />
);
```

## Overview

The `Alert` component is used to display important information, warnings, or feedback to the user. It supports multiple colors, variants, optional titles, descriptions, and customizable action buttons.

## Examples

### Colors & variants

Stylize the alert using the `color` and `variant` props to match the message intent.

```tsx
<div className="flex flex-col gap-4">
  <Alert color="info" title="Informational message" />
  <Alert color="success" title="Success! Operation completed." />
  <Alert color="warning" title="Warning: Password expires soon." />
  <Alert color="danger" title="Error: Connection failed." />
</div>
```

### Advanced Layout

Alerts can include rich descriptions and multiple actions. Actions can be positioned at the `end` or the `bottom` (useful for mobile or long text).

```tsx
<Alert
  title="Updated terms of service"
  description={
    <>
      We've updated our terms regarding data handling. 
      <TextLink href="/terms">Learn more here.</TextLink>
    </>
  }
  actions={
    <>
      <Button color="secondary" pill variant="soft">Remind me later</Button>
      <Button color="primary" pill variant="solid">Accept Terms</Button>
    </>
  }
  actionsPlacement="bottom"
/>
```

### Custom Indicators

By default, indicators match the alert color. You can override this or hide it entirely.

```tsx
<div className="flex flex-col gap-4">
  <Alert 
    indicator={<LightbulbIcon />} 
    description="New feature available in settings." 
  />
  <Alert 
    indicator={false} 
    description="Simple notification without an icon." 
  />
</div>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **title** | Main heading of the alert | `ReactNode` | `-` |
| **description** | Secondary message text | `ReactNode` | `-` |
| **actions** | Buttons or links for user interaction | `ReactNode` | `-` |
| **color** | Tone of the alert. Options: "primary", "success", "info", "discovery", "danger", "warning", "caution" | `string` | `"primary"` |
| **variant** | Visual style. Options: "soft", "solid", "outline" | `string` | `"outline"` |
| **actionsPlacement** | Force action position. Options: "end", "bottom" | `string` | `-` |
| **indicator** | Custom icon or `false` to hide | `ReactNode` | `-` |
| **className** | Container class override | `string` | `-` |
| **actionsClassName** | Actions container class override | `string` | `-` |
| **ref** | Container ref | `Ref` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Colors & variants](#colors--variants)
    - [Advanced Layout](#advanced-layout)
    - [Custom Indicators](#custom-indicators)
- [Reference](#reference)
