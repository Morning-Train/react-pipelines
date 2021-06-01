'use strict';

var React = require('./node_modules/react/index.js');
var PipelineContext = require('../contexts/PipelineContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function usePipeline() {
  return React__default['default'].useContext(PipelineContext['default']);
}

module.exports = usePipeline;
//# sourceMappingURL=use-pipeline.js.map
