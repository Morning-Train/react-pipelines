import React from 'react';
import usePipeline from '../hooks/use-pipeline';

function TriggerPipelineOnCallback({ callback }) {
  const pipeline = usePipeline();

  React.useEffect(() => {
    callback(() => {
      const payload = {};

      pipeline.trigger(payload)
        .catch((err) => console.log('caught error', err));
    });
  }, []);

  return null;
}

export default TriggerPipelineOnCallback;
