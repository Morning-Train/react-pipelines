---
title: NestedAsyncPipeline
---


The `NestedAsyncPipeline` component is essentially a pipe that will trigger a new [AsyncPipeline](async-pipeline) that is wrapped around its children.

The real power comes from mixing synchronous and asynchronous pipelines.

In the following example, all upper-level pipes are executed in sequence
while the nested pipes are executed in parallel.
The last 3 pipes after the nested pipeline will not execute until all 3 async pipes are done.

```jsx
import React from "react";
import {Pipeline, NestedAsyncPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipelineWithNestedAsyncPipeline() {
    return (
        <Pipeline>

            /* The pipeline trigger */
            {/* ... */}

            /* The pipes of the pipeline */
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            
            <NestedAsyncPipeline>
                {/* Async nested pipe */}
                {/* Async nested pipe */}
                {/* Async nested pipe */}
            </NestedAsyncPipeline>
            
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            {/* Sequential pipe */}
            

        </Pipeline>
    );
}

```