# Markdown

Render rich formatted content

## Usage

```tsx
import { Markdown } from "@openai/apps-sdk-ui/components/Markdown";

const Example = ({ markdownContent }) => (
  <Markdown>{markdownContent}</Markdown>
);
```

## Overview

The `Markdown` component provides a robust way to render Markdown strings into HTML using the Apps SDK's styling. It supports standard Markdown syntax, GitHub Flavored Markdown (tables, strikethrough), and advanced features like custom components, directives, and LaTeX (math) rendering.

## Examples

### Markdown Samples

The component renders standard Markdown elements with consistent styling:

- **Headers**: Supports levels `#` to `######`.
- **Formatting**: `*Emphasis*`, `**Strong**`, `***Both***`, and `~~Strikethrough~~`.
- **Lists**: Ordered and unordered, including nesting.
- **Blockquotes**: Using the `>` syntax.
- **Tables**: Full support for alignment and headers.
- **Code**: Inline code using backticks and fenced code blocks.

### Math (LaTeX)

Use the `includeMath` prop to enable `remark-math` and `rehype-katex` plugins for rendering LaTeX equations.

```tsx
const latexContent = `
Display integral: $\\int_0^\\infty e^{-x}\\,dx=1$

Basel problem: $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$
`;

<Markdown includeMath>{latexContent}</Markdown>
```

### Formatting Options

- **breakNewLines**: When true, single newlines insert `<br>` tags.
- **copyableCodeBlocks**: Adds a copy button to all fenced code blocks (enabled by default).

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **children** | The Markdown string to render | `string` | `-` |
| **directives** | Custom directives for processing | `MarkdownDirective[]` | `-` |
| **includeMath** | Load remark-math for LaTeX | `boolean` | `false` |
| **breakNewLines** | Single newline → `<br>` | `boolean` | `false` |
| **components** | Custom component overrides | `Record<string, Component>`| `-` |
| **remarkPlugins** | Extra remark plugins | `PluggableList` | `-` |
| **rehypePlugins** | Extra rehype plugins | `PluggableList` | `-` |
| **allowedElements** | Permitted HTML tags | `string[]` | `-` |
| **disallowedElements**| Forbidden HTML tags | `string[]` | `-` |
| **urlTransform** | Function to transform URLs | `UrlTransform` | `(url) => ...` |
| **skipHtml** | Ignore HTML tags in Markdown | `boolean` | `-` |
| **className** | Custom class for container | `string` | `-` |
| **copyableCodeBlocks**| Enable copy button on code blocks| `boolean` | `true` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Markdown Samples](#markdown-samples)
    - [Math](#math)
- [Reference](#reference)
