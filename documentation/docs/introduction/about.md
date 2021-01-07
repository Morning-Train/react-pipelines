---
title: About
slug: /
---

This section will introduce the why and how about the React Pipelines package. 

It will provide a look into the reasoning why the package is needed,
and a brief overview of how it is implemented.

## Why React Pipelines?

React is hard to learn but even harder to master. 
This is especially the case when it comes to making React code that has a clean structure and is easy to maintain.

This is an opinionated React package that follows a declarative and decoupled approach 
to making React components more maintainable. 
The package helps the developer achieve this by being a utility package
that helps to create and decouple complex flows of business logic.

For some examples inspired by real-life components, take a look a [this page](./introduction/examples).

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

The [AsyncPipeline](../base_pipelines/async-pipeline) implements `Promise.all` to resolve all pipes asynchronously 
while the generic [Pipeline](../base_pipelines/pipeline) component chains `Promise.then` calls synchronously.

