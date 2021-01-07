---
title: AsyncPipeline
---



The `AsyncPipeline` implements `Promise.all` to resolve all pipes asynchronously.
Since all pipes are resolving in parallel, it will not be possible to access or pass along the payload between each pipe.
Because of this - asynchronous pipelines should only be used with pipes that performs an independent action (Like triggering an AJAX request).

```jsx
import React from "react";
import {AsyncPipeline} from "@morningtrain/react-pipelines";

export default function BasicAsyncPipeline() {
    return (
        <AsyncPipeline>

            /* The pipeline trigger */
            {/* ... */}

            /* The pipes of the pipeline */
            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            {/* Async pipe */}
            

        </AsyncPipeline>
    );
}

```

It is possible to receive a semi-async pipeline by using a [NestedPipeline](nested-pipeline) or the [NestedAsyncPipeline](nested-async-pipeline).