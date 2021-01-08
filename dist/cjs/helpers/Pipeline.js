'use strict';

var React = require('react');
var PipelineContext = require('../contexts/PipelineContext.js');
var mobx = require('mobx');
var sequentialPipelineTrigger = require('../utilities/sequentialPipelineTrigger.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Pipeline(_ref) {
  var children = _ref.children;
  var isPipingRef = React__default['default'].useRef(mobx.observable.box(false));
  var pipesRef = React__default['default'].useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React__default['default'].useRef([]);
  var pipesOrder = pipesOrderRef.current;
  var pipeline = {};

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
    isPipingRef.current.set(true);
    return new Promise(function (resolve, reject) {
      sequentialPipelineTrigger(pipesOrder, pipes)(payload).then(function (p) {
        isPipingRef.current.set(false);
        resolve(p);
      }).catch(function (err) {
        isPipingRef.current.set(false);
        reject(err);
      });
    });
  }, [pipesOrder, pipes]);
  pipeline.isPiping = isPipingRef.current;
  return /*#__PURE__*/React__default['default'].createElement(PipelineContext['default'].Provider, {
    value: pipeline
  }, children);
}

module.exports = Pipeline;
//# sourceMappingURL=Pipeline.js.map
