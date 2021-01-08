import React from 'react';
import useWillPipe from '../hooks/use-will-pipe';
import AsyncPipeline from './AsyncPipeline';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback';

export default function NestedAsyncPipeline({ children }) {
  const callbackRef = React.useRef(null);

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback;
  };

  useWillPipe((payload) => new Promise((resolve, reject) => {
    Promise.resolve(callbackRef.current(payload))
      .then((p = {}) => {
        let finalP = { ...payload };

        if (Array.isArray(p)) {
          p.forEach((_p) => {
            finalP = { ...finalP, ..._p };
          });
        }

        resolve(finalP);
      })
      .catch((err) => {
        reject(err);
      });
  }));

  return (
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </AsyncPipeline>
  );
}
