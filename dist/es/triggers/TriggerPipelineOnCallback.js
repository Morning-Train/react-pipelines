import React from 'react';
import PropTypes from 'prop-types';
import usePipeline from '../hooks/use-pipeline.js';

function TriggerPipelineOnCallback(_ref) {
  var callback = _ref.callback;
  var pipeline = usePipeline();
  React.useEffect(function () {
    callback(function () {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return pipeline.trigger(payload);
    });
  }, [pipeline, callback]);
  return null;
}

TriggerPipelineOnCallback.propTypes = {
  callback: PropTypes.func.isRequired
};

export { TriggerPipelineOnCallback as default };
//# sourceMappingURL=TriggerPipelineOnCallback.js.map
