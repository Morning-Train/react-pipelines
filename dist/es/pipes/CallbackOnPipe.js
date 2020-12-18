import 'react';
import { objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import useWillPipe from '../hooks/use-will-pipe.js';
import PropTypes from 'prop-types';

function CallbackOnPipe(_ref) {
  var callback = _ref.callback;
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callback(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        resolve(_objectSpread2(_objectSpread2({}, payload), p));
      }).catch(function (err) {
        reject(err);
      });
    });
  }, [callback]);
  return null;
}

CallbackOnPipe.propTypes = {
  callback: PropTypes.func.isRequired
};

export default CallbackOnPipe;
//# sourceMappingURL=CallbackOnPipe.js.map
