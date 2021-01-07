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
            {/* ... */}

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