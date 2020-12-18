import React from 'react';
import useWillPipe from '../hooks/use-will-pipe.js';
import AsyncPipeline from './AsyncPipeline.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';

function NestedAsyncPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React.useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useWillPipe(function () {
    if (callbackRef.current && typeof callbackRef.current === 'function') {
      callbackRef.current();
    }
  });
  return /*#__PURE__*/React.createElement(AsyncPipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

export default NestedAsyncPipeline;
//# sourceMappingURL=NestedAsyncPipeline.js.map
