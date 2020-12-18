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
