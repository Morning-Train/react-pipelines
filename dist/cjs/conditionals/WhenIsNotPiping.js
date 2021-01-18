'use strict';

require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var useIsPiping = require('../hooks/use-is-piping.js');

function WhenIsNotPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _rollupPluginBabelHelpers.slicedToArray(_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping === false ? children : null;
}

module.exports = WhenIsNotPiping;
//# sourceMappingURL=WhenIsNotPiping.js.map
