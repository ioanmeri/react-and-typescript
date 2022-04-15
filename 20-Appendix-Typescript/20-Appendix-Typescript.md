# Appendix

## TS type system

Typescript = JavaScript + A type system

The TS Type System

- Helps us catch errors during development

- Uses 'type annotations' to analyze our code

- Only active during development

- Doesn't provide any performance optimization

### Flow

- Typescript Code (JavaScript with type annotations)

- Typescript compiler

- Plain old Javascript

- Browser executes plain JavaScript, has no idea we wrote Typescript

Always executing JS

[In browser typescript compiler](https://typescriptlang.org/play)

### Summary

- Writing Typescript is the **same** as writing Javascript with some "extra documentation"

- Typescript has no effect on how our code gets executed by the browser or Node

- It is best to think of Typescript as being like a friend sitting behind you while you are coding.

## Typescript compiler

```
npm install -g typescript ts-node
```

Typescript cli: `tsc`

Compile a file: `tsc index.ts`, that creates a index.js file which can be run with `node index.js`

`ts-node` combines these 2 commands into 1

- Automatically compiles a given file

- Automatically executes the resulting JavaScript

## Focus

- Syntax + Features

  What is an interface? What is the syntax for defining an interface?

  - Understand basic types in TS
  - Function typing + annotations
  - Type definition files
  - Arrays in TS
  - Modules systems
  - Classes + Refresher on OOP

- Design Patterns with TS

  How do we use interfaces to write reusable code?

  - Projects

## Types

Easy way to refer to different properties + functions that a value has

"red"

- It's a string
- It a value that has all the properties + methods that we assume that a string has

Properties + Methods a 'string' has in JS

- charAt()
- charCodeAt()
- concat()
- includes()
- endsWith()
- indexOf()
- lastIndexOf()
- localeCompare()
- match()

### More on types

string

- 'hi there'
- ""
- 'Today is Monday'

number

- .000025
- -20
- 4000000

boolean

- true
- false

Date

- new Date()

Todo

- {id: 1, completed: true, title: "Trash"}

### Primitive and Object Types

Primitive Types

- number
- string
- boolean
- symbol
- void
- null
- undefined

Object Types

- functions
- classes
- arrays
- objects

### Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors

- Types allow other engineers to understand what values are flowing around our codebase

### Where do we use types?

- Everywhere!

## Type Annotations + Type Inference

- Variables
- Functions
- Objects

## Type annotations

Code we add to tell Typescript what type of value a variable will refer to

#### When to use

- When we declare a variable on one line then initialize it later

- When we want a variable to have a type that can't be inferred

- When a function returns the 'any' type and we need to clarify the value

## Type inference

#### When to use

- Always !

Typescript tries to figure out what type of value a variable refers to

Variable Declaration / Variable Initialization

```
const color = 'red';
```

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us

### any Type

- A type, just as 'string' or 'boolean' are

- Means TS has no idea what this is - can't check for correct property references

- **Avoid variables with 'any' at all costs**

### Type annotations for functions

Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

### Type inference for functions

Typescript tries to figure out what type of value a function will **return**

- Whenever working with **functions**, we are going to rely upon **Annotations 100%** for both arguments and return types

- Whenever working with **variables**, we rely upon Inference as much as we possible can, unless we are in the 3 scenarios:
  - function that returns 'any
  - delayed initialization
  - variable that type can't be inferred

## Typed Arrays

Arrays where each element is some consistent type of value

### Why do we care?

- TS can do type inference when extracting values from an array

- TS can prevent us from adding incompatible values to the array

- We can get help with 'map', 'forEach', 'reduce' functions

- Flexible - arrays can still contain multiple different types
