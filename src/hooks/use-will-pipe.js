import React from 'react'
import uniqueId from 'lodash/uniqueId'
import usePipeline from './use-pipeline'

export default function useWillPipe (callback, dependencies = []) {
  const pipeline = usePipeline()

  const uuidRef = React.useRef(uniqueId('pipe_'))

  React.useEffect(() => {
    const disposer = pipeline.pipe(uuidRef.current, callback)

    return () => {
      disposer()
    }
  }, dependencies)
}
