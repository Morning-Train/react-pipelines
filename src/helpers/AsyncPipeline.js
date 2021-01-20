import React from 'react'
import PipelineContext from '../contexts/PipelineContext'
import parallelPipelineTrigger from '../utilities/parallelPipelineTrigger'
import useEventListeners from '../hooks/use-event-listeners'

function AsyncPipeline ({ children }) {
  const isPipingRef = React.useRef(false)

  const pipesRef = React.useRef({})
  const pipes = pipesRef.current

  const pipesOrderRef = React.useRef([])
  const pipesOrder = pipesOrderRef.current

  const [triggerOnIsPipingChange, onIsPipingChange] = useEventListeners()
  const [triggerOnError, onError] = useEventListeners()

  const pipeline = {
    onIsPipingChange
  }

  pipeline.pipe = (uuid, pipe) => {
    if (!pipesOrder.includes(uuid)) {
      pipesOrder.push(uuid)
    }

    pipes[uuid] = pipe

    return () => {
      pipeline.remove(uuid)
    }
  }

  pipeline.remove = (uuid) => {
    if (pipes[uuid]) {
      delete pipes[uuid]
    }
  }

  pipeline.trigger = React.useCallback((payload = {}) => {
    isPipingRef.current = true
    triggerOnIsPipingChange(isPipingRef.current)

    return new Promise((resolve, reject) => {
      parallelPipelineTrigger(pipesOrder, pipes)(payload)
        .then((p) => {
          isPipingRef.current = false
          triggerOnIsPipingChange(isPipingRef.current)
          resolve(p)
        })
        .catch((err) => {
          isPipingRef.current = false
          triggerOnIsPipingChange(isPipingRef.current)
          triggerOnError(err)
          reject(err)
        })
    })
  }, [pipesOrder, pipes])

  pipeline.isPiping = isPipingRef.current

  pipeline.onError = onError

  return (
    <PipelineContext.Provider value={pipeline}>
      {children}
    </PipelineContext.Provider>
  )
}

export default AsyncPipeline
