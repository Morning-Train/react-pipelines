import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React from 'react';
import useWillPipe from '../hooks/use-will-pipe.js';
import AsyncPipeline from './AsyncPipeline.js';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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

        var finalP = _objectSpread({}, payload);

        if (Array.isArray(p)) {
          p.forEach(function (_p) {
            finalP = _objectSpread(_objectSpread({}, finalP), _p);
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

export { NestedAsyncPipeline as default };
//# sourceMappingURL=NestedAsyncPipeline.js.map
