'use strict';

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var React = require('react');
var uniqueId = require('lodash/uniqueId');
var usePipeline = require('./use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var uniqueId__default = /*#__PURE__*/_interopDefaultLegacy(uniqueId);

function useWillPipe(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pipeline = usePipeline();
  var uuidRef = React__default["default"].useRef(uniqueId__default["default"]('pipe_'));
  React__default["default"].useEffect(function () {
    if (!pipeline) {
      return;
    }

    var disposer = pipeline.pipe(uuidRef.current, callback);
    return function () {
      disposer();
    };
  }, [pipeline].concat(_toConsumableArray__default["default"](dependencies)));
}

module.exports = useWillPipe;
//# sourceMappingURL=use-will-pipe.js.map
