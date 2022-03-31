import React from 'react';
import usePipeline from './use-pipeline.js';

function useOnPipelineError(callback) {
  var pipeline = usePipeline();
  React.useEffect(function () {
    if (!pipeline) {
      return;
    }

    var disposer = pipeline.onError(function (error) {
      if (typeof callback === 'function') {
        callback(error);
      }
    });
    return function () {
      disposer();
    };
  }, [pipeline]);
}

export { useOnPipelineError as default };
//# sourceMappingURL=use-on-pipeline-error.js.map
