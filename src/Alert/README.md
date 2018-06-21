# Alert
To implement Alert component into your project you'll need to add the import:
```jsx
import Alert from "@kiwicom/orbit-components/lib/Alert";
```
After adding import into your project you can use it simply like:
```jsx
<Alert>Hello World!</Alert>
```
## Props
Table below contains all type of the props available in Alert component.

| Name          | Type                            | Default         | Description                      |
| :------------ | :------------------------------ | :-------------- | :------------------------------- |
| children      | `React.Node`                    |                 | The content of the Alert.
| closable      | `boolean`                       | `false`         | If `true`, the Alert will set up the close icon. [See Functional specs](#functional-specs)
| icon          | `React.Element<any> \| boolean` |                 | The component for adding icon. [See Functional specs](#functional-specs)
| onClose       | `void`                          |                 | Function for handling Alert onClose
| title         | `string`                        |                 | The title of the Alert.
| **type**      | [`enum`](#enum)                 | `"info"`        | The type of Alert.

### enum

| type          |
| :------------ |
| `"info"`      |
| `"success"`   |
| `"warning"`   |
| `"critical"`  |

## Functional specs
* By passing the `closable` prop into Alert, you will be able to handle `onClose` function.

* If you set up `icon` prop as `true`, for each type of Alert is rendered appropriate icon. If you want to render your own icon, just pass it to the `icon` prop as `React.Element`. Alert without `icon` prop have no icon.
