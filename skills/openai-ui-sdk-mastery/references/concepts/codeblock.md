# CodeBlock

Display syntax-highlighted code snippets with built-in copy functionality

## Usage

```tsx
import { CodeBlock } from "@openai/apps-sdk-ui/components/CodeBlock";

const Example = () => {
  const code = `const hello = "world";\nconsole.log(hello);`;
  
  return (
    <CodeBlock language="javascript">
      {code}
    </CodeBlock>
  );
};
```

## Overview

The `CodeBlock` component provides beautiful syntax highlighting for a wide variety of programming languages. It includes a built-in copy button and uses a curated subset of Prism.js grammars for efficient client-side rendering.

## Examples

### Supported Languages

A pragmatic set of Prism grammars are pre-registered: `javascript`, `jsx`, `typescript`, `tsx`, `python`, `json`, `jsonc`, `bash`, `markup` (HTML/XML), `css`, `scss`, `sql`, `markdown`, `yaml`, `java`, `go`, `c`, `clike`, `php`, `ruby`, `docker`, `diff`, `toml`, and `kotlin`.

#### TypeScript / TSX

```tsx
<CodeBlock language="tsx">
{`interface Props {
  label: string;
}

const MyComponent: React.FC<Props> = ({ label }) => (
  <button>{label}</button>
);`}
</CodeBlock>
```

#### Python

```python
<CodeBlock language="python">
{`def greet(name: str):
    print(f"Hello, {name}!")

greet("OpenAI")`}
</CodeBlock>
```

### Custom Composition

For more complex requirements, use `CodeBlockBase` to compose custom headers or footers around the code content.

```tsx
import { CodeBlockBase } from "@openai/apps-sdk-ui/components/CodeBlock";
import { CopyButton } from "@openai/apps-sdk-ui/components/CopyButton";

const CustomCodeBlock = ({ code }) => (
  <CodeBlockBase>
    <div className="flex items-center justify-between bg-secondary-subtle px-4 py-2 border-b">
      <span className="text-xs font-mono uppercase">typescript</span>
      <CopyButton copyValue={code} variant="ghost" size="sm" />
    </div>
    <CodeBlockBase.Code language="typescript">
      {code}
    </CodeBlockBase.Code>
  </CodeBlockBase>
);
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **language** | Prism language key for highlighting | `string` | `-` |
| **children** | The raw code string to display | `string` | `-` |
| **className** | Custom class for the container | `string` | `-` |

- [Usage](#usage)
- [Overview](#overview)
- [Examples](#examples)
    - [Languages](#supported-languages)
    - [Composition](#custom-composition)
- [Reference](#reference)
