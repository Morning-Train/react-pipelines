import React from 'react';
import useWillPipe from '../hooks/use-will-pipe';
import AsyncPipeline from './AsyncPipeline';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback';

export default function NestedAsyncPipeline({ children }) {
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
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </AsyncPipeline>
  );
}
