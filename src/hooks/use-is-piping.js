import React from 'react';
import usePipeline from './use-pipeline';

export default function useIsPiping() {
  const pipeline = usePipeline();

  if (pipeline === null) {
    throw new Error('useIsPiping hook are used outside the scope of a pipeline');
  }

  const boxedValue = pipeline.isPiping;

  const [value, setValue] = React.useState(boxedValue.get());

  React.useEffect(() => {
    const disposer = boxedValue.observe(() => {
      const currentBoxedValue = boxedValue.get();

      setValue(currentBoxedValue);
    });

    return () => {
      disposer();
    };
  }, [boxedValue]);

  function setValueOverride(val) {
    boxedValue.set(val);
  }

  return [value, setValueOverride];
}
