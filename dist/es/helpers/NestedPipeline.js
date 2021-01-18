import React from 'react';
import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import useWillPipe from '../hooks/use-will-pipe.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';
import Pipeline from './Pipeline.js';

function NestedPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React.useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callbackRef.current(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        resolve(_objectSpread2(_objectSpread2({}, payload), p));
      }).catch(function (err) {
        reject(err);
      });
    });
  });
  return /*#__PURE__*/React.createElement(Pipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

export default NestedPipeline;
//# sourceMappingURL=NestedPipeline.js.map
