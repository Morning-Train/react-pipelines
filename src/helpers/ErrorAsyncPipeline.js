import React from 'react'
import AsyncPipeline from './AsyncPipeline'
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback'
import useOnPipelineError from '../hooks/use-on-pipeline-error'

export default function ErrorAsyncPipeline ({ children }) {
  const callbackRef = React.useRef(null)

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback
  }

  useOnPipelineError((error) => {
    callbackRef.current({ error: error })
  })

  return (
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </AsyncPipeline>
  )
}
