import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'react';
import useIsPiping from '../hooks/use-is-piping.js';

function WhenIsNotPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _slicedToArray(_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping === false ? children : null;
}

export { WhenIsNotPiping as default };
//# sourceMappingURL=WhenIsNotPiping.js.map
