# TextLink
To implement TextLink component into your project you'll need to add the import:
```jsx
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
```
After adding import into your project you can use it simply like:
```jsx
<TextLink>Hello World!</TextLink>
```
## Props
Table below contains all type of the props available in TextLink component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| children      | `React.Node`          |                 | The content of the TextLink.
| external      | `boolean`             | `false`         | If `true`, the TextLink opens link in a new tab.
| href          | `string`              |                 | The URL to link when the TextLink is clicked.
| onClick       | `void`                |                 | Function for handling TextLink onClick
| rel           | `string`              |                 | The rel of the TextLink.
| **type**      | [`enum`](#enum)       | `"primary"`     | The type of TextLink.

### enum

| type          |
| :------------ |
| `"primary"`   |
| `"secondary"` |
