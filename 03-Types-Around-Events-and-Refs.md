# Types Around Events and Refs

Why are we getting error message when callback is declared as a constant but not if we define the same function directly inline on the onChange prop

Inline (no error):

```
const EventComponent: React.FC = () => {
  return <div>
    <input onChange={(e) => {console.log(e)}} />
  </div>
};

```

Separate function (has error):

```
const EventComponent: React.FC = () => {
  const onChange = (e) => {
    console.log(e);
  }

  return <div>
    <input onChange={onChange} />
  </div>
};

```

**because of the type inference system**

The type inference system is not applied if we define the function ahead of time

## Typed event

```
const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return <div>
    <input onChange={onChange} />
    <div draggable onDragStart={onDragStart}>Drag Me!</div>
  </div>
};

export default EventComponent;
```
