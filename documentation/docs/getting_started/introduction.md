---
title: Introduction
slug: /
---

**React Pipelines** is a React package that follows a declarative and decoupled approach
to making React components more maintainable. In some ways, it is more like a micro framework.
The package helps the developer achieve this by being a utility package
that helps to create and decouple complex flows of business logic.

In short - this package is a collection of React components and hooks
that enables decoupling business logic into smaller resuable tasks.

This is accomplished by wrapping each self-contained section of logic 
into multiple smaller React components - we call this a `pipe` (since it will be a part of a larger pipeline).

The timing of the executing of the pipe logic is then determined by where in our `pipeline`
the pipe is rendered. A `pipeline` is a React component that wraps and tracks the order of 
any amount of pipes. Whenever a pipeline is triggered to execute, 
all of its pipes are executed in [sequence](../pipelines/pipeline) or [parallel](../pipelines/async-pipeline).

For some examples inspired by real-life components, take a look at [this page](./getting_started/examples).

## What does the package contain?

The core `@morningtrain/react-pipelines` package only contains a very limited set of
pipes and triggers. If we were to add additional helper components, it would only further increase the package dependencies.

Instead, we aim to keep the number of components provided in the package to a bare minimum and
let other projects and packages implement the more use-case-specific functionality.

The package is documented through the following sections:

### Getting started
This is the current section. Besides a short introduction, it also contains [installation details](../getting_started/installation),
[best practices](../getting_started/best-practices), and some common real-life [examples](../getting_started/examples) of how the package can be used.

### Pipelines
This section highlights the base pipeline components: 
[Pipeline](../pipelines/pipeline), [AsyncPipeline](../pipelines/async-pipeline),
[NestedPipeline](../pipelines/nested-pipeline), and [NestedAsyncPipeline](../pipelines/nested-async-pipeline).
[ConditionalNestedPipeline](../pipelines/conditional-nested-pipeline), and [ConditionalNestedAsyncPipeline](../pipelines/conditional-nested-async-pipeline).
[ErrorPipeline](../pipelines/error-pipeline), and [ErrorAsyncPipeline](../pipelines/error-async-pipeline).

### Pipes
The section about pipes contains details about the following base pipes provided by the package:
[CallbackOnPipe](../pipes/callback-on-pipe).

### Triggers
The section about triggers contains details about the following base triggers provided by the package:
[TriggerPipelineOnClick](../triggers/trigger-pipeline-on-click) 
and [TriggerPipelineOnCallback](../triggers/trigger-pipeline-on-callback).

### Conditionals
This section contains information about the two conditional components provided by the package:
[WhenIsPiping](../conditionals/when-is-piping) and [WhenIsNotPiping](../conditionals/when-is-not-piping).

They will conditionally render their children (or not) based on whether or not the parent pipeline is in an executing state or not. 

### Hooks
The section about hooks contains information about the following provided React custom hooks:
[useWillPipe](../hooks/use-will-pipe), [useIsPiping](../hooks/use-is-piping), and [usePipeline](../hooks/use-pipeline)

### Cookbook
The cookbook section contains extra information and examples of how to implement some common use-cases.


## Why React Pipelines?
This section will introduce the why and how about the React Pipelines package.

It will provide a look into the reasoning why the package is needed,
and a brief overview of how it is implemented.

React is hard to learn but even harder to master. 
This is especially the case when it comes to making React code that has a clean structure and is easy to maintain.



Let us try to illustrate the case by showing some code samples for two different approaches.

### How it could be done using spaghetti
This is a very crude example to illustrate a point. 
Each section of the promise could still be extracted into helper functions to make them more reusable.

It does however increase the risk of introducing bugs when having to implement the Promise chain manually in every component.

```javascript
import React from "react";

export default MySpaghettiFunctionalComponent() {
    
    const handleOnClick = () => {
        
        Promise.resolve({})
            .then((payload) => {
                {/* Custom pipe containing business logic */}
                return payload;
            })
            .then((payload) => {
                {/* Custom pipe containing business logic */}
                return payload;
            })
            .then((payload) => {
                {/* Custom pipe containing business logic */}
                return payload;
            })
            .then((payload) => {
                {/* Custom pipe containing business logic */}
                return payload;
            })
            .then((payload) => {
                console.log(payload);
                return payload;
            })
        
    }
    
    return (
        <button onClick={handleOnClick}>CLICK ME</button>
    );
}
```

### The declarative approach
A higher degree of decoupling between React components is encouraged by aiming
at keeping project-level React components free from complex non-JSX code.

Instead of implementing the logic inside the component like in the spaghetti example above, 
the following example is how it can be done using pure JSX.

```jsx
import React from "react";
import {
    Pipeline, 
    TriggerPipelineOnClick, 
    CallbackOnPipe
} from "@morningtrain/react-pipelines";

export default MyDeclarativeFunctionalComponent() {
    return (
        <Pipeline>
            <TriggerPipelineOnClick>
                <button>CLICK ME</button>
            </TriggerPipelineOnClick>
            {/* Custom pipe containing business logic */}
            {/* Custom pipe containing business logic */}
            {/* Custom pipe containing business logic */}
            {/* Custom pipe containing business logic */}
            <CallbackOnPipe callback={payload => console.log(payload)} />
        </Pipeline>
    );
}
```

The logic executed in each step of the promise will in this case have to be implemented as [custom pipes](../cookbook/custom-pipes).

## How does it work?    
At its core - it is all about JavaScript Promises. 

A `pipe` is a Promise-resolvable function (it should return a promise but might also return the payload directly).

The [AsyncPipeline](../pipelines/async-pipeline) implements `Promise.all` to resolve all pipes asynchronously 
while the generic [Pipeline](../pipelines/pipeline) component chains `Promise.then` calls synchronously.

