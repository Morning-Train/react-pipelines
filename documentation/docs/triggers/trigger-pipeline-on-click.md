---
title: TriggerPipelineOnClick
---

The `TriggerPipelineOnClick` component will trigger the pipeline whenever its immediate child component is clicked.
This is implemented in the trigger by cloning any provided children and adding an additional `onClick` prop.

:::important
- Note that this will override any existing onClick props.
- Take care to check that the provided children actually implement onClick.
  This is especially the case when using custom-made components as most HTML tags already support the `onClick` prop.
:::

```jsx

import React from "react";
import {
    Pipeline, 
    TriggerPipelineOnClick
} from "@morningtrain/react-pipelines";

export default function TriggerPipelineOnClickExample() {    
    return (
        <Pipeline>
            <TriggerPipelineOnClick>
                <button>
                    Click me to start piping
                </button>
            </TriggerPipelineOnClick>       
            
            {/*Cusom piping action #1*/}
            {/*Cusom piping action #2*/}
            {/*Cusom piping action #3*/}
            {/*Cusom piping action #4*/}
        </Pipeline>
    );
}

```