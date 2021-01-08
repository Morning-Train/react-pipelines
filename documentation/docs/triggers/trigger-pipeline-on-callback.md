---
title: TriggerPipelineOnCallback
---

The `TriggerPipelineOnCallback` pipeline trigger is an advanced component 
used internally to implement the [nested pipelines](../pipelines/nested-pipeline).

To make it easier to explain how it works, let us take a look at how `NestedPipeline` is implemented in the package.

```jsx
import React from 'react';
import useWillPipe from '../hooks/use-will-pipe';
import Pipeline from './Pipeline';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback';

export default function NestedPipeline({ children }) {
  const callbackRef = React.useRef(null);

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback;
  };

  useWillPipe(() => {
    if (callbackRef.current && typeof callbackRef.current === 'function') {
      callbackRef.current();
    }
  });

  return (
    <Pipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </Pipeline>
  );
}

```

**The base functionality is this**: 

A callback function provided to the trigger as the `callback` 
prop will be executed on mount (in reality when a change to the pipeline context or the provided callback is changed). 

In the above example, this is the `updateCallbackRef` function. 
It will get passed a new function when called. 
This passed function is the one we actually have to execute in order to trigger the pipeline.

In this case, we store it internally in a React ref hook for later use.
We are using a ref instead of for instance a state to avoid rerendering our entire component.
If we were using a state, we would also have to add the state variable as a dependency to the `useWillPipe` hook.

Whenever our component is then piping, it will call the function and trigger its child pipeline.

Instead of using `useWillPipe` as in our example, it could also be by any other *event* in the component.