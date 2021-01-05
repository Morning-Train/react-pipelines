---
title: WhenIsNotPiping
---
This component will render its children whenever its immediate parent pipeline is **NOT** executing.

It could be used to only render the trigger or some other part of the application whenever the pipeline is not executing.

```jsx
import React from "react";
import {Pipeline, WhenIsNotPiping} from "@morningtrain/react-pipelines";

export default function PipelineWithLoader() {
    return (
        <Pipeline>
            <WhenIsNotPiping>
                {/* Place trigger here */}
            </WhenIsNotPiping>
            
            {/* Place pipes here */}
        </Pipeline>
    );
}

```

See [WhenIsPiping](./when-is-piping) for the reverse case.

