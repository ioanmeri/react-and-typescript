# Types around Props and State

Using Typescript with React? That's great, but not too much is going to change

- Applying types to component props

- Applying types to state in a component

- Types with event handlers

- ...Several other assorted areas

## Parent Child props

Parent -->

- Interface to define what props Child expects to receive

--> child

### Two Big Checks by Typescript

- Are we providing the correct props to Child when we show it in Parent?

- Are we using the correctly named + typed props in Child?

## Explicit Component Type Annotations

```
interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
}
```

Downside: Typescript doesn't understand that we are defining a React Component

- So it thinks that 'Child' will not have these properties, which all react Components can optionally provide these properties

- propTypes
- displayName
- defaultProps
- contextTypes

Fix this by:

```
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
}
```

- 'Child' will be a React function component

- 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'

- 'Child' will receive props of type 'ChildProps'

## Types around State

When type inference does work:

```
const [name, setName] = useState('');
```

Initialize an array and define a value for it

```
const [guests, setGuests] = useState<string[]>([]);
```

otherwise it is automatically inferred to `never[]` type as it is an empty array and TS has not idea of the type, and actually does not expect to have any value

With different type of values:

```
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

```
