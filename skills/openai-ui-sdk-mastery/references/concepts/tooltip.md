# Tooltip

Brief and informative hover text

## Usage

```tsx
import { Tooltip } from "@openai/apps-sdk-ui/components/Tooltip";

const Example = () => (
  <Tooltip
    content="This is additional context that appears when the trigger is hovered or focused"
  >
    <Tooltip.TriggerDecorator>
      Simple text with tooltip
    </Tooltip.TriggerDecorator>
  </Tooltip>
);
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **content*** | Tooltip content. If null, tooltip won't render. | `ReactNode` | `-` |
| **compact** | Stylized inversely from normal tooltips for short text | `boolean` | `false` |
| **interactive** | Keeps open when hovered (for interactive content) | `boolean` | `-` |
| **maxWidth** | Max-width of content. "none" for single-line. | `number \| "none"` | `300` |
| **forceOpen** | Forces the tooltip to remain open or closed | `boolean` | `-` |
| **openDelay** | Delay before tooltip shows (ms) | `number` | `150` |
| **preventUnintentionalClickToClose** | Prevents closing when trigger is clicked immediately after opening | `boolean` | `false` |
| **align** | Preferred alignment. Options: "start", "end", "center" | `string` | `"center"` |
| **alignOffset** | Offset in pixels from the alignment | `number` | `0` |
| **side** | Preferred side. Options: "top", "right", "bottom", "left" | `string` | `"top"` |
| **sideOffset** | Distance in pixels from the trigger | `number` | `5` |
| **gutterSize** | Gutter sizing inside the tooltip. Options: "sm", "md", "lg" | `string` | `"md"` |
| **ref** | Ref for the tooltip | `Ref<HTMLDivElement \| null>` | `-` |
| **onPointerDown** | Pointer event handler | `PointerEventHandler` | `-` |
| **onClick** | Mouse event handler | `MouseEventHandler` | `-` |
| **contentClassName** | Optional class name for tooltip content | `string` | `-` |

## Examples

### Different triggers

`Tooltip.TriggerDecorator` helps create accessible triggers, but any component can be used.

```tsx
<div className="flex items-center gap-4">
  <Tooltip content="Informative button context">
    <Button color="primary" size="lg">
      Sample button
    </Button>
  </Tooltip>

  <Tooltip content="Accessible text link">
    <Tooltip.TriggerDecorator>
      Hover for info
    </Tooltip.TriggerDecorator>
  </Tooltip>
</div>
```

### Conditionally enabled

Pass `null` to `content` to disable a tooltip under certain conditions.

```tsx
const Example = ({ disabled }) => (
  <Tooltip
    content={disabled ? "This action is disabled for specific reasons" : null}
  >
    <Button color="primary" size="lg" disabled={disabled}>
      Submit
    </Button>
  </Tooltip>
);
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Different triggers](#different-triggers)
    - [Conditionally enabled](#conditionally-enabled)
