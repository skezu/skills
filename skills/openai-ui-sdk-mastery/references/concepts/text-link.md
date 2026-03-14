# TextLink

Semantic link used for both internal and external links

## Usage

```tsx
import { TextLink } from "@openai/apps-sdk-ui/components/TextLink";

const Example = () => (
  <p>
    You can use the{' '}
    <TextLink href="#">responses endpoint</TextLink>{' '}
    to generate text. You can either use the API directly from an HTTP client of your choice, or use one of OpenAI's{' '}
    <TextLink href="#">official SDKs</TextLink>{' '}
    for your preferred language.
  </p>
);
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **href** | The URL to link to | `string` | `-` |
| **primary** | Applies a primary color to the link and removes default underline | `boolean` | `false` |
| **underline** | Apply `text-decoration: underline` to the link | `boolean` | `true` |
| **forceExternal** | Force external link behavior (target="_blank", rel="noopener noreferrer") | `boolean` | `-` |
| **as** | Override the default component used for the link | `"a" \| ComponentType<any>` | `'a'` |
| **className** | Custom class applied to the link | `string` | `-` |

## Examples

### Default inheritance

By default, `TextLink` uses `currentcolor` inheritance and `text-decoration: underline` to create subtle visual differentiation from surrounding text. The hover effect is a dynamic deemphasis of the `currentcolor`.

```tsx
<p className="text-secondary">
  You can use the{' '}
  <TextLink href="#">responses endpoint</TextLink>
  {' '}to generate text.
</p>
```

### Primary color

You can create a colorful link style with the `primary` prop. Primary links remove the default underline treatment—pass `underline` to re-apply it.

```tsx
<p>
  Sample text with a{' '}
  <TextLink href="#" primary>
    primary link
  </TextLink>
</p>
```

### Underline

Links have an underlined aesthetic by default. Pass `underline={false}` to remove it.

```tsx
<p className="text-secondary">
  Sample text with a{' '}
  <TextLink href="#" underline={false}>
    subtle link
  </TextLink>
</p>
```

### External links

When external paths are provided, `<a>` will be used with `target="_blank"` and `rel="noopener noreferrer"` by default.

```tsx
<TextLink primary underline href="https://openai.com">
  External link <ArrowUpRight />
</TextLink>
```

### Font weight

To customize the font weight, pass a Tailwind class to the `className` prop.

```tsx
<TextLink className="font-semibold" underline={false} href="#">
  Contact support <ArrowRight />
</TextLink>
```

## Configure your Router

### Provider (Recommended)

Wrap your app in `AppsSDKUIProvider` and pass in your router's `Link` component.

```tsx
// In the root of your App
import { AppsSDKUIProvider } from "@openai/apps-sdk-ui/components/AppsSDKUIProvider";
import { Link } from "react-router";

// Set up types 
declare global {
  interface AppsSDKUIConfig {
    LinkComponent: typeof Link
  }
}

export function App() {
  return (
    <AppsSDKUIProvider linkComponent={Link}>
      {/* ... other code ... */}
    </AppsSDKUIProvider>
  )
}

// elsewhere - everything just works!
<TextLink to={{ pathname: "/help" }}>
  Get Help
</TextLink>
```

### Component-level

Alternatively, pass your `Link` component to the `as` prop directly.

```tsx
import { Link } from "next/link";

<TextLink as={Link} href="/dashboard">
  View Dashboard
</TextLink>
```

- [Usage](#usage)
- [Reference](#reference)
- [Examples](#examples)
    - [Default inheritance](#default-inheritance)
    - [Primary color](#primary-color)
    - [Underline](#underline)
    - [External links](#external-links)
    - [Font weight](#font-weight)
- [Configure your Router](#configure-your-router)
    - [Provider](#provider)
    - [Component-level](#component-level)
