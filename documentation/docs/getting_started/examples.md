---
title: Examples
---

This page contains some common real-life examples of how to use pipelines.
The examples are JSX-only and should be considered to be pseudo-code.

In order to actually make the examples work in your project,
the different components not provided by this package would have to be imported from a different package
or be implemented on a project level.

Dependencies resolvable by this package are provided as imports above the JSX example.

### Navigate on click
This example will navigate the user to a different route when a button is clicked.
It does this by implementing a custom pipe called `NavigateOnPipe`. 
This pipe would hook into whatever routing package the application is using and initiate a route change.

```jsx
import {
    Pipeline,
    TriggerPipelineOnClick
} from "@morningtrain/react-pipelines";
/* ----------------------------------------- */
<Pipeline>
    <TriggerPipelineOnClick>
        <a>Click me to navigate</a>
    </TriggerPipelineOnClick>
    <NavigateOnPipe route={'users.index'} />
</Pipeline>
```

For easier reuse, this could be transformed into a component that can be wrapped around any clickable component.

```jsx

export default function NavigateOnClick({children, route}) {
    return (
        <Pipeline>
            <TriggerPipelineOnClick>
                {children}
            </TriggerPipelineOnClick>
            <NavigateOnPipe route={route} />
        </Pipeline>
    );
}

```

Our `NavigateOnClick` component is independent of any layout constraints and can be used with any type of button that is clickable.
This allows for easier reuse. It is entirely possible to implement a project-level `Link` component 
that both provides layout and functionality by pairing the above reusable component with a UI component.

