import React from 'react'
import usePipeline from './use-pipeline'

export default function useOnPipelineError (callback) {
  const pipeline = usePipeline()

  React.useEffect(() => {
    const disposer = pipeline.onError((error) => {
      if (typeof callback === 'function') {
        callback(error)
      }
    })

    return () => {
      disposer()
    }
  })
}
