import React from 'react';
import { observable } from 'mobx';
import PipelineContext from '../contexts/PipelineContext';

function Pipeline(props) {
  const isPipingRef = React.useRef(observable.box());

  const pipesRef = React.useRef({});
  const pipes = pipesRef.current;

  const pipesOrderRef = React.useRef([]);
  const pipesOrder = pipesOrderRef.current;

  const pipeline = {};

  pipeline.pipe = (uuid, pipe) => {
    if (!pipesOrder.includes(uuid)) {
      pipesOrder.push(uuid);
    }

    pipes[uuid] = pipe;

    return () => {
      pipeline.remove(uuid);
    };
  };

  pipeline.remove = (uuid) => {
    if (pipes[uuid]) {
      delete pipes[uuid];
    }
  };

  pipeline.trigger = (payload = {}) => new Promise((resolve, reject) => {
    isPipingRef.current.set(true);

    let promise = Promise.resolve(payload);

    if (pipesOrder.length > 0) {
      pipesOrder.forEach((pipeUuid) => {
        promise = promise.then((payload) => {
          const pipe = pipes[pipeUuid];
          return (typeof (pipe) === 'function') ? pipe(payload) : pipe;
        });
      });
    }

    promise
      .then((payload) => {
        isPipingRef.current.set(false);
        resolve(payload);
      })
      .catch((err) => {
        isPipingRef.current.set(false);
        reject(err);
      });
  });

  pipeline.isPiping = isPipingRef.current;

  return (
    <PipelineContext.Provider value={pipeline}>
      {props.children}
    </PipelineContext.Provider>
  );
}

export default Pipeline;
