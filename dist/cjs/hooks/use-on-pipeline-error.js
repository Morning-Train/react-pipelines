'use strict';

var React = require('react');
var usePipeline = require('./use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useOnPipelineError(callback) {
  var pipeline = usePipeline();
  React__default['default'].useEffect(function () {
    var disposer = pipeline.onError(function (error) {
      if (typeof callback === 'function') {
        callback(error);
      }
    });
    return function () {
      disposer();
    };
  });
}

module.exports = useOnPipelineError;
//# sourceMappingURL=use-on-pipeline-error.js.map
