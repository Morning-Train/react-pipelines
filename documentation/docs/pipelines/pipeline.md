---
title: Pipeline
---

The `Pipeline` component will execute all child pipe components in sequence

```jsx
import React from "react";
import {Pipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <Pipeline>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Sequential pipe #1 */}
            {/* Sequential pipe #2 */}
            {/* Sequential pipe #3 */}            
            {/* Sequential pipe #4 */}
            {/* Sequential pipe #5 */}
            {/* Sequential pipe #6 */}
        </Pipeline>
    );
}

```

(Since 1.6.0) It is possible to pass either a `async` or `nested` boolean prop to the Pipeline component
to make it render some of the more advanced pipeline types 
([AsyncPipeline](./async-pipeline), [NestedPipeline](./nested-pipeline) and [NestedAsyncPipeline](./nested-async-pipeline)).

By default, both `async` and `nested` are false.

### async = true
```jsx
import React from "react";
import {Pipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <Pipeline async>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </Pipeline>
    );
}

```
is the same as:

```jsx
import React from "react";
import {AsyncPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <AsyncPipeline>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </AsyncPipeline>
    );
}

```

### async = true & nested = true
```jsx
import React from "react";
import {Pipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <Pipeline async nested>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </Pipeline>
    );
}

```
is the same as:

```jsx
import React from "react";
import {AsyncPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <NestedAsyncPipeline>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </NestedAsyncPipeline>
    );
}

```

### nested = true
```jsx
import React from "react";
import {Pipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <Pipeline nested>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </Pipeline>
    );
}

```
is the same as:

```jsx
import React from "react";
import {NestedPipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline() {
    return (
        <NestedPipeline>
            /* The pipeline trigger */
            {/* ....... */}

            /* The pipes of the pipeline */
            {/* Pipe #1 */}
            {/* Pipe #2 */}
            {/* Pipe #3 */}
            {/* ....... */}
        </NestedPipeline>
    );
}

```