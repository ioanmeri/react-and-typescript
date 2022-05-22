# How to Extract Reusable Components

- Refactoring out a Preview Component

- Extracting Bundling Logic

- Fixing a Few Warnings

- Multiple Editors and Preview Windows

We have created a new component `CodeCell` that acts like a wrapper for the `CodeEditor` and the `Preview` components.

Now we can display multiple instances of the `<CodeCell>` component in our main `<App />`
