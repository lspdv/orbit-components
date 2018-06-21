# CarrierLogo
To implement CarrierLogo component into your project you'll need to add the import:
```jsx
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
```
After adding import into your project you can use it simply like:
```jsx
<CarrierLogo carriers={Carrier} />
```
## Props
Table below contains all type of the props available in CarrierLogo component.

| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| **carriers**  | [`Carrier[]`](#carrier) |                 | The content of the CarrierLogo, passed as array of objects.
| size          | [`enum`](#enum)                  | `"large"`       | The size of the CarrierLogo. [See Functional specs](functional-specs)

## Carrier
Table below contains all type of the props available for object in Carrier array.

| Name     | Type     | Description                      |
| :------- | :------- | :------------------------------- |
| **code** | `string` | The code of the Carrier, defines which logo will be rendered.
| name     | `string` | The name of the Carrier, mainly for information.

### enum

| size       |
| :--------- |
| `"small"`  |
| `"medium"` |
| `"large"`  |

## Functional specs
* The `size` prop is applying when `carriers` prop has defined only one object in Carrier array.
