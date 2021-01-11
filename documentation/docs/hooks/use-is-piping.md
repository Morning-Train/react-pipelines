---
title: useIsPiping
---

This is a custom hook that listens to the `isPiping` property on the pipeline context object.

The pipeline is internally storing the isPiping (boolean) status in a React ref and will trigger
any assigned event listeners when changing.

`useIsPiping` returns a React state and setter function and can be used like this:

```jsx

import React from "react";
import {useIsPiping} from "@morningtrain/react-pipelines";

export default function CompoentUsingIsPiping(){
    
    const [isPiping] = useIsPiping();

    return isPiping ? 'We are piping': 'Nothing piping right now';
}

```

Or if the setter is needed (which should rarely ever be the case)

```jsx

import React from "react";
import {useIsPiping} from "@morningtrain/react-pipelines";

export default function CompoentUsingIsPipingSetter(){
    
    const [isPiping, setIsPiping] = useIsPiping();
    
    const handleOnClick = () => {
        if(isPiping) {
            setIsPiping(false);
        }
    };
    
    return (
        <button onClick={handleOnClick}>
            {isPiping ? 'We are piping - click to stop': 'Nothing piping right now'}
        </button>
    );
}

```

Note that changing the `isPiping` state manually will not actually trigger or abort the pipeline.

The main purpose will be to create a conditional component the renders its children (or not) based on the isPiping state.

```javascript

import React from "react";
import {useIsPiping} from "@morningtrain/react-pipelines";

export default function WhenIsPiping({children}){
    
    const [isPiping] = useIsPiping();
    
    return isPiping  ? children : null;
}

```

It could then be used like this:

```jsx

<WhenIsPiping>
    {/* Some loading animation */}
</WhenIsPiping>

```

The above components ([WhenIsPiping](../conditionals/when-is-piping)) and its opposite component ([WhenIsNotPiping](../conditionals/when-is-not-piping)) are provided from the package. 
