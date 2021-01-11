'use strict'

const React = require('react')
const useWillPipe = require('../hooks/use-will-pipe.js')
const TriggerPipelineOnCallback = require('../triggers/TriggerPipelineOnCallback.js')
const Pipeline = require('./Pipeline.js')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)

function NestedPipeline (_ref) {
  const children = _ref.children
  const callbackRef = React__default.default.useRef(null)

  const updateCallbackRef = function updateCallbackRef (callback) {
    callbackRef.current = callback
  }

  useWillPipe(function () {
    if (callbackRef.current && typeof callbackRef.current === 'function') {
      callbackRef.current()
    }
  })
  return /* #__PURE__ */React__default.default.createElement(Pipeline, null, /* #__PURE__ */React__default.default.createElement(TriggerPipelineOnCallback, {
    callback: updateCallbackRef
  }), children)
}

module.exports = NestedPipeline
// # sourceMappingURL=NestedPipeline.js.map
