---
title: OnClick pipeline
---
This example explains a way to create a pipeline that will trigger 
whenever the user click on a React component. 

A typical use-case will be to make a custom action in the React project.

## Basic implementation
To implement a pipeline that will trigger `onClick` - 
we will utilize the `TriggerPipelineOnClick` trigger component.
It will trigger the pipeline whenever the immediate child component is clicked.

:::important

When using the `TriggerPipelineOnClick` pipeline trigger component,
it is important to only pass children to it that implements an `onClick` prop.

:::

Example of a common implementation:

```jsx
import React from "react";
import PropTypes from "prop-types";
import {Pipeline, TriggerPipelineOnClick} from "@morningtrain/react-pipelines";

export default function OnClickPipeline({children = null, pipes = null}) {
    return (
        <Pipeline>
            
            /* The pipeline trigger */
            <TriggerPipelineOnClick>
                {children}
            </TriggerPipelineOnClick>

            /* The pipes of the pipeline */
            {pipes}

        </Pipeline>
    );
}

BasicPipeline.propTypes = {
    pipes: PropTypes.node,
};

```
It can be used like this:
```jsx
<OnClickPipeline pipes={/* ... */} >
    <button>
        CLICK ME TO TRIGGER PIPELINE
    </button>
</OnClickPipeline>
```
