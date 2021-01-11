import React from 'react';
import usePipeline from './use-pipeline';

export default function useIsPiping() {
  const pipeline = usePipeline();

  if (pipeline === null) {
    throw new Error('useIsPiping hook are used outside the scope of a pipeline');
  }

  const [value, setValue] = React.useState(pipeline.isPiping);

  React.useEffect(() => {
    const disposer = pipeline.onIsPipingChange((isPipingValue) => {
      setValue(isPipingValue);
    });

    return () => {
      disposer();
    };
  }, [pipeline]);

  return [value, setValue];
}
