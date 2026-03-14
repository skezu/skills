# ButtonLink

`<Button>` styles as a semantic anchor element

## Usage

```tsx
import { ButtonLink } from "@openai/apps-sdk-ui/components/Button";
import { ArrowRight } from "@openai/apps-sdk-ui/icons";

const Example = () => (
  <ButtonLink
    color="primary"
    href="https://platform.openai.com"
  >
    View API Keys
    <ArrowRight />
  </ButtonLink>
);
```

## Overview

`ButtonLink` renders an `<a>` tag (or a router link component) styled to look exactly like a `Button`. It automatically detects internal vs. external links and handles routing configuration when using a global provider.

### Router Support

If a relative `href` is provided, `ButtonLink` uses the `LinkComponent` configured in your `AppsSDKUIProvider`. For external links, it adds `target="_blank"` and `rel="noopener noreferrer"` automatically.

## Examples

### Internal & External Links

```tsx
<div className="flex gap-4">
  <ButtonLink href="/dashboard" color="primary">
    Dashboard
  </ButtonLink>
  
  <ButtonLink href="https://openai.com" external>
    Visit OpenAI
  </ButtonLink>
</div>
```

### Visual Variants

Supports all standard button variants: `solid`, `soft`, `outline`, and `ghost`.

```tsx
<div className="flex gap-4">
  <ButtonLink color="primary" variant="solid">Solid</ButtonLink>
  <ButtonLink color="secondary" variant="soft">Soft</ButtonLink>
  <ButtonLink color="danger" variant="outline">Outline</ButtonLink>
</div>
```

### Layout Options

Use the `block` prop for full-width links and `pill` for rounded ends (enabled by default for certain sizes).

```tsx
<ButtonLink block size="lg" color="primary" href="/signup">
  Get Started Now
</ButtonLink>
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **href** | The destination URL | `string` | `-` |
| **color** | Tone of the button. Options: "primary", "secondary", "danger", etc | `string` | `"secondary"` |
| **variant** | Visual style. Options: "soft", "solid", "outline", "ghost" | `string` | `"solid"` |
| **size** | Height and scale. Options: "sm", "md", "lg", "xl", etc | `string` | `"md"` |
| **pill** | Fully rounded shape | `boolean` | `true` |
| **block** | Take 100% available width | `boolean` | `false` |
| **disabled** | Visually and accessibly disable the link | `boolean` | `false` |
| **external** | Force treat as external link | `boolean` | `-` |
| **as** | Component override (e.g., `Link` from `next/link`) | `Component` | `'a'` |
| **iconSize** | Scale icons within the link | `string` | `-` |
| **gutterSize** | Horizontal padding override | `string` | `-` |
| **className** | Custom class for the link | `string` | `-` |

## Router Configuration

Configure your routing library once at the root level to ensure all `ButtonLink` and `TextLink` components use your router's navigation logic.

### Global Provider

```tsx
import { AppsSDKUIProvider } from "@openai/apps-sdk-ui/components/AppsSDKUIProvider";
import { Link } from "react-router-dom";

export function App() {
  return (
    <AppsSDKUIProvider linkComponent={Link}>
      <ApplicationContent />
    </AppsSDKUIProvider>
  );
}
```

### Local Overrides

```tsx
import { Link } from "next/link";

<ButtonLink as={Link} href="/dashboard">
  Go to Dashboard
</ButtonLink>
```

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
- [Reference](#reference)
- [Router Configuration](#router-configuration)
