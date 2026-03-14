# Typography

Standardized type treatments and scales for consistent readability

## Scales

The SDK provides a comprehensive set of font scales for both headings and body text. These scales pre-configure `font-size`, `font-weight`, `line-height`, and `letter-spacing`.

### Headings

| Name | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- |
| **heading-5xl** | 72px | 600 | 72px |
| **heading-4xl** | 60px | 600 | 60px |
| **heading-3xl** | 48px | 600 | 48px |
| **heading-2xl** | 36px | 600 | 42px |
| **heading-xl** | 32px | 600 | 38px |
| **heading-lg** | 24px | 600 | 28px |
| **heading-md** | 20px | 600 | 26px |
| **heading-sm** | 18px | 600 | 26px |
| **heading-xs** | 16px | 600 | 24px |

### Body Text

| Name | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- |
| **text-lg** | 18px | 400 | 29px |
| **text-md** | 16px | 400 | 24px |
| **text-sm** | 14px | 400 | 20px |
| **text-xs** | 12px | 400 | 18px |
| **text-2xs** | 10px | 400 | 14px |
| **text-3xs** | 8px | 400 | 12px |

## Usage

### Tailwind CSS

All scales are available as Tailwind utility classes.

```tsx
const Example = () => (
  <article>
    <header className="mb-6">
      <p className="text-secondary text-sm uppercase tracking-wider mb-1">Introduction</p>
      <h1 className="heading-2xl">The Future of AI Interfaces</h1>
    </header>
    
    <p className="text-md text-prose leading-relaxed">
      Inline cards in Apps SDK UI keep copy short and actionable. Provide just enough
      context for the task, then pair it with a clear next step.
    </p>
  </article>
);
```

### Semantic Colors

The SDK defines semantic text colors to handle theme transitions automatically.

| Tailwind Class | Description |
| :--- | :--- |
| `text-default` | Primary text color |
| `text-secondary` | Subtle labels and meta info |
| `text-tertiary` | Very subtle or disabled text |
| `text-emphasis` | Highlighted or high-contrast text |
| `text-prose` | Optimized for long-form reading |

```tsx
<div className="flex flex-col gap-2">
  <p className="text-default">Standard text color</p>
  <p className="text-secondary">Subtle secondary text</p>
  <p className="text-tertiary">Tertiary or disabled label</p>
</div>
```

### Weights

| Tailwind Class | Weight | CSS Variable |
| :--- | :--- | :--- |
| `font-normal` | 400 | `--font-weight-normal` |
| `font-medium` | 500 | `--font-weight-medium` |
| `font-semibold` | 600 | `--font-weight-semibold` |
| `font-bold` | 700 | `--font-weight-bold` |

## CSS Variables

Underlying scales can be accessed directly in your CSS files using custom properties.

```css
.custom-card-title {
  font-size: var(--font-heading-md-size);
  line-height: var(--font-heading-md-line-height);
  font-weight: var(--font-heading-md-weight);
}
```

- [Scales](#scales)
    - [Headings](#headings)
    - [Body Text](#body-text)
- [Usage Patterns](#usage)
- [Semantic Colors](#semantic-colors)
- [Font Weights](#weights)
- [CSS Variables](#css-variables)
