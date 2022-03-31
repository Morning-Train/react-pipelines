import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'react';
import PropTypes from 'prop-types';
import useWillPipe from '../hooks/use-will-pipe.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CallbackOnPipe(_ref) {
  var callback = _ref.callback;
  useWillPipe(function (payload) {
    return new Promise(function (resolve, reject) {
      Promise.resolve(callback(payload)).then(function () {
        var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        resolve(_objectSpread(_objectSpread({}, payload), p));
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

export { CallbackOnPipe as default };
//# sourceMappingURL=CallbackOnPipe.js.map
