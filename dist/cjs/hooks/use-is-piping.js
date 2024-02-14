'use strict';

var React = require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var usePipeline = require('./use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useIsPiping() {
  var pipeline = usePipeline();

  var _React$useState = React__default['default'].useState(pipeline.isPiping),
      _React$useState2 = _rollupPluginBabelHelpers.slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React__default['default'].useEffect(function () {
    setValue(pipeline ? pipeline.isPiping : false);

    if (pipeline) {
      var disposer = pipeline.onIsPipingChange(function (isPipingValue) {
        setValue(isPipingValue);
      });
      return function () {
        disposer();
      };
    }
  }, [pipeline]);
  return [value, setValue];
}

module.exports = useIsPiping;
//# sourceMappingURL=use-is-piping.js.map
