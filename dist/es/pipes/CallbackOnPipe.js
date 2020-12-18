import 'react';
import useWillPipe from '../hooks/use-will-pipe.js';
import PropTypes from 'prop-types';

function CallbackOnPipe(_ref) {
  var callback = _ref.callback;
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callback(payload)).then(function (p) {
        resolve(p);
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
