---
title: Basic async pipeline
---

```jsx
import React from "react";
import PropTypes from "prop-types";
import {AsyncPipeline} from "@morningtrain/react-pipelines";

export default function BasicAsyncPipeline({trigger = null, pipes = null}) {
    return (
        <AsyncPipeline>

            /* The pipeline trigger */
            {trigger}

            /* The pipes of the pipeline (they will trigger in parallel) */
            {pipes}

        </AsyncPipeline>
    );
}

BasicAsyncPipeline.propTypes = {
    trigger: PropTypes.node,
    pipes: PropTypes.node,
};

```
