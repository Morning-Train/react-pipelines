'use strict';

var React = require('./node_modules/react/index.js');
var useOnPipelineError = require('../hooks/use-on-pipeline-error.js');
var AsyncPipeline = require('./AsyncPipeline.js');
var TriggerPipelineOnCallback = require('../triggers/TriggerPipelineOnCallback.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ErrorAsyncPipeline(_ref) {
  var children = _ref.children;
  var callbackRef = React__default['default'].useRef(null);

  var updateCallbackRef = function updateCallbackRef(callback) {
    callbackRef.current = callback;
  };

  useOnPipelineError(function (error) {
    callbackRef.current({
      error: error
    });
  });
  return /*#__PURE__*/React__default['default'].createElement(AsyncPipeline, null, /*#__PURE__*/React__default['default'].createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

module.exports = ErrorAsyncPipeline;
//# sourceMappingURL=ErrorAsyncPipeline.js.map
