'use strict';

var React = require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var usePipeline = require('./use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useIsPiping() {
  var pipeline = usePipeline();
  var boxedValue = pipeline.isPiping;

  var _React$useState = React__default['default'].useState(boxedValue.get()),
      _React$useState2 = _rollupPluginBabelHelpers.slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React__default['default'].useEffect(function () {
    var disposer = boxedValue.observe(function () {
      var currentBoxedValue = boxedValue.get();
      setValue(currentBoxedValue);
    });
    return function () {
      disposer();
    };
  }, [boxedValue]);

  function setValueOverride(val) {
    boxedValue.set(val);
  }

  return [value, setValueOverride];
}

module.exports = useIsPiping;
//# sourceMappingURL=use-is-piping.js.map
