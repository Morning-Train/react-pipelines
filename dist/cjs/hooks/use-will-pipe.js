'use strict';

var React = require('./node_modules/react/index.js');
var usePipeline = require('./use-pipeline.js');
var uniqueId = require('lodash/uniqueId');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var uniqueId__default = /*#__PURE__*/_interopDefaultLegacy(uniqueId);

function useWillPipe(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pipeline = usePipeline();
  var uuidRef = React__default['default'].useRef(uniqueId__default['default']('pipe_'));
  React__default['default'].useEffect(function () {
    var disposer = pipeline.pipe(uuidRef.current, callback);
    return function () {
      disposer();
    };
  }, dependencies);
}

module.exports = useWillPipe;
//# sourceMappingURL=use-will-pipe.js.map
