---
title: WhenIsPiping
---
This component will render its children whenever its immediate parent pipeline is executing (running its pipeline).

It could be used to make a loading animation appear whenever the pipeline is running.

```jsx
import React from "react";
import {Pipeline, WhenIsPiping} from "@morningtrain/react-pipelines";

export default function PipelineWithLoader() {
    return (
        <Pipeline>
            {/* Place trigger here */}
            {/* Place pipes here */}
            
            <WhenIsPiping>
                {/* Some custom loader */}
            </WhenIsPiping>
        </Pipeline>
    );
}

```

See [WhenIsNotPiping](./when-is-not-piping) for the reverse case.
