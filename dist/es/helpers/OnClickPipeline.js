import React from 'react';
import { objectWithoutProperties as _objectWithoutProperties } from '../_virtual/_rollupPluginBabelHelpers.js';
import Pipeline from './Pipeline.js';
import TriggerPipelineOnClick from '../triggers/TriggerPipelineOnClick.js';

function OnClickPipeline(_ref) {
  var trigger = _ref.trigger,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? false : _ref$async,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      children = _ref.children,
      forwardProps = _objectWithoutProperties(_ref, ["trigger", "async", "nested", "children"]);

  return /*#__PURE__*/React.createElement(Pipeline, {
    async: async,
    nested: nested
  }, /*#__PURE__*/React.createElement(TriggerPipelineOnClick, forwardProps, trigger), children);
}

export default OnClickPipeline;
//# sourceMappingURL=OnClickPipeline.js.map
