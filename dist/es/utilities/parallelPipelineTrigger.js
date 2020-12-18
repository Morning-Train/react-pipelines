function parallelPipelineTrigger(pipesOrder, pipes) {
  return function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      var promises = [];

      if (pipesOrder.length > 0) {
        pipesOrder.forEach(function (pipeUuid) {
          promises.push(Promise.resolve(payload).then(function (p) {
            var pipe = pipes[pipeUuid];
            return typeof pipe === 'function' ? pipe(p) : pipe;
          }));
        });
      }

      Promise.all(promises).then(function (p) {
        resolve(p);
      }).catch(function (err) {
        reject(err);
      });
    });
  };
}

export default parallelPipelineTrigger;
//# sourceMappingURL=parallelPipelineTrigger.js.map
