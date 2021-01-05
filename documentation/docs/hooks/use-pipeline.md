---
title: usePipeline
---

The usePipeline hook implement `React.useContext` with the `PipelineContext`. 

It is essentially a shortcut to this implementation:

````jsx
import React from "react";
import {PipelineContext} from "@morningtrain/react-pipelines";

export default function TestComponentUsingPipeline() {
    
    const pipeline = React.useContext(PipelineContext);
    
    /// Do something with the pipeline instance.
    
    return null;
}
````

The implementation becomes a bit simpler by utilizing the custom hook.

````jsx
import React from "react";
import {usePipeline} from "@morningtrain/react-pipelines";

export default function TestComponentUsingPipeline() {
    
    const pipeline = usePipeline();
    
    /// Do something with the pipeline instance.
    
    return null;
}
````

