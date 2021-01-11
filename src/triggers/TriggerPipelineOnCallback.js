import React from 'react'
import PropTypes from 'prop-types'
import usePipeline from '../hooks/use-pipeline'

function TriggerPipelineOnCallback ({ callback }) {
  const pipeline = usePipeline()

  React.useEffect(() => {
    callback((payload = {}) => pipeline.trigger(payload))
  }, [pipeline, callback])

  return null
}

TriggerPipelineOnCallback.propTypes = {
  callback: PropTypes.func.isRequired
}

export default TriggerPipelineOnCallback
