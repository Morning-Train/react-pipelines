'use strict';

var React = require('react');
var usePipeline = require('../hooks/use-pipeline.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TriggerPipelineOnCallback(_ref) {
  var callback = _ref.callback;
  var pipeline = usePipeline();
  React__default['default'].useEffect(function () {
    callback(function () {
      var payload = {};
      pipeline.trigger(payload).catch(function (err) {
        return console.log('caught error', err);
      });
    });
  }, []);
  return null;
}

module.exports = TriggerPipelineOnCallback;
//# sourceMappingURL=TriggerPipelineOnCallback.js.map
