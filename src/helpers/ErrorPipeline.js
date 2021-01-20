import React from 'react'
import Pipeline from './Pipeline'
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback'
import useOnPipelineError from '../hooks/use-on-pipeline-error'

export default function ErrorPipeline ({ children }) {
  const callbackRef = React.useRef(null)

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback
  }

  useOnPipelineError((error) => {
    callbackRef.current({ error: error })
  })

  return (
    <Pipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </Pipeline>
  )
}
