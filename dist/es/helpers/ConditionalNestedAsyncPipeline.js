import React from 'react';
import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import useWillPipe from '../hooks/use-will-pipe.js';
import AsyncPipeline from './AsyncPipeline.js';
import PropTypes from 'prop-types';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';
import get from 'lodash/get';

function ConditionalNestedAsyncPipeline(_ref) {
  var children = _ref.children,
      when = _ref.when,
      matches = _ref.matches;
  var callbackRef = React.useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  function check(payload) {
    var value = get(payload, when);

    if (value === matches) {
      return true;
    }

    if (typeof matches === 'function') {
      return matches(value);
    }

    return false;
  }

  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      if (check(payload)) {
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
      } else {
        resolve(payload);
      }
    });
  });
  return /*#__PURE__*/React.createElement(AsyncPipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}
ConditionalNestedAsyncPipeline.propTypes = {
  when: PropTypes.string.isRequired,
  matches: PropTypes.any
};

export default ConditionalNestedAsyncPipeline;
//# sourceMappingURL=ConditionalNestedAsyncPipeline.js.map
