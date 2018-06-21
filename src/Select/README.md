# Select
To implement Select component into your project you'll need to add the import:
```jsx
import Select from "@kiwicom/orbit-components/lib/Select";
```
After adding import into your project you can use it simply like:
```jsx
<Select options={Option} />
```
## Props
Table below contains all type of the props available in Select component.

| Name        | Type                              | Default    | Description                      |
| :---------- | :-------------------------------- | :--------- | :------------------------------- |
| disabled    | `boolean`                         | `false`    | If `true`, the Select will be disabled.
| error       | `React.Node`                      |            | The error message for Select. [See Functional specs](#functional-specs)
| help        | `React.Node`                      |            | The help message for Select.
| label       | `string`                          |            | The label for the Select.
| onBlur      | `void`                            |            | Function for handling Select onBlur.
| onChange    | `void`                            |            | Function for handling Select onChange.
| onFocus     | `void`                            |            | Function for handling Select onFocus.
| **options** | [`Option[]`](#option) |            | The content of the Select, passed as array of objects.
| placeholder | `string`                          |            | The placeholder for Select. 
| prefix      | `React.Node`                      |            | The prefix component for Select. [See Functional specs](#functional-specs)
| size        | [`enum`](#enum)                   | `"normal"` | The size of the Select.
| **value**   | `string`                          | `""`       | The value of the Select.

## Option
Table below contains all type of the props available for object in Option array.

| Name         | Type               | Description                      |
| :----------- | :----------------- | :------------------------------- |
| **value**    | `string \| number` | The value of the Option.
| **label**    | `string`           | The label for the Option.
| disabled     | `boolean`          | If `true`, the Option will be disabled.
  
### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs
* `error` prop is always overwriting `help` prop, because of higher priority.

