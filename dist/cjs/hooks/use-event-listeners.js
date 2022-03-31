'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useEventListeners() {
  var callbacks_ref = React__default["default"].useRef([]);
  var callbacks = callbacks_ref.current;

  var trigger = function trigger() {
    var _arguments = arguments,
        _this = this;

    if (callbacks.length > 0) {
      callbacks.forEach(function (callback, index) {
        callback.apply(_this, Array.prototype.slice.call(_arguments, 0));
      });
    }
  };

  var removeEventListener = function removeEventListener(callback) {
    if (callbacks.length > 0) {
      callbacks.forEach(function (_callback, index) {
        if (callbacks[index] === callback) {
          delete callbacks[index];
        }
      });
    }
  };

  var addEventListener = function addEventListener(callback) {
    callbacks.push(callback);

    var disposer = function disposer() {
      removeEventListener(callback);
    };

    return disposer;
  };

  return [trigger, addEventListener, removeEventListener];
}

module.exports = useEventListeners;
//# sourceMappingURL=use-event-listeners.js.map
