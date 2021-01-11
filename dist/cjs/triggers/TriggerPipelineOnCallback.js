'use strict'

const React = require('react')
const usePipeline = require('../hooks/use-pipeline.js')
const PropTypes = require('prop-types')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)
const PropTypes__default = /* #__PURE__ */_interopDefaultLegacy(PropTypes)

function TriggerPipelineOnCallback (_ref) {
  const callback = _ref.callback
  const pipeline = usePipeline()
  React__default.default.useEffect(function () {
    callback(function () {
      const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
      return pipeline.trigger(payload)
    })
  }, [pipeline, callback])
  return null
}

TriggerPipelineOnCallback.propTypes = {
  callback: PropTypes__default.default.func.isRequired
}

module.exports = TriggerPipelineOnCallback
// # sourceMappingURL=TriggerPipelineOnCallback.js.map
