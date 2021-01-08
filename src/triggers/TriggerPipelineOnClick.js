import React from 'react';
import usePipeline from '../hooks/use-pipeline';
import useIsPiping from '../hooks/use-is-piping';

function TriggerPipelineOnClick({ children }) {
  const pipeline = usePipeline();
  const isPiping = useIsPiping();

  const handleClick = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
      }
      if (typeof e.persist === 'function') {
        e.persist();
      }
    }

    const payload = {
      clickEvent: e,
    };

    pipeline.trigger(payload)
      .catch((err) => console.log('caught error', err));
  };

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => (
        React.cloneElement(child, { onClick: (e) => handleClick(e), disabled: isPiping })
      ))}
    </React.Fragment>
  );
}

export default TriggerPipelineOnClick;
