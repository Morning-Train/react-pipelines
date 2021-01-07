---
    title: CallbackOnPipe
---

The `CallbackOnPipe` pipe will trigger a pipeline whenever it is executed in the pipeline.
A common use-case is to trigger a state change in its pipeline component whenever the pipeline is done.

It takes a single prop named `callback`.

In the following example, an alternative state will display when clicking the first button. It will disappear again when the pipeline is done.

```jsx

import React from "react";
import {
    Pipeline, 
    CallbackOnPipe, 
    TriggerPipelineOnClick
} from "@morningtrain/react-pipelines";

export default function CallbackOnPipeExample() {
    
    const [active, setActive] = React.useState(false);
    
    if(!active) {
        return (
            <button onClick={() => setActive(true)}>
                Click me to start
            </button>
        )
    }
    
    return (
        <Pipeline>

            <span>Are you sure that you would like to pipe?</span>
            <TriggerPipelineOnClick>
                <button>
                    Yes
                </button>
            </TriggerPipelineOnClick>
            <button onClick={() => setActive(false)}>No</button>            
            
            {/*Cusom piping action #1*/}
            {/*Cusom piping action #2*/}
            {/*Cusom piping action #3*/}
            {/*Cusom piping action #4*/}
            
            <CallbackOnPipe callback={() => setActive(false)} />
        </Pipeline>
    );
}

```
