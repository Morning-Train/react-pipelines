# React Pipelines &middot; [![npm version](https://img.shields.io/npm/v/@morningtrain/react-pipelines.svg?style=flat)](https://www.npmjs.com/package/@morningtrain/react-pipelines) [![npm downloads](https://img.shields.io/npm/dm/@morningtrain/react-pipelines)](https://www.npmjs.com/package/@morningtrain/react-pipelines)

This is an opinionated React package that follows a declarative and decoupled approach to making React components more maintainable. The package helps the developer achieve this by being a utility package that helps to create and decouple complex flows of business logic.

In short - this package is a collection of React components and hooks that enables decoupling business logic into smaller resuable tasks.

This is accomplished by wrapping each self-contained section of the logic of a flow into multiple smaller React components - called a pipe in our context.

The timing of the executing of the pipe logic is then determined by where in our pipeline the pipe is rendered. A pipeline is a React component that wraps and tracks the order of any amount of pipes. Whenever a pipeline is triggered to execute, all of its pipes are executed in sequence or parallel.

For some examples inspired by real-life components, take a look at [this page](https://react-pipelines.daf-docs.dev/getting_started/examples/).

The full documentation for this package are [located here](https://react-pipelines.daf-docs.dev/)

## Credits
This package is developed and actively maintained by [Morningtrain](https://morningtrain.dk).

<!-- language: lang-none -->
     _- _ -__ - -- _ _ - --- __ ----- _ --_  
    (         Morningtrain, Denmark         )
     `---__- --__ _ --- _ -- ___ - - _ --_ ´ 
         o                                   
        .  ____                              
      _||__|  |  ______   ______   ______ 
     (        | |      | |      | |      |
     /-()---() ~ ()--() ~ ()--() ~ ()--() 
    --------------------------------------