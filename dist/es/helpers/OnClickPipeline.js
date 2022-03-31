import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import Pipeline from './Pipeline.js';
import TriggerPipelineOnClick from '../triggers/TriggerPipelineOnClick.js';

var _excluded = ["trigger", "async", "nested", "children"];
function OnClickPipeline(_ref) {
  var trigger = _ref.trigger,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? false : _ref$async,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      children = _ref.children,
      forwardProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Pipeline, {
    async: async,
    nested: nested
  }, /*#__PURE__*/React.createElement(TriggerPipelineOnClick, forwardProps, trigger), children);
}

export { OnClickPipeline as default };
//# sourceMappingURL=OnClickPipeline.js.map
