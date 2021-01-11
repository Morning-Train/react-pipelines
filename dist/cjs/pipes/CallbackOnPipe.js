'use strict'

require('react')
const _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js')
const useWillPipe = require('../hooks/use-will-pipe.js')
const PropTypes = require('prop-types')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const PropTypes__default = /* #__PURE__ */_interopDefaultLegacy(PropTypes)

function CallbackOnPipe (_ref) {
  const callback = _ref.callback
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callback(payload)).then(function () {
        const p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
        resolve(_rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, payload), p))
      }).catch(function (err) {
        reject(err)
      })
    })
  }, [callback])
  return null
}

CallbackOnPipe.propTypes = {
  callback: PropTypes__default.default.func.isRequired
}

module.exports = CallbackOnPipe
// # sourceMappingURL=CallbackOnPipe.js.map
