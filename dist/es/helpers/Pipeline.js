import React from 'react';
import PipelineContext from '../contexts/PipelineContext.js';
import { observable } from 'mobx';
import sequentialPipelineTrigger from '../utilities/sequentialPipelineTrigger.js';

function Pipeline(_ref) {
  var children = _ref.children;
  var isPipingRef = React.useRef(observable.box());
  var pipesRef = React.useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React.useRef([]);
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

  pipeline.trigger = React.useCallback(function () {
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
  return /*#__PURE__*/React.createElement(PipelineContext.Provider, {
    value: pipeline
  }, children);
}

export default Pipeline;
//# sourceMappingURL=Pipeline.js.map
