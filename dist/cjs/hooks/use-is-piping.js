'use strict'

const React = require('react')
const _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js')
const usePipeline = require('./use-pipeline.js')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)

function useIsPiping () {
  const pipeline = usePipeline()

  if (pipeline === null) {
    throw new Error('useIsPiping hook are used outside the scope of a pipeline')
  }

  const boxedValue = pipeline.isPiping

  const _React$useState = React__default.default.useState(boxedValue.get())
  const _React$useState2 = _rollupPluginBabelHelpers.slicedToArray(_React$useState, 2)
  const value = _React$useState2[0]
  const setValue = _React$useState2[1]

  React__default.default.useEffect(function () {
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

module.exports = useIsPiping
// # sourceMappingURL=use-is-piping.js.map
