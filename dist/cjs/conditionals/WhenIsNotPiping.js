'use strict'

require('react')
const _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js')
const useIsPiping = require('../hooks/use-is-piping.js')

function WhenIsNotPiping (_ref) {
  const children = _ref.children

  const _useIsPiping = useIsPiping()
  const _useIsPiping2 = _rollupPluginBabelHelpers.slicedToArray(_useIsPiping, 1)
  const isPiping = _useIsPiping2[0]

  return isPiping === false ? children : null
}

module.exports = WhenIsNotPiping
// # sourceMappingURL=WhenIsNotPiping.js.map
