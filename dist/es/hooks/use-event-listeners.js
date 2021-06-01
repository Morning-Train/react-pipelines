import React from './node_modules/react/index.js';

function useEventListeners() {
  var callbacks_ref = React.useRef([]);
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

export default useEventListeners;
//# sourceMappingURL=use-event-listeners.js.map
