'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var PipelineContext = require('../contexts/PipelineContext.js');
var sequentialPipelineTrigger = require('../utilities/sequentialPipelineTrigger.js');
var useEventListeners = require('../hooks/use-event-listeners.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SequentialPipeline(_ref) {
  var children = _ref.children;
  var isPipingRef = React__default["default"].useRef(false);
  var pipesRef = React__default["default"].useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React__default["default"].useRef([]);
  var pipesOrder = pipesOrderRef.current;

  var _useEventListeners = useEventListeners(),
      _useEventListeners2 = _slicedToArray__default["default"](_useEventListeners, 2),
      triggerOnIsPipingChange = _useEventListeners2[0],
      onIsPipingChange = _useEventListeners2[1];

  var _useEventListeners3 = useEventListeners(),
      _useEventListeners4 = _slicedToArray__default["default"](_useEventListeners3, 2),
      triggerOnError = _useEventListeners4[0],
      onError = _useEventListeners4[1];

  var pipeline = {
    onIsPipingChange: onIsPipingChange,

    get isPiping() {
      return isPipingRef.current;
    }

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

  pipeline.trigger = React__default["default"].useCallback(function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    isPipingRef.current = true;
    triggerOnIsPipingChange(isPipingRef.current);
    return new Promise(function (resolve, reject) {
      sequentialPipelineTrigger(pipesOrder, pipes)(payload).then(function (p) {
        isPipingRef.current = false;
        triggerOnIsPipingChange(isPipingRef.current);
        resolve(p);
      }).catch(function (err) {
        isPipingRef.current = false;
        triggerOnIsPipingChange(isPipingRef.current);
        triggerOnError(err);
        reject(err);
      });
    });
  }, [pipesOrder, pipes]);
  pipeline.onError = onError;
  return /*#__PURE__*/React__default["default"].createElement(PipelineContext.Provider, {
    value: pipeline
  }, children);
}

module.exports = SequentialPipeline;
//# sourceMappingURL=SequentialPipeline.js.map
