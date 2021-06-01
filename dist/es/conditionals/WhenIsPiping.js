import './node_modules/react/index.js';
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import useIsPiping from '../hooks/use-is-piping.js';

function WhenIsPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _slicedToArray(_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping ? children : null;
}

export default WhenIsPiping;
//# sourceMappingURL=WhenIsPiping.js.map
