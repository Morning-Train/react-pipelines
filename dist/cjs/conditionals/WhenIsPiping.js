'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('react');
var useIsPiping = require('../hooks/use-is-piping.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function WhenIsPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _slicedToArray__default["default"](_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping ? children : null;
}

module.exports = WhenIsPiping;
//# sourceMappingURL=WhenIsPiping.js.map
