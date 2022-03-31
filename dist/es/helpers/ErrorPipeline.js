import React from 'react';
import Pipeline from './Pipeline.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';
import useOnPipelineError from '../hooks/use-on-pipeline-error.js';

function ErrorPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React.useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useOnPipelineError(function (error) {
    callbackRef.current({
      error: error
    });
  });
  return /*#__PURE__*/React.createElement(Pipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

export { ErrorPipeline as default };
//# sourceMappingURL=ErrorPipeline.js.map
