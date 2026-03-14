# TagInput

Enter multiple unique tags

## Usage

```tsx
import { TagInput } from "@openai/apps-sdk-ui/components/TagInput";

const Example = () => {
  const [tags, setTags] = useState([]);

  return (
    <div style={{ width: 350 }}>
      <TagInput
        autoFocus
        placeholder="example@openai.com"
        rows={3}
        value={tags}
        onChange={setTags}
        validator={(val) => val.includes("@")}
      />
    </div>
  );
};
```

## Reference

| Name | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| **placeholder** | Placeholder text for the input | `string` | `-` |
| **validator** | Function returns whether a tag is valid. Invalid tags highlighted red. | `((value: string) => boolean)` | `-` |
| **rows** | The minimum number of rows for the tag input | `number` | `1` |
| **autoFocus** | Whether to focus this input on mount | `boolean` | `false` |
| **defaultValue**| The initial state when uncontrolled | `Tag[]` | `-` |
| **value** | The controlled value of the tag input | `Tag[]` | `-` |
| **id** | Allows targeting with `htmlFor` | `string` | `-` |
| **size** | Corresponds with Input height. Options: "md", "lg", "xl", "2xl", "3xl" | `string` | `"xl"` |
| **onChange** | Callback invoked when the tag list changes | `((tags: Tag[]) => void)` | `-` |
| **maxTags** | Maximum number of tags allowed (displays counter) | `number` | `-` |
| **delimiters** | Characters that trigger creating a new tag | `string[]` | `[',', ' ']` |
| **disabled** | Disables the tag input | `boolean` | `false` |

- [Usage](#usage)
- [Reference](#reference)
