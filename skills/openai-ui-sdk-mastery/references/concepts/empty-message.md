# EmptyMessage

Gracefully inform users when there's nothing to see

## Usage

```tsx
import { EmptyMessage } from "@openai/apps-sdk-ui/components/EmptyMessage";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Plus, Explore } from "@openai/apps-sdk-ui/icons";

const Example = () => (
  <EmptyMessage>
    <EmptyMessage.Icon>
       <Explore />
    </EmptyMessage.Icon>
    <EmptyMessage.Title>Your evaluations will appear here</EmptyMessage.Title>
    <EmptyMessage.Description>
      Create an evaluation to assess your model's responses
    </EmptyMessage.Description>
    <EmptyMessage.ActionRow>
      <Button color="primary" onClick={() => {}} size="lg">
        <Plus className="mr-[-2px]" />
        Create
      </Button>
    </EmptyMessage.ActionRow>
  </EmptyMessage>
);
```

## Overview

`EmptyMessage` is used to provide feedback when a view or component has no data to display. It supports optional icons, titles, descriptions, and action rows to guide the user toward the next step.

## Examples

### Error message

The `color` property on `EmptyMessage.Icon` and `EmptyMessage.Title` allows highlighting special states like errors or warnings.

```tsx
const ErrorExample = () => (
  <EmptyMessage>
    <EmptyMessage.Icon color="danger">
      <MicOff />
    </EmptyMessage.Icon>
    <EmptyMessage.Title>
      Microphone access disabled
    </EmptyMessage.Title>
    <EmptyMessage.Description>
      Enable microphone access in your browser's settings to use voice features.
    </EmptyMessage.Description>
  </EmptyMessage>
);
```

### No results

Components are composable and optional. For a simpler style, you can omit the title and use a smaller icon.

```tsx
const NoResultsExample = () => (
  <EmptyMessage fill="none">
    <EmptyMessage.Icon size="sm">
      <Search />
    </EmptyMessage.Icon>
    <EmptyMessage.Description>
      No icons found matching <span className="font-semibold">"pizza"</span>
    </EmptyMessage.Description>
  </EmptyMessage>
);
```

## Reference

### EmptyMessage

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Custom class applied to the container | `string` | `-` |
| **fill** | How the container fills available space. Options: "none", "static", "absolute" | `string` | `"static"` |

### EmptyMessage.Icon

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **size** | Size of the icon. Options: "sm", "md" | `string` | `"md"` |
| **color** | Color variant. Options: "secondary", "danger", "warning" | `string` | `"secondary"` |
| **className** | Custom class applied to the icon wrapper | `string` | `-` |

### EmptyMessage.Title

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Custom class applied to the title | `string` | `-` |

### EmptyMessage.Description

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Custom class applied to the description | `string` | `-` |

### EmptyMessage.ActionRow

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Custom class applied to the action row | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Error message](#error-message)
    - [No results](#no-results)
- [Reference](#reference)
