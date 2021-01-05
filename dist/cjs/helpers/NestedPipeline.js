'use strict';

var React = require('react');
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

  useWillPipe(function () {
    if (callbackRef.current && typeof callbackRef.current === 'function') {
      callbackRef.current();
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(Pipeline, null, /*#__PURE__*/React__default['default'].createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children);
}

module.exports = NestedPipeline;
//# sourceMappingURL=NestedPipeline.js.map