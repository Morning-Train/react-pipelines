import React from 'react';
import PipelineContext from '../contexts/PipelineContext.js';
import { observable } from 'mobx';

function Pipeline(props) {
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

  pipeline.trigger = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      isPipingRef.current.set(true);
      var promise = Promise.resolve(payload);

      if (pipesOrder.length > 0) {
        pipesOrder.forEach(function (pipeUuid) {
          promise = promise.then(function (payload) {
            var pipe = pipes[pipeUuid];
            return typeof pipe === 'function' ? pipe(payload) : pipe;
          });
        });
      }

      promise.then(function (payload) {
        isPipingRef.current.set(false);
        resolve(payload);
      }).catch(function (err) {
        isPipingRef.current.set(false);
        reject(err);
      });
    });
  };

  pipeline.isPiping = isPipingRef.current;
  return /*#__PURE__*/React.createElement(PipelineContext.Provider, {
    value: pipeline
  }, props.children);
}

export default Pipeline;
//# sourceMappingURL=Pipeline.js.map
