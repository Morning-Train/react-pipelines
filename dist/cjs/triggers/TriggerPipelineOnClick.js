'use strict';

var React = require('react');
var usePipeline = require('../hooks/use-pipeline.js');
var useIsPiping = require('../hooks/use-is-piping.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TriggerPipelineOnClick(_ref) {
  var children = _ref.children;
  var pipeline = usePipeline();
  var isPiping = useIsPiping();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.persist();
    var payload = {
      clickEvent: e
    };
    pipeline.trigger(payload).catch(function (err) {
      return console.log('caught error', err);
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, React__default['default'].Children.map(children, function (child) {
    return /*#__PURE__*/React__default['default'].cloneElement(child, {
      onClick: function onClick(e) {
        return handleClick(e);
      },
      disabled: isPiping
    });
  }));
}

module.exports = TriggerPipelineOnClick;
//# sourceMappingURL=TriggerPipelineOnClick.js.map
