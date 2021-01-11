import React from 'react'
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js'
import usePipeline from './use-pipeline.js'

function useIsPiping () {
  const pipeline = usePipeline()

  if (pipeline === null) {
    throw new Error('useIsPiping hook are used outside the scope of a pipeline')
  }

  const boxedValue = pipeline.isPiping

  const _React$useState = React.useState(boxedValue.get())
  const _React$useState2 = _slicedToArray(_React$useState, 2)
  const value = _React$useState2[0]
  const setValue = _React$useState2[1]

  React.useEffect(function () {
    const disposer = boxedValue.observe(function () {
      const currentBoxedValue = boxedValue.get()
      setValue(currentBoxedValue)
    })
    return function () {
      disposer()
    }
  }, [boxedValue])

  function setValueOverride (val) {
    boxedValue.set(val)
  }

  return [value, setValueOverride]
}

export default useIsPiping
// # sourceMappingURL=use-is-piping.js.map
