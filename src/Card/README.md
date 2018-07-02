# Card
To implement Card component into your project you'll need to the import at least the Card and the [CardContent](#cardcontent):
```jsx
import Card from "@kiwicom/orbit-components/lib/Card";
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent";
```
After adding import into your project you can use it simply like:
```jsx
<Card>
  <CardContent>
    Hello World!
  </CardContent>
</Card>
```
## Props
Table below contains all types of the props available in ButtonLink component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| children      | `React.Node`          |                 | The content of the Card. [See Subcomponents](#sub-components)
| closable      | `boolean`             | `false`         | If `true`, the Close icon will be displayed. [See Functional specs](#functional-specs)
| onClose       | `void`                |                 | Function for handling onClick event.

## Functional specs
* By passing the `closable` prop into Card, you will be able to handle `onClose` function and Close icon will be displayed.

## Subcomponents
Card component offers a good flexibility and many variations in its usage. There are four subcomponents which you may use.

### CardHeader
```jsx
import Card from "@kiwicom/orbit-components/lib/Card";
import CardHeader from "@kiwicom/orbit-components/lib/Card/CardHeader";
```
#### Usage:
```jsx
<Card>
  <CardHeader title="Hello World!" />
</Card>
```

#### Props
Table below contains all types of the props in CardHeader component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| icon          | `React.Node`          |                 | Displayed icon.
| **title**     | `string `             |                 | The title of the CardHeader.
| subTitle      | `string`              |                 | The description of the CardHeader.

### CardContent
```jsx
import Card from "@kiwicom/orbit-components/lib/Card";
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent";
```
#### Usage:
```jsx
<Card>
  <CardContent>
    Hello World!
  </CardContent>
</Card>
```

#### Props
Table below contains all types of the props in CardContent component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `string `             |                 | The content of the CardContent.

### CardSection
```jsx
import Card from "@kiwicom/orbit-components/lib/Card";
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent";
```
#### Usage:
```jsx
<Card>
  <CardSection>
    Hello World!
  </CardSection>
</Card>
```

#### Props
Table below contains all types of the props in CardContent component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `string `             |                 | The content of the CardSection.
