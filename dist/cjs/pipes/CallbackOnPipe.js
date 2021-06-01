'use strict';

require('./node_modules/react/index.js');
var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var useWillPipe = require('../hooks/use-will-pipe.js');
var PropTypes = require('./node_modules/prop-types/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function CallbackOnPipe(_ref) {
  var callback = _ref.callback;
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callback(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        resolve(_rollupPluginBabelHelpers.objectSpread2(_rollupPluginBabelHelpers.objectSpread2({}, payload), p));
      }).catch(function (err) {
        reject(err);
      });
    });
  }, [callback]);
  return null;
}

CallbackOnPipe.propTypes = {
  callback: PropTypes__default['default'].func.isRequired
};

module.exports = CallbackOnPipe;
//# sourceMappingURL=CallbackOnPipe.js.map
