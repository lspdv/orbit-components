# Heading
To implement Heading component into your project you'll need to add the import:
```jsx
import Heading from "@kiwicom/orbit-components/lib/Heading";
```
After adding import into your project you can use it simply like:
```jsx
<Heading>Hello World!</Heading>
```
## Props
Table below contains all types of the props available in Heading component.

| Name          | Type                  | Default    | Description                      |
| :------------ | :---------------------| :--------- | :------------------------------- |
| children      | `React.Node`          |            | The content of the Heading.
| **element**   | `React.Node`          | `"h1"`     | The element used for the root node.
| **type**      | [`enum`](#enum)       | `"title1"` | The color type of Heading.

### enum

| element | type        |
| :------ | :---------- |
| `"h1"`  | `"display"` |
| `"h2"`  | `"title1"`  |
| `"h3"`  | `"title2"`  |
| `"h4"`  | `"title3"`  |
| `"h5"`  |             |
| `"h6"`  |             |
