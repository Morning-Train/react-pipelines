function sequentialPipelineTrigger (pipesOrder, pipes) {
  return function () {
    const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
    return new Promise(function (resolve, reject) {
      let promise = Promise.resolve(payload)

      if (pipesOrder.length > 0) {
        pipesOrder.forEach(function (pipeUuid) {
          promise = promise.then(function (p) {
            const pipe = pipes[pipeUuid]
            return typeof pipe === 'function' ? pipe(p) : pipe
          })
        })
      }

      promise.then(function (p) {
        resolve(p)
      }).catch(function (err) {
        reject(err)
      })
    })
  }
}

export default sequentialPipelineTrigger
// # sourceMappingURL=sequentialPipelineTrigger.js.map
