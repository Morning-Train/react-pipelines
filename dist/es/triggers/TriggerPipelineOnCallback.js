import React from 'react';
import usePipeline from '../hooks/use-pipeline.js';

function TriggerPipelineOnCallback(_ref) {
  var callback = _ref.callback;
  var pipeline = usePipeline();
  React.useEffect(function () {
    callback(function () {
      var payload = {};
      pipeline.trigger(payload).catch(function (err) {
        return console.log('caught error', err);
      });
    });
  }, []);
  return null;
}

export default TriggerPipelineOnCallback;
//# sourceMappingURL=TriggerPipelineOnCallback.js.map
