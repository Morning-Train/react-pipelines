'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('react');
var useIsPiping = require('../hooks/use-is-piping.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function WhenIsNotPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _slicedToArray__default["default"](_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping === false ? children : null;
}

module.exports = WhenIsNotPiping;
//# sourceMappingURL=WhenIsNotPiping.js.map
