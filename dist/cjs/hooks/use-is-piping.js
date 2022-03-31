'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var usePipeline = require('./use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useIsPiping() {
  var pipeline = usePipeline();

  var _React$useState = React__default["default"].useState(pipeline ? pipeline.isPiping : false),
      _React$useState2 = _slicedToArray__default["default"](_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React__default["default"].useEffect(function () {
    if (!pipeline) {
      return;
    }

    var disposer = pipeline.onIsPipingChange(function (isPipingValue) {
      setValue(isPipingValue);
    });
    return function () {
      disposer();
    };
  }, [pipeline]);
  return [value, setValue];
}

module.exports = useIsPiping;
//# sourceMappingURL=use-is-piping.js.map
