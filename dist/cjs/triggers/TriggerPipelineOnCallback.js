'use strict';

var React = require('react');
var usePipeline = require('../hooks/use-pipeline.js');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function TriggerPipelineOnCallback(_ref) {
  var callback = _ref.callback;
  var pipeline = usePipeline();
  React__default['default'].useEffect(function () {
    callback(function () {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return pipeline.trigger(payload);
    });
  }, [pipeline, callback]);
  return null;
}

TriggerPipelineOnCallback.propTypes = {
  callback: PropTypes__default['default'].func.isRequired
};

module.exports = TriggerPipelineOnCallback;
//# sourceMappingURL=TriggerPipelineOnCallback.js.map
