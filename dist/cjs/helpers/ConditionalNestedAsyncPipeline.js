'use strict';

var React = require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var useWillPipe = require('../hooks/use-will-pipe.js');
var AsyncPipeline = require('./AsyncPipeline.js');
var PropTypes = require('prop-types');
var TriggerPipelineOnCallback = require('../triggers/TriggerPipelineOnCallback.js');
var get = require('lodash/get');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);

function ConditionalNestedAsyncPipeline(_ref) {
  var children = _ref.children,
      when = _ref.when,
      matches = _ref.matches;
  var callbackRef = React__default['default'].useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  var check = React__default['default'].useCallback(function (payload) {
    var value = get__default['default'](payload, when);

    if (value === matches) {
      return true;
    }

    if (typeof matches === 'function') {
      return matches(value);
    }

    return false;
  }, [when, matches]);
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      if (check(payload)) {
        Promise.resolve(callbackRef.current(payload)).then(function () {
          var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          var finalP = _rollupPluginBabelHelpers.objectSpread2({}, payload);

          if (Array.isArray(p)) {
            p.forEach(function (_p) {
              finalP = _rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, finalP), _p);
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
  }, [check]);
  return /*#__PURE__*/React__default['default'].createElement(AsyncPipeline, null, /*#__PURE__*/React__default['default'].createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}
ConditionalNestedAsyncPipeline.propTypes = {
  when: PropTypes__default['default'].string.isRequired,
  matches: PropTypes__default['default'].any
};

module.exports = ConditionalNestedAsyncPipeline;
//# sourceMappingURL=ConditionalNestedAsyncPipeline.js.map
