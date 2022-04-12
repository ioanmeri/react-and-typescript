# Appendix

## TS type system

Typescript = JavaScript + A type system

The TS Type System

- Helps us catch errors during development

- Uses 'type annotations' to analyze our code

- Only active during development

- Doesn't provide any performance optimization

## Flow

- Typescript Code (JavaScript with type annotations)

- Typescript compiler

- Plain old Javascript

- Browser executes plain JavaScript, has no idea we wrote Typescript

Always executing JS

[In browser typescript compiler](https://typescriptlang.org/play)

## Summary

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
