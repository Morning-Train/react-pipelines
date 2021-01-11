import 'react'
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js'
import useIsPiping from '../hooks/use-is-piping.js'

function WhenIsPiping (_ref) {
  const children = _ref.children

  const _useIsPiping = useIsPiping()
  const _useIsPiping2 = _slicedToArray(_useIsPiping, 1)
  const isPiping = _useIsPiping2[0]

  return isPiping ? children : null
}

export default WhenIsPiping
// # sourceMappingURL=WhenIsPiping.js.map
