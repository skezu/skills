# Introduction & Installation

Design system for building high-quality apps in ChatGPT

Apps SDK UI is a design system tailored for ChatGPT Apps, providing styling foundations with Tailwind CSS, design tokens via CSS variables, and a library of well-crafted, accessible React components.

### What's Included?

- **Design Tokens**: Standardized colors, typography, spacing, shadows, and surfaces.
- **Tailwind 4 Support**: Seamless integration with the latest Tailwind features.
- **Component Library**: High-quality primitives built on Radix UI for accessibility.
- **Adaptive Utilities**: Built-in support for dark mode and responsive layouts.

## Prerequisites

Apps SDK UI requires React and Tailwind CSS 4 to be configured in your project.

- **React**: 18.x or 19.x
- **Tailwind CSS**: 4.0 or later

## Installation

Follow these steps to integrate the SDK into your project.

### 1. Install the Package

```bash
npm install @openai/apps-sdk-ui
```

### 2. Configure Styles

Add the foundation styles and Tailwind layers to your global CSS file (e.g., `src/index.css`).

```css
@import "tailwindcss";
@import "@openai/apps-sdk-ui/css";

/* Allow Tailwind to discover classes inside the SDK source */
@source "../node_modules/@openai/apps-sdk-ui";
```

Import this CSS file at the entry point of your application before rendering any components.

```tsx
// index.tsx
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### 3. Configure Router (Optional)

To enable automatic routing support for components like `ButtonLink` and `TextLink`, wrap your app in the `AppsSDKUIProvider`.

```tsx
import { AppsSDKUIProvider } from "@openai/apps-sdk-ui/components/AppsSDKUIProvider";
import { Link } from "react-router-dom"; // Or your preferred router

// Optional: Type augmentations for better DX
declare global {
  interface AppsSDKUIConfig {
    LinkComponent: typeof Link;
  }
}

function Root() {
  return (
    <AppsSDKUIProvider linkComponent={Link}>
      <App />
    </AppsSDKUIProvider>
  );
}
```

## Start Building

Here is a quick example of a component built using SDK primitives and semantic Tailwind classes.

```tsx
import { Badge } from "@openai/apps-sdk-ui/components/Badge";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { CalendarIcon, MapPinIcon } from "@openai/apps-sdk-ui/icons";

export const ReservationCard = () => (
  <div className="w-full max-w-sm rounded-2xl border border-default bg-surface shadow-lg p-4">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-secondary text-sm">Upcoming Event</p>
        <h2 className="mt-1 heading-lg">La Luna Bistro</h2>
      </div>
      <Badge color="success">Confirmed</Badge>
    </div>
    
    <div className="mt-6 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm">
        <CalendarIcon className="size-4 text-secondary" />
        <span>April 12 · 7:30 PM</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MapPinIcon className="size-4 text-secondary" />
        <span>123 Moonlight St, San Francisco</span>
      </div>
    </div>

    <div className="mt-6 flex gap-3 pt-4 border-t">
      <Button variant="soft" color="secondary" block>Edit</Button>
      <Button color="primary" block>Check-in</Button>
    </div>
  </div>
);
```

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation)
- [Building Examples](#start-building)
