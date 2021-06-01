'use strict';

var React = require('./node_modules/react/index.js');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var useWillPipe = require('../hooks/use-will-pipe.js');
var TriggerPipelineOnCallback = require('../triggers/TriggerPipelineOnCallback.js');
var Pipeline = require('./Pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function NestedPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React__default['default'].useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callbackRef.current(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        resolve(_rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, payload), p));
      }).catch(function (err) {
        reject(err);
      });
    });
  });
  return /*#__PURE__*/React__default['default'].createElement(Pipeline, null, /*#__PURE__*/React__default['default'].createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

module.exports = NestedPipeline;
//# sourceMappingURL=NestedPipeline.js.map
