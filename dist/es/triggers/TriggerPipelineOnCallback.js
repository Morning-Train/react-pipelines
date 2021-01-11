import React from 'react'
import usePipeline from '../hooks/use-pipeline.js'
import PropTypes from 'prop-types'

function TriggerPipelineOnCallback (_ref) {
  const callback = _ref.callback
  const pipeline = usePipeline()
  React.useEffect(function () {
    callback(function () {
      const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      return pipeline.trigger(payload)
    })
  }, [pipeline, callback])
  return null
}

TriggerPipelineOnCallback.propTypes = {
  callback: PropTypes.func.isRequired
}

export default TriggerPipelineOnCallback
// # sourceMappingURL=TriggerPipelineOnCallback.js.map
