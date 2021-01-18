'use strict';

var React = require('react');
var PipelineContext = require('../contexts/PipelineContext.js');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var parallelPipelineTrigger = require('../utilities/parallelPipelineTrigger.js');
var useEventListeners = require('../hooks/use-event-listeners.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AsyncPipeline(_ref) {
  var children = _ref.children;
  var isPipingRef = React__default['default'].useRef(false);
  var pipesRef = React__default['default'].useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React__default['default'].useRef([]);
  var pipesOrder = pipesOrderRef.current;

  var _useEventListeners = useEventListeners(),
      _useEventListeners2 = _rollupPluginBabelHelpers.slicedToArray(_useEventListeners, 2),
      triggerOnIsPipingChange = _useEventListeners2[0],
      onIsPipingChange = _useEventListeners2[1];

  var pipeline = {
    onIsPipingChange: onIsPipingChange
  };

  pipeline.pipe = function (uuid, pipe) {
    if (!pipesOrder.includes(uuid)) {
      pipesOrder.push(uuid);
    }

    pipes[uuid] = pipe;
    return function () {
      pipeline.remove(uuid);
    };
  };

  pipeline.remove = function (uuid) {
    if (pipes[uuid]) {
      delete pipes[uuid];
    }
  };

  pipeline.trigger = React__default['default'].useCallback(function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    isPipingRef.current = true;
    triggerOnIsPipingChange(isPipingRef.current);
    return new Promise(function (resolve, reject) {
      parallelPipelineTrigger(pipesOrder, pipes)(payload).then(function (p) {
        isPipingRef.current = false;
        triggerOnIsPipingChange(isPipingRef.current);
        resolve(p);
      }).catch(function (err) {
        isPipingRef.current = false;
        triggerOnIsPipingChange(isPipingRef.current);
        reject(err);
      });
    });
  }, [pipesOrder, pipes]);
  pipeline.isPiping = isPipingRef.current;
  return /*#__PURE__*/React__default['default'].createElement(PipelineContext['default'].Provider, {
    value: pipeline
  }, children);
}

module.exports = AsyncPipeline;
//# sourceMappingURL=AsyncPipeline.js.map
