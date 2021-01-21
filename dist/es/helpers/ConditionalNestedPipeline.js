import React from 'react';
import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { get } from 'lodash';
import useWillPipe from '../hooks/use-will-pipe.js';
import PropTypes from 'prop-types';
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback.js';
import Pipeline from './Pipeline.js';

function ConditionalNestedPipeline(_ref) {
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
          resolve(_objectSpread2(_objectSpread2({}, payload), p));
        }).catch(function (err) {
          reject(err);
        });
      } else {
        resolve(payload);
      }
    });
  });
  return /*#__PURE__*/React.createElement(Pipeline, null, /*#__PURE__*/React.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}
ConditionalNestedPipeline.propTypes = {
  when: PropTypes.string.isRequired,
  matches: PropTypes.any
};

export default ConditionalNestedPipeline;
//# sourceMappingURL=ConditionalNestedPipeline.js.map
