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

## TS with Class Components

```
import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () =>{
    const foundUser = this.props.users.find(user => {
      return user.name === this.state.name
    })
    this.setState({ user: foundUser });
  }

  render(){
    const { name, user } = this.state;

    return <div>
        User Search
        <input type={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
    </div>;
  }
}

export default UserSearch;
```
