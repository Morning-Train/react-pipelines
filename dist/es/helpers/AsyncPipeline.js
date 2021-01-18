import React from 'react';
import PipelineContext from '../contexts/PipelineContext.js';
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import parallelPipelineTrigger from '../utilities/parallelPipelineTrigger.js';
import useEventListeners from '../hooks/use-event-listeners.js';

function AsyncPipeline(_ref) {
  var children = _ref.children;
  var isPipingRef = React.useRef(false);
  var pipesRef = React.useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React.useRef([]);
  var pipesOrder = pipesOrderRef.current;

  var _useEventListeners = useEventListeners(),
      _useEventListeners2 = _slicedToArray(_useEventListeners, 2),
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

  pipeline.trigger = React.useCallback(function () {
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
  return /*#__PURE__*/React.createElement(PipelineContext.Provider, {
    value: pipeline
  }, children);
}

export default AsyncPipeline;
//# sourceMappingURL=AsyncPipeline.js.map
