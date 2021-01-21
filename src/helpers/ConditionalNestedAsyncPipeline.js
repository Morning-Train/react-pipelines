import React from 'react'
import PropTypes from 'prop-types'
import useWillPipe from '../hooks/use-will-pipe'
import TriggerPipelineOnCallback from '../triggers/TriggerPipelineOnCallback'
import { get } from 'lodash'
import AsyncPipeline from './AsyncPipeline'

export default function ConditionalNestedAsyncPipeline ({ children, when, matches }) {
  const callbackRef = React.useRef(null)

  const updateCallbackRef = (callback) => {
    callbackRef.current = callback
  }

  function check (payload) {
    const value = get(payload, when)

    if (value === matches) {
      return true
    }

    if (typeof matches === 'function') {
      return matches(value)
    }

    return false
  }

  useWillPipe((payload) => new Promise((resolve, reject) => {
    if (check(payload)) {
      Promise.resolve(callbackRef.current(payload))
        .then((p = {}) => {
          let finalP = { ...payload }

          if (Array.isArray(p)) {
            p.forEach((_p) => {
              finalP = { ...finalP, ..._p }
            })
          }

          resolve(finalP)
        })
        .catch((err) => {
          reject(err)
        })
    } else {
      resolve(payload)
    }
  }))

  return (
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={updateCallbackRef} />
      {children}
    </AsyncPipeline>
  )
}

ConditionalNestedAsyncPipeline.propTypes = {
  when: PropTypes.string.isRequired,
  matches: PropTypes.any
}
