export default function parallelPipelineTrigger(pipesOrder, pipes) {
  return (payload = {}) => new Promise((resolve, reject) => {
    const promises = [];

    if (pipesOrder.length > 0) {
      pipesOrder.forEach((pipeUuid) => {
        promises.push(
          Promise.resolve(payload).then((p) => {
            const pipe = pipes[pipeUuid];
            return (typeof (pipe) === 'function') ? pipe(p) : pipe;
          }),
        );
      });
    }

    Promise.all(promises)
      .then((p) => {
        resolve(p);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
