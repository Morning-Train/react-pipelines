'use strict';

var React = require('react');
var SequentialPipeline = require('./SequentialPipeline.js');
var NestedAsyncPipeline = require('./NestedAsyncPipeline.js');
var AsyncPipeline = require('./AsyncPipeline.js');
var NestedPipeline = require('./NestedPipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Pipeline(_ref) {
  var children = _ref.children,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? false : _ref$async;

  if (async) {
    if (nested) {
      return /*#__PURE__*/React__default["default"].createElement(NestedAsyncPipeline, null, children);
    } else {
      return /*#__PURE__*/React__default["default"].createElement(AsyncPipeline, null, children);
    }
  }

  if (nested) {
    return /*#__PURE__*/React__default["default"].createElement(NestedPipeline, null, children);
  }

  return /*#__PURE__*/React__default["default"].createElement(SequentialPipeline, null, children);
}

module.exports = Pipeline;
//# sourceMappingURL=Pipeline.js.map
