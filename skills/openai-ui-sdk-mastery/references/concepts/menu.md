# Menu

Structured actions in a dropdown list

## Usage

```tsx
import { Menu } from "@openai/apps-sdk-ui/components/Menu";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { ChevronDown } from "@openai/apps-sdk-ui/icons";

const Example = () => (
  <Menu>
    <Menu.Trigger>
      <Button color="primary" variant="ghost">
        Sample menu <ChevronDown />
      </Button>
    </Menu.Trigger>
    <Menu.Content width={210}>
      <Menu.Item>
        <p className="font-semibold">Sam Smith</p>
        <p className="text-secondary">sam.smith@gmail.com</p>
      </Menu.Item>
      <Menu.Separator />
      <Menu.Link href="/profile">Your profile</Menu.Link>
      <Menu.Link href="/policies">Terms & policies</Menu.Link>
      <Menu.Item disabled>Feature flags</Menu.Item>
      <Menu.Separator />
      <Menu.Item onSelect={() => console.log("Logout")}>Logout</Menu.Item>
    </Menu.Content>
  </Menu>
);
```

> [!NOTE]
> `Menu` prevents `Tab` presses from advancing focus. For generic popover use-cases where focus should remain flexible, use the `Popover` component instead.

## Overview

The `Menu` component provides a flexible dropdown system for displaying structured actions, navigation links, and settings. It supports submenus, radio/checkbox groups, and transient item actions.

## Examples

### Sizing the menu

- **Natural sizing**: use `minWidth="auto"` to fit the menu to its content.
- **Fixed size**: use `width` and `minWidth` for static dimensions.
- **Flexible sizing**: `minWidth` allows the menu to grow if content requires it.

```tsx
<Menu.Content minWidth="auto">
  <Menu.Item onSelect={() => {}}>
    <PlusIcon className="w-4 h-4" /> Add Item
  </Menu.Item>
</Menu.Content>
```

### Submenus

Use `Menu.Sub`, `Menu.SubTrigger`, and `Menu.SubContent` for nested options.

```tsx
<Menu.Content minWidth={180}>
  <Menu.Item>Edit</Menu.Item>
  <Menu.Sub>
    <Menu.SubTrigger>More Options</Menu.SubTrigger>
    <Menu.SubContent>
      <Menu.Item>Move to project…</Menu.Item>
      <Menu.Item>Archive…</Menu.Item>
    </Menu.SubContent>
  </Menu.Sub>
  <Menu.Item>Delete</Menu.Item>
</Menu.Content>
```

### Checkbox & Radio Items

Support for selectable states within the menu.

- **Checkbox**: For toggling multiple independent options.
- **Radio**: For selecting a single option from a group.

```tsx
{/* Radio Group Example */}
<Menu.RadioGroup value={selectedValue} onChange={setSelectedValue}>
  <Menu.RadioItem value="today">Today</Menu.RadioItem>
  <Menu.RadioItem value="week">This Week</Menu.RadioItem>
</Menu.RadioGroup>
```

### Item actions

Transient actions that appear on hover for specific menu items.

> [!NOTE]
> These actions are not keyboard accessible and should be used as shortcuts rather than critical primary actions.

```tsx
<Menu.Item>
  <span className="flex-1">Document Title</span>
  <Menu.ItemActions>
    <Menu.ItemAction onClick={(e) => { e.stopPropagation(); editDoc(); }}>
      <EditIcon />
    </Menu.ItemAction>
  </Menu.ItemActions>
</Menu.Item>
```

## Reference

### Menu

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **forceOpen** | Force open/closed state | `boolean` | `-` |
| **onOpen** | Callback when opened | `() => void` | `-` |
| **onClose** | Callback when closed | `() => void` | `-` |
| **modal** | Disable background interactions | `boolean` | `false` |

### Menu.Content

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **side** | Placement side. "top" \| "right" \| "bottom" \| "left" | `string` | `"bottom"` |
| **sideOffset** | Distance from trigger in px | `number` | `4` |
| **align** | Alignment. "start" \| "end" \| "center" | `string` | `"center"` |
| **width** | Content width | `number \| "auto"` | `"auto"` |
| **minWidth** | Minimum content width | `number \| "auto"` | `"auto"` |
| **maxHeight** | Maximum content height | `number` | `-` |

### Menu.Item

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **onSelect** | Callback when selected | `(event: Event) => void` | `-` |
| **disabled** | Disable interactions | `boolean` | `-` |
| **className** | Custom class applied | `string` | `-` |

### Menu.CheckboxItem

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **checked** | Checked state | `boolean` | `-` |
| **onCheckedChange**| Callback on change | `(checked: boolean) => void`| `-` |
| **indicatorPosition**| "start" \| "end" | `string` | `"end"` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Sizing](#sizing-the-menu)
    - [Submenus](#submenus)
    - [Checkbox & Radio](#checkbox--radio-items)
    - [Item actions](#item-actions)
- [Reference](#reference)
