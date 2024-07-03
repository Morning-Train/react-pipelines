import React from 'react'
import useWillPipe from '../hooks/use-will-pipe'
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback'
import SequentialPipeline from "./SequentialPipeline";

export default function NestedPipeline ({ children }) {
  const callbackRef = React.useRef(null)

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback
  }

  useWillPipe((payload) => new Promise((resolve, reject) => {
    Promise.resolve(callbackRef.current(payload))
      .then((p = {}) => {
        resolve({ ...payload, ...p })
      })
      .catch((err) => {
        reject(err)
      })
  }))

  return (
    <SequentialPipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </SequentialPipeline>
  )
}
