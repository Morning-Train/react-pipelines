---
title: Basic pipeline
---

```jsx
import React from "react";
import PropTypes from "prop-types";
import {Pipeline} from "@morningtrain/react-pipelines";

export default function BasicPipeline({trigger = null, pipes = null}) {
    return (
        <Pipeline>

            /* The pipeline trigger */
            {trigger}

            /* The pipes of the pipeline */
            {pipes}

        </Pipeline>
    );
}

BasicPipeline.propTypes = {
    trigger: PropTypes.node,
    pipes: PropTypes.node,
};

```
