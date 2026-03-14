# Indicators

Display loading and progress states to users

## LoadingIndicator

Simple spinning indicator for general loading states.

### Usage

```tsx
import { LoadingIndicator } from "@openai/apps-sdk-ui/components/Indicator";

const Example = () => (
  <LoadingIndicator size={24} />
);
```

### Examples

#### Sizing & stroke

By default, the indicator adapts to the surrounding font-size and text color. You can control the size using the `size` prop or the `--indicator-size` CSS custom property.

```tsx
<LoadingIndicator
  size={30}
  strokeWidth={2}
/>
```

#### Color

The indicator inherits the surrounding text color via `currentcolor`. This can be customized via CSS or by wrapping the component.

```tsx
<div className="flex items-center gap-2 text-danger">
  <LoadingIndicator />
  <span>System error occurred...</span>
</div>
```

#### Duration

You can control the rotation speed of the spinner with the `--indicator-rotate-duration` variable.

```tsx
<div style={{ '--indicator-rotate-duration': '3s' }}>
  <LoadingIndicator />
</div>
```

### Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **size** | Size of the indicator in pixels | `string \| number` | `1em` |
| **className** | Custom class applied | `string` | `-` |
| **strokeWidth** | Stroke width in pixels | `number` | `2` |

---

## CircularProgress

Circular progress ring with simulated or explicit progress levels.

### Usage

```tsx
import { CircularProgress } from "@openai/apps-sdk-ui/components/Indicator";

const Example = () => (
  <CircularProgress progress={45} />
);
```

### Examples

#### Progress

Use the `progress` prop (0-100) to define a static progress level and disable the infinite animation.

```tsx
<CircularProgress progress={25} />
```

#### Color customization

Customize the colors using CSS variables for the track and the active progress path.

```tsx
<CircularProgress
  style={{
    '--circular-progress-track-active-color': 'var(--blue-600)',
    '--circular-progress-track-color': 'var(--blue-100)',
  }}
/>
```

### Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **className** | Custom class applied | `string` | `-` |
| **size** | Size of the indicator in pixels | `string \| number` | `1em` |
| **strokeWidth** | Stroke width in pixels | `number` | `2` |
| **progress** | Static progress percentage (0-100) | `number` | `-` |

---

## LoadingDots

Indicate typing progress or background work with a staggered pulsing dot animation.

### Usage

```tsx
import { LoadingDots } from "@openai/apps-sdk-ui/components/Indicator";

const Example = () => (
  <LoadingDots />
);
```

### Color

`LoadingDots` inherits the surrounding text color.

```tsx
<LoadingDots className="text-secondary" />
```

- [LoadingIndicator](#loadingindicator)
    - [Usage](#usage)
    - [Examples](#examples)
    - [Reference](#reference)
- [CircularProgress](#circularprogress)
    - [Usage](#usage-1)
    - [Examples](#examples-1)
    - [Reference](#reference-1)
- [LoadingDots](#loadingdots)
    - [Usage](#usage-2)
    - [Color](#color)
