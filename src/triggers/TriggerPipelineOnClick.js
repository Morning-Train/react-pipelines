import React from 'react'
import PropTypes from 'prop-types'
import usePipeline from '../hooks/use-pipeline'

function TriggerPipelineOnClick ({ children, onlyTriggerWhenIdle = true, preventDefault = true }) {
  const pipeline = usePipeline()

  const isCurrentlyPipingRef = React.useRef(false)

  const handleClick = (e) => {
    if (e && preventDefault === true) {
      if (typeof e.preventDefault === 'function') {
        e.preventDefault()
      }
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation()
      }
      if (typeof e.persist === 'function') {
        e.persist()
      }
    }

    if (onlyTriggerWhenIdle === true && isCurrentlyPipingRef.current === true) {
      return
    }

    isCurrentlyPipingRef.current = true

    const payload = {
      clickEvent: e
    }

    pipeline.trigger(payload)
      .then((p) => {
        isCurrentlyPipingRef.current = false
        return p
      })
      .catch((err) => {
        isCurrentlyPipingRef.current = false
      })
  }

  return React.Children.map(children, (child) => (
    React.cloneElement(child, { onClick: handleClick })
  ))
}

TriggerPipelineOnClick.propTypes = {
  onlyTriggerWhenIdle: PropTypes.bool,
  preventDefault: PropTypes.bool
}

export default TriggerPipelineOnClick
