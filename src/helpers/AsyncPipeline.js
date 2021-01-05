import React from 'react';
import { observable } from 'mobx';
import PipelineContext from '../contexts/PipelineContext';
import parallelPipelineTrigger from '../utilities/parallelPipelineTrigger';

function AsyncPipeline({ children }) {
  const isPipingRef = React.useRef(observable.box(false));

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

  pipeline.trigger = React.useCallback((payload = {}) => {
    isPipingRef.current.set(true);

    return new Promise((resolve, reject) => {
      parallelPipelineTrigger(pipesOrder, pipes)(payload)
        .then((p) => {
          isPipingRef.current.set(false);
          resolve(p);
        })
        .catch((err) => {
          isPipingRef.current.set(false);
          reject(err);
        });
    });
  }, [pipesOrder, pipes]);

  pipeline.isPiping = isPipingRef.current;

  return (
    <PipelineContext.Provider value={pipeline}>
      {children}
    </PipelineContext.Provider>
  );
}

export default AsyncPipeline;
