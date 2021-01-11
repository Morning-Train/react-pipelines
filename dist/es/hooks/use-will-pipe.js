import React from 'react'
import usePipeline from './use-pipeline.js'
import { uniqueId } from 'lodash'

function useWillPipe (callback) {
  const dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  const pipeline = usePipeline()
  const uuidRef = React.useRef(uniqueId('pipe_'))
  React.useEffect(function () {
    const disposer = pipeline.pipe(uuidRef.current, callback)
    return function () {
      disposer()
    }
  }, dependencies)
}

export default useWillPipe
// # sourceMappingURL=use-will-pipe.js.map
