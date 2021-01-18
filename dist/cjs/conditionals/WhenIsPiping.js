'use strict';

require('react');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var useIsPiping = require('../hooks/use-is-piping.js');

function WhenIsPiping(_ref) {
  var children = _ref.children;

  var _useIsPiping = useIsPiping(),
      _useIsPiping2 = _rollupPluginBabelHelpers.slicedToArray(_useIsPiping, 1),
      isPiping = _useIsPiping2[0];

  return isPiping ? children : null;
}

module.exports = WhenIsPiping;
//# sourceMappingURL=WhenIsPiping.js.map
