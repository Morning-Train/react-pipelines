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

### Delete with extra confirmation on click

One could develop a `ConfirmOnPipe` custom pipe that would implement a confirmation modal when triggered.
It could utilize a nested pipeline and look something like the following example.
Note that the `modalRef` variable defined in the example would have to be declared in the React component.

```jsx
import {
    NestedPipeline,
    CallbackOnPipe
} from "@morningtrain/react-pipelines";
/* ----------------------------------------- */
<NestedPipeline>
    <Modal ref={modalRef}>
        <ConfirmModalContent onConfirm={confirmFunction} />
    </Modal>
    <OpenModalOnPipe modalRef={modalRef} />
    <CallbackOnPipe callback={awaitConfirmFunction} />
    <CloseModalOnPipe modalRef={modalRef} />
</NestedPipeline>

```

The `OpenModalOnPipe` and `CloseModalOnPipe` pipe components are used to open and close the modal
whenever that step in the pipeline is reached.

The `awaitConfirmFunction` function will return a promise that only resolves whenever the `confirmFunction` is called
by the `ConfirmModalContent` component.
This would be accomplished by `awaitConfirmFunction` setting a local resolve and reject variable in the React component
that should contain the value from the promise. It could look like this:

```js
const awaitConfirmFunction = (payload) => {
    return new Promise((resolve, reject) => {
        _resolve.current = data => {
            payload.data = data;
            resolve(data);
        };
        _reject.current = (err) => {
            reject(err);
        };
    });
};
```
and 
```js
const confirmFunction = (data) => {
    if (_resolve.current !== null) {
        _resolve.current(data);
    }
};
```

With the above functionality, it would not be possible to implement a pipeline 
that will send an ajax DELETE request whenever the user clicks a button.
The example uses a pseudo `SendDeleteAjaxRequestOnPipe` component.

```jsx
import {
    Pipeline,
    TriggerPipelineOnClick
} from "@morningtrain/react-pipelines";
/* ----------------------------------------- */
<Pipeline>
    <TriggerPipelineOnClick>
        <a>Click me to delete</a>
    </TriggerPipelineOnClick>
    <ConfirmOnPipe confirmText={'Are you sure that you would like to delete?'} />
    <SendDeleteAjaxRequestOnPipe />
</Pipeline>
```

Having implemented the `ConfirmOnPipe` pipe component - we are now able to reuse it in other pipelines.
We could for instance include a confirmation modal before navigating in the first `NavigateOnClick`example.

