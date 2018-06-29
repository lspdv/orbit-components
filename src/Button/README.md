# Button
To implement Button component into your project you'll need to add the import:
```jsx
import Button from "@kiwicom/orbit-components/lib/Button";
```
After adding import into your project you can use it simply like:
```jsx
<Button>Hello World!</Button>
```
## Props
Table below contains all type of the props available in Button component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| block         | `boolean`             | `false`         | If `true`, the Button will take up the full width of its container.
| bordered      | `boolean`             | `false`         | If `true`, the Button will take up a light version of Button, with border only.
| children      | `React.Node`          |                 | The content of the Button. [See Functional specs](#functional-specs)
| **component** | `string \| React.Node`| `"button"`      | The component used for the root node. Either a string to use a DOM element or a component.
| disabled      | `boolean`             | `false`         | If `true`, the Button will be disabled.
| external      | `boolean`             | `false`         | If `true`, the Button opens link in a new tab.
| href          | `string`              |                 | The URL of link to open when Button is clicked. [See Functional specs](#functional-specs)
| icon          | `React.Node`          |                 | The component for adding icon.
| onClick       | `void`                |                 | Function for handling Button onClick
| **size**      | [`enum`](#enum)       | `"normal"`      | The size of the Button.
| **type**      | [`enum`](#enum)       | `"primary"`     | The type of Button.
| width         | `number`              | `0`             | The width of the Button. Number is defined in `px`

### enum

| type          | size       |
| :------------ | :--------- |
| `"primary"`   | `"small"`  |
| `"secondary"` | `"normal"` |
| `"info"`      | `"large"`  |
| `"success"`   |            |
| `"warning"`   |            |
| `"critical"`  |            |
| `"facebook"`  |            |
| `"google"`    |            |

## Functional specs
* By passing the `href` prop into Button, it will render component `a`. If you pass `component` prop it will override this logic.

* If you want to render **Icon only Button**, you just need to let `children` prop empty and set up any `icon` you want to use.

* If the `component` prop is passed, **YourComponent** should accept props. Otherwise it won't be rendered with proper styling, e.g.:
  ```jsx
  const YourComponent = props => <div {...props} />
  
  <Button component={YourComponent}>Title</Button>
  ```
  If someone specify the children of **YourComponent** component, it will override the children prop of Button component, e.g.:
  ```jsx
  const YourComponent = props => <div {...props}>YourComponent</div>
