import React from './node_modules/react/index.js';
import AsyncPipeline from './AsyncPipeline.js';
import SequentialPipeline from './SequentialPipeline.js';
import NestedAsyncPipeline from './NestedAsyncPipeline.js';
import NestedPipeline from './NestedPipeline.js';

function Pipeline(_ref) {
  var children = _ref.children,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? false : _ref$async;

  if (async) {
    if (nested) {
      return /*#__PURE__*/React.createElement(NestedAsyncPipeline, null, children);
    } else {
      return /*#__PURE__*/React.createElement(AsyncPipeline, null, children);
    }
  }

  if (nested) {
    return /*#__PURE__*/React.createElement(NestedPipeline, null, children);
  }

  return /*#__PURE__*/React.createElement(SequentialPipeline, null, children);
}

export default Pipeline;
//# sourceMappingURL=Pipeline.js.map
