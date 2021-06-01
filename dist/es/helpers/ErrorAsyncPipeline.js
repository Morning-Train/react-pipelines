import React from 'react';
import useOnPipelineError from '../hooks/use-on-pipeline-error.js';
import AsyncPipeline from './AsyncPipeline.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';

function ErrorAsyncPipeline(_ref) {
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
  return /*#__PURE__*/React.createElement(AsyncPipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

export default ErrorAsyncPipeline;
//# sourceMappingURL=ErrorAsyncPipeline.js.map
