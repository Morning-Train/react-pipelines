import React from 'react'

export default function useEventListeners () {
  const callbacks_ref = React.useRef([])
  const callbacks = callbacks_ref.current

  const trigger = function () {
    if (callbacks.length > 0) {
      callbacks.forEach((callback, index) => {
        callback.apply(this, Array.prototype.slice.call(arguments, 0))
      })
    }
  }

  const removeEventListener = (callback) => {
    if (callbacks.length > 0) {
      callbacks.forEach((_callback, index) => {
        if (callbacks[index] === callback) {
          delete callbacks[index]
        }
      })
    }
  }

  const addEventListener = (callback) => {
    callbacks.push(callback)

    const disposer = () => {
      removeEventListener(callback)
    }

    return disposer
  }

  return [trigger, addEventListener, removeEventListener]
}
