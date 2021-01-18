import React from 'react'
import PropTypes from 'prop-types'
import useWillPipe from '../hooks/use-will-pipe'
import Pipeline from './Pipeline'
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback'
import get from 'lodash/get'

export default function ConditionalNestedPipeline ({ children, when, matches }) {
  const callbackRef = React.useRef(null)

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback
  }

  useWillPipe((payload) => new Promise((resolve, reject) => {
    if (get(payload, when) === matches) {
      Promise.resolve(callbackRef.current(payload))
        .then((p = {}) => {
          resolve({ ...payload, ...p })
        })
        .catch((err) => {
          reject(err)
        })
    } else {
      resolve(payload)
    }
  }))

  return (
    <Pipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </Pipeline>
  )
}

ConditionalNestedPipeline.propTypes = {
  when: PropTypes.string.isRequired,
  matches: PropTypes.any
}
