---
title: ConditionalNestedPipeline
---

The `ConditionalNestedPipeline` component is very similar to the [NestedPipeline](nested-pipeline) component.
It will also render a new nested pipeline - but it will only trigger its nested pipeline whenever a given condition is true.

The condition is based on a value in the payload.

It takes the following props:
- **when**: The name of the payload value - it can be in dot notation to get nested values.
- **matches**: The value to make an equally check (`===`) against

Basic example:

```jsx
import React from "react";
import {Pipeline, NestedPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipelineWithNestedPipeline() {
    return (
        <Pipeline>

            /* The pipeline trigger */
            {/* ... */}

            /* Pseudo(example) pipe that will ask the user to confirm
             * It will add a confirmation object to the payload with
             * details about what happended.
             */
            <ConfirmOnPipe>
            
            <ConditionalNestedPipeline when={'confirmation.confirmed'} matches={true} >
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
            </ConditionalNestedPipeline>
                
        </Pipeline>
    );
}

```

The above example display a simple use-case where we will only execute a part of our pipeline
whenever a certain condition is true. In this case, the following object should exist on our payload object:

```json
{
  "confirmation": {
    "confirmed": true
  }
}
```