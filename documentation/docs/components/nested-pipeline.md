---
title: NestedPipeline
---

The `NestedPipeline` component is essentially a pipe that will trigger a new [Pipeline](pipeline) that is wrapped around its children. 

```jsx
import React from "react";
import {Pipeline, NestedPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipelineWithNestedPipeline() {
    return (
        <Pipeline>

            /* The pipeline trigger */
            {/* ... */}

            /* The pipes of the pipeline */
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            
            <NestedPipeline>
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
            </NestedPipeline>
            
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            

        </Pipeline>
    );
}

```

The above example is however a bit redundant.
Since the nested pipes will be executed sequentially, no extra functionality is actually added in this case.

The real power comes from mixing synchronous and asynchronous pipelines.

In the following example, all upper-level pipes are executed in parallel
while the nested pipes are executed in sequence. 
This means that the nested pipeline will actually start to execute at the same time as the other pipes.


```jsx
import React from "react";
import {AsyncPipeline, NestedPipeline} from "@morningtrain/react-pipelines";

export default function BasicAsyncPipelineWithNestedPipeline() {
    return (
        <AsyncPipeline>

            /* The pipeline trigger */
            {/* ... */}

            /* The pipes of the pipeline */
            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            
            <NestedPipeline>
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
                {/* Sequential nested pipe */}
            </NestedPipeline>

            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            
        </AsyncPipeline>
    );
}

```