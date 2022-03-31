'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var React = require('react');
var PropTypes = require('prop-types');
var useWillPipe = require('../hooks/use-will-pipe.js');
var TriggerPipelineOnCallback = require('../triggers/TriggerPipelineOnCallback.js');
var get = require('lodash/get');
var AsyncPipeline = require('./AsyncPipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ConditionalNestedAsyncPipeline(_ref) {
  var children = _ref.children,
      when = _ref.when,
      matches = _ref.matches;
  var callbackRef = React__default["default"].useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  var check = React__default["default"].useCallback(function (payload) {
    var value = get__default["default"](payload, when);

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
      } else {
        resolve(payload);
      }
    });
  }, [check]);
  return /*#__PURE__*/React__default["default"].createElement(AsyncPipeline, null, /*#__PURE__*/React__default["default"].createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}
ConditionalNestedAsyncPipeline.propTypes = {
  when: PropTypes__default["default"].string.isRequired,
  matches: PropTypes__default["default"].any
};

module.exports = ConditionalNestedAsyncPipeline;
//# sourceMappingURL=ConditionalNestedAsyncPipeline.js.map
