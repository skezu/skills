# Responsive Design

Build adaptive and fluid interfaces across all device scales

## Approach

Apps SDK UI follows a **mobile-first** approach. You should define baseline styles for the smallest screens and layer on overrides for larger breakpoints using media queries or Tailwind modifiers.

In practice, this often involves starting with a single-column stacked layout and expanding to multi-column or sidebar-based layouts as screen width increases.

## Default Breakpoints

Breakpoints are consistent across Tailwind utilities and React hooks provided by the SDK.

| Name | Size | Common Device Target |
| :--- | :--- | :--- |
| **xs** | 380px | Compact mobile phones |
| **sm** | 576px | Larger phones and phablets |
| **md** | 768px | Tablets (Portrait) |
| **lg** | 1024px | Laptops and Tablets (Landscape) |
| **xl** | 1280px | Standard Desktops |
| **2xl** | 1536px | Widescreen Displays |

## Usage

### Tailwind CSS

Use breakpoint prefixes to apply styles conditionally.

```tsx
<div className="flex flex-col gap-4 md:flex-row md:items-center">
  <div className="flex-1">Main Content</div>
  <aside className="w-full md:w-64">Sidebar Content</aside>
</div>
```

### React Hooks

For logic that cannot be handled by CSS alone (e.g., conditional rendering of heavy components), use the `useBreakpoint` hook.

```tsx
import { useBreakpoint } from "@openai/apps-sdk-ui/hooks/useBreakpoint";

const AdaptiveComponent = () => {
  // Returns true if current width is >= md (768px)
  const isTabletOrAbove = useBreakpoint("md");

  return (
    <div>
      {isTabletOrAbove ? (
        <DesktopLayout />
      ) : (
        <MobileLayout />
      )}
    </div>
  );
};
```

- [Approach](#approach)
- [Default Breakpoints](#default-breakpoints)
- [Usage Summary](#usage)
    - [Tailwind](#tailwind-css)
    - [React](#react-hooks)
