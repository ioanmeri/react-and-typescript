# Techniques for Error Handling

## Solving compilation error and runtime error

Capturing asynchronous errors inside of evaluated code

```
window.addEventListener('error', (event) => {
  console.log(event)
});
```

This listener does not get called if we run code synchronously and have a try catch block,

but get's called if there is an error in async code like setTimeout
