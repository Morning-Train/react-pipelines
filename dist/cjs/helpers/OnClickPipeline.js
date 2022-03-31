'use strict';

var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var Pipeline = require('./Pipeline.js');
var TriggerPipelineOnClick = require('../triggers/TriggerPipelineOnClick.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["trigger", "async", "nested", "children"];
function OnClickPipeline(_ref) {
  var trigger = _ref.trigger,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? false : _ref$async,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      children = _ref.children,
      forwardProps = _objectWithoutProperties__default["default"](_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Pipeline, {
    async: async,
    nested: nested
  }, /*#__PURE__*/React__default["default"].createElement(TriggerPipelineOnClick, forwardProps, trigger), children);
}

module.exports = OnClickPipeline;
//# sourceMappingURL=OnClickPipeline.js.map
