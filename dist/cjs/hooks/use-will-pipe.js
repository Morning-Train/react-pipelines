'use strict'

const React = require('react')
const usePipeline = require('./use-pipeline.js')
const lodash = require('lodash')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)

function useWillPipe (callback) {
  const dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  const pipeline = usePipeline()
  const uuidRef = React__default.default.useRef(lodash.uniqueId('pipe_'))
  React__default.default.useEffect(function () {
    const disposer = pipeline.pipe(uuidRef.current, callback)
    return function () {
      disposer()
    }
  }, dependencies)
}

module.exports = useWillPipe
// # sourceMappingURL=use-will-pipe.js.map
