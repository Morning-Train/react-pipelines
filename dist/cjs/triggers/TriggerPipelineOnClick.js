'use strict';

var React = require('react');
var usePipeline = require('../hooks/use-pipeline.js');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function TriggerPipelineOnClick(_ref) {
  var children = _ref.children,
      _ref$onlyTriggerWhenI = _ref.onlyTriggerWhenIdle,
      onlyTriggerWhenIdle = _ref$onlyTriggerWhenI === void 0 ? true : _ref$onlyTriggerWhenI;
  var pipeline = usePipeline();
  var isCurrentlyPipingRef = React__default['default'].useRef(false);

  var handleClick = function handleClick(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') {
        e.preventDefault();
      }

      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
      }

      if (typeof e.persist === 'function') {
        e.persist();
      }
    }

    if (onlyTriggerWhenIdle === true && isCurrentlyPipingRef.current === true) {
      return;
    }

    isCurrentlyPipingRef.current = true;
    var payload = {
      clickEvent: e
    };
    pipeline.trigger(payload).then(function (p) {
      isCurrentlyPipingRef.current = false;
      return p;
    }).catch(function (err) {
      isCurrentlyPipingRef.current = false;
    });
  };

  return React__default['default'].Children.map(children, function (child) {
    return /*#__PURE__*/React__default['default'].cloneElement(child, {
      onClick: handleClick
    });
  });
}

TriggerPipelineOnClick.propTypes = {
  onlyTriggerWhenIdle: PropTypes__default['default'].bool
};

module.exports = TriggerPipelineOnClick;
//# sourceMappingURL=TriggerPipelineOnClick.js.map
