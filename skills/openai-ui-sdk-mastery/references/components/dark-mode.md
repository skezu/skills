# Dark Mode

Configure and manage light & dark mode themes in your application

## Overview

The SDK supports both light and dark modes. Theme selection is controlled by the `[data-theme]` attribute on the `html` element or any container element. This allows for both global theme application and nested theme overrides.

### Applying the Theme

```html
<!-- Global Dark Mode -->
<html data-theme="dark">
  ...
</html>

<!-- Nested Theme Overrides -->
<div data-theme="dark">
  <p>I am always in dark mode</p>
  <div data-theme="light">
    <p>I am always in light mode</p>
  </div>
</div>
```

## Tailwind Integration

Tailwind CSS is configured to detect the `[data-theme]` attribute. You can use standard `dark:` modifiers in your classes.

```tsx
<div className="bg-white text-black dark:bg-black dark:text-white">
  Adaptive theme content
</div>
```

## JavaScript Utilities

The SDK provides several helpers to manage and read the current theme.

### Utilities

```typescript
import { applyDocumentTheme, getDocumentTheme } from "@openai/apps-sdk-ui/theme";

// Set a specific theme
applyDocumentTheme("dark");

// Read current theme from root element
const current = getDocumentTheme(); // "light" or "dark"
```

### React Hook

Use `useDocumentTheme` to subscribe to theme changes. It uses a `MutationObserver` to ensure the value is always in sync with the DOM.

```tsx
import { useDocumentTheme } from "@openai/apps-sdk-ui/theme";

const ThemeDisplay = () => {
  const currentTheme = useDocumentTheme();
  return <div>Current theme is: {currentTheme}</div>;
};
```

## Implementation Example

Below is a recommended pattern for implementing persistent theme management using [Zustand](https://github.com/pmndrs/zustand).

```typescript
import { applyDocumentTheme } from "@openai/apps-sdk-ui/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "theme-storage" }
  )
);

// Function to resolve "system" to actual "light" or "dark"
const resolveTheme = (theme: Theme): "light" | "dark" => {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// Sync with DOM
useThemeStore.subscribe((state) => {
  applyDocumentTheme(resolveTheme(state.theme));
});

// Listen for OS changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  const state = useThemeStore.getState();
  if (state.theme === "system") {
    applyDocumentTheme(resolveTheme("system"));
  }
});
```

- [Overview](#overview)
- [Tailwind Integration](#tailwind-integration)
- [JavaScript Utilities](#javascript-utilities)
- [Implementation Example](#implementation-example)
