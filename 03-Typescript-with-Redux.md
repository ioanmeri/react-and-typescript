## Typescript with Redux

Application to search NPM API Package

- Install typescript enabled project

```
npx create-react-app 05-redux-ts --template typescript
```

- Install dependencies

```
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
```

## Project Structure

Redux Store

**repositories**

- data: List of repositories from NPM
- loading: True/false whether we are fetching data
- error: String, error message if one occurred during fetch

Repositories Reducer will receive three different kinds of

**actions**

- {type: 'search_repositories'}
- {type: 'search_repositories_success', payload: string[]}
- {type: 'search_repositories_failure', payload: string}

## Wrap up

### Big Issues with Redux/React-Redux + Typescript

- Imports between files can turn into a mess very quickly

- Communicating types over to your components can be challenging

- Type def files for Redux, React-Redux, and others are possibly over-engineered
