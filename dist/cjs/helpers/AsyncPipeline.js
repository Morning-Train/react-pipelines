'use strict';

var React = require('react');
var PipelineContext = require('../contexts/PipelineContext.js');
var mobx = require('mobx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AsyncPipeline(props) {
  var isPipingRef = React__default['default'].useRef(mobx.observable.box());
  var pipesRef = React__default['default'].useRef({});
  var pipes = pipesRef.current;
  var pipesOrderRef = React__default['default'].useRef([]);
  var pipesOrder = pipesOrderRef.current;
  var pipeline = {};

  pipeline.pipe = function (uuid, pipe) {
    if (!pipesOrder.includes(uuid)) {
      pipesOrder.push(uuid);
    }

    pipes[uuid] = pipe;
    return function () {
      pipeline.remove(uuid);
    };
  };

  pipeline.remove = function (uuid) {
    if (pipes[uuid]) {
      delete pipes[uuid];
    }
  };

  pipeline.trigger = function () {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      isPipingRef.current.set(true);
      var promises = [];

      if (pipesOrder.length > 0) {
        pipesOrder.forEach(function (pipeUuid) {
          promises.push(Promise.resolve(payload).then(function (payload) {
            var pipe = pipes[pipeUuid];
            return typeof pipe === 'function' ? pipe(payload) : pipe;
          }));
        });
      }

      Promise.all(promises).then(function (payload) {
        isPipingRef.current.set(false);
        resolve(payload);
      }).catch(function (err) {
        isPipingRef.current.set(false);
        reject(err);
      });
    });
  };

  pipeline.isPiping = isPipingRef.current;
  return /*#__PURE__*/React__default['default'].createElement(PipelineContext['default'].Provider, {
    value: pipeline
  }, props.children);
}

module.exports = AsyncPipeline;
//# sourceMappingURL=AsyncPipeline.js.map
