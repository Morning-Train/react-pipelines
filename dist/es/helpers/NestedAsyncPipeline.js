import React from 'react';
import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import useWillPipe from '../hooks/use-will-pipe.js';
import AsyncPipeline from './AsyncPipeline.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';

function NestedAsyncPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React.useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callbackRef.current(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var finalP = _objectSpread2({}, payload);

        if (Array.isArray(p)) {
          p.forEach(function (_p) {
            finalP = _objectSpread2(_objectSpread2({}, finalP), _p);
          });
        }

        resolve(finalP);
      }).catch(function (err) {
        reject(err);
      });
    });
  });
  return /*#__PURE__*/React.createElement(AsyncPipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

export default NestedAsyncPipeline;
//# sourceMappingURL=NestedAsyncPipeline.js.map
