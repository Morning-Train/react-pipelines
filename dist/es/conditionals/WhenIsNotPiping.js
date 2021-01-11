import 'react'
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js'
import useIsPiping from '../hooks/use-is-piping.js'

function WhenIsNotPiping (_ref) {
  const children = _ref.children

  const _useIsPiping = useIsPiping()
  const _useIsPiping2 = _slicedToArray(_useIsPiping, 1)
  const isPiping = _useIsPiping2[0]

  return isPiping === false ? children : null
}

export default WhenIsNotPiping
// # sourceMappingURL=WhenIsNotPiping.js.map
