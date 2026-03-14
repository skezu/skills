# CopyTooltip

Allow users to easily copy content to the clipboard with visual feedback

## Usage

```tsx
import { CopyTooltip } from "@openai/apps-sdk-ui/components/Tooltip";
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";

const Example = () => (
  <CopyTooltip copyValue="sk-1234567890abcdef">
    <Tooltip.TriggerDecorator>
      sk-123...cdef
    </Tooltip.TriggerDecorator>
  </CopyTooltip>
);
```

## Overview

`CopyTooltip` wraps a trigger element and provides a tooltip that, when clicked, copies a specified value to the clipboard. It automatically handles the "Copied!" success state and reverts after a short delay.

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **copyValue*** | The string to be copied to current clipboard | `string` | `-` |
| **openDelay** | Delay before tooltip appears (ms) | `number` | `150` |
| **side** | Preferred side. Options: "top", "right", "bottom", "left" | `string` | `"top"` |
| **sideOffset** | Distance from the trigger (pixels) | `number` | `5` |
| **align** | Alignment relative to trigger. Options: "start", "center", "end" | `string` | `"center"` |
| **alignOffset** | Offset for start/end alignment (pixels) | `number` | `0` |

- [Usage](#usage)
- [Overview](#overview)
- [Reference](#reference)
