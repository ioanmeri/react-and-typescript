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
  - function that returns 'any'
  - delayed initialization
  - variable that type can't be inferred

## Typed Arrays

Arrays where each element is some consistent type of value

### Why do we care?

- TS can do type inference when extracting values from an array

- TS can prevent us from adding incompatible values to the array

- We can get help with 'map', 'forEach', 'reduce' functions

- Flexible - arrays can still contain multiple different types

## Tuples

Array-like structure where each element represents some property of a record

```
{
  "color": "brown",
  "carbonated": true,
  "sugar": 40
}
```

to tuple:

```
["brown", true, 40]
```

- Fixed order of elements

- if we use a tuple to represent some meaningful data, it's really hard for engineers to understand the meaning of the data

## Interfaces

Interfaces + Classes = Hot to get really strong code reuse in TS

Creates a new type, describing the property names and value types of an object

From example

- Interface Reportable

  - Reportable is a gatekeeper to 'printSummary'

- oldCivic, drink
  - Must satisfy the 'Reportable' interface to work with 'printSummary'

### General Strategy for Reusable Code in TS

1. Create functions that accept arguments that are typed with interfaces

2. Objects/classes can decide to 'implement' a given interface to work with a function

- interface XYZ

  - XYZ is a gatekeeper to 'some function'

- some function

- Object #1

  - Must satisfy the 'XYZ' interface to work with 'some function'

- Object #2
  - Myst satisfy the 'XYZ' interface also

## Classes

Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

### Modifiers

- public

  - This method can be called any where, any time

- private

  - This method can only be called by other methods in this class

- protected

  - This method can be called by other methods in this class, or by other methods in child classes

### Why we care

- When you define a method as being private, we are not adding any layer of application security

- We mark as private, to restrict methods that other developers can call

## Tools

Tool to help us run Typescript in the browser

```
npm install -g parcel-bundler
```

- Start with parcel tool

- feed a `index.html` file into it

- Parcel is going to see a script tag `script of 'index.ts'`

- Parcel will compile it to JS then replace this script tag

```
parcel index.html
```

### Type Definition File

The vast majority of time that you are using a JS project inside of your typescript code, you might have to install that type definition file. Some JS libraries include that type definition file by default, other ones less popular do not include it automatically, so you will have to install it separately.

e.g.

```
npm install @types/faker
```

### Google maps global object

Install type definition file to tell TS there is a global variable called google and all the different properties and functions that it has

- By creating a `CustomMap` that has a private property a Google maps instance, **we completely eliminated the API surface** of the Google Map, which significantly decreases the complexity of our application.

- **Invert dependency**: Rather than custom map depend on all these dependencies (User.ts, Company.ts, CarLot.ts, Park.ts...), it is up to it's class (User.ts) to satisfy the maps requirements

- Add instructions on how to be an argument to 'addMarker'

## App Overview

- Limit the API surface of the google map by creating a private method to hold a new map instance

- Invert dependency by using an interface: Instead of Custom map trying to accommodate all the different classes, other classes have to accommodate Custom Map

- Start seeing errors in the correct location. We can optionally choose to implement an interface.
