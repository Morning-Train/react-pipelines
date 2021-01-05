---
title: Custom pipes
---

The [useWillPipe](../hooks/use-will-pipe) hook is used to implement custom pipes.

A custom pipe is a React functional component the renders `null` 
(although it could in principle return another React component).
The pipe becomes more predictable by not returning anything.

This is the simplest possible pipe implementation.

````jsx
import React from "react";
import {useWillPipe} from "@morningtrain/react-pipelines";

export default function CustomPipe() {
    
    useWillPipe(payload => {
        /// Perform pipe action
        
        return payload;
    });
    
    return null;
}
````

The pipe will execute synchronously any logic added inside the callback.

:::important
Pipes gets passed a payload object that should always be returned from the pipe.
If the payload is not returned, it will not be provided to any following pipes.
:::

In order to execute any asynchronous tasks in the pipe, 
the pipe should return a promise which resolves the payload whenever the task has been completed. 

````jsx
import React from "react";
import {useWillPipe} from "@morningtrain/react-pipelines";

export default function CustomAsyncPipe() {
    
    useWillPipe(payload => {
        return new Promise(((resolve, reject) => {
            
            /// Perform async pipe action
            asyncTask()
                .then(() => {
                    resolve(payload);
                })
                .catch(() => {
                    reject(new Error('Something bad happended'));
                });
            
        }));
    });
    
    return null;
}
````

It is possible to prevent the execution of any following pipes by rejecting the promise 
or by throwing an Exception in the case of the synchronous pipe.

### useEffect dependencies
The `useWillPipe` hook implements `React.useEffect` under the hood. 
A `dependencies` arguments has been added to `useWillPipe` 
in order to support passing any dependencies to `useEffect`.

Passing an array with all dependencies as the second parameter 
will ensure that the executed pipe has access to all recent instances of any variables 
defined outside the scope of the callback.

````jsx
import React from "react";
import {useWillPipe} from "@morningtrain/react-pipelines";

export default function CustomAsyncPipe() {
    
    const someDependency = React.useState(false);
    
    useWillPipe(payload => {
        return new Promise(((resolve, reject) => {
            
            /// Perform async pipe action
            asyncTask(someDependency)
                .then(() => {
                    resolve(payload);
                })
                .catch(() => {
                    reject(new Error('Something bad happended'));
                });
            
        }));
    }, [someDependency]);
    
    return null;
}
````

An empty array will be passed to `useEffect` if nothing is provided to `useWillPipe`.
The resulting behaviour will be that its internal useEffect callback will only trigger 
when the component mounts and unmounts.
:::important

Always pass all dependencies as the second parameter to the `useWillPipe` hook.
If not all dependencies are provided, then it might not be the current version of the pipe callback that is executed.

The `useWillPipe` hook is essentially a wrapper around [React.useEffect](https://reactjs.org/docs/hooks-effect.html).

Any dependency should be stable - meaning that they should not change on every render. 
Unstable dependencies will lead to undesireable infinite loops.

:::
