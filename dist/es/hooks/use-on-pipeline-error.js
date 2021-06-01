import React from './node_modules/react/index.js';
import usePipeline from './use-pipeline.js';

function useOnPipelineError(callback) {
  var pipeline = usePipeline();
  React.useEffect(function () {
    var disposer = pipeline.onError(function (error) {
      if (typeof callback === 'function') {
        callback(error);
      }
    });
    return function () {
      disposer();
    };
  });
}

export default useOnPipelineError;
//# sourceMappingURL=use-on-pipeline-error.js.map
