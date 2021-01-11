export default function sequentialPipelineTrigger (pipesOrder, pipes) {
  return (payload = {}) => new Promise((resolve, reject) => {
    let promise = Promise.resolve(payload)

    if (pipesOrder.length > 0) {
      pipesOrder.forEach((pipeUuid) => {
        promise = promise.then((p) => {
          const pipe = pipes[pipeUuid]
          return (typeof (pipe) === 'function') ? pipe(p) : pipe
        })
      })
    }

    promise
      .then((p) => {
        resolve(p)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
