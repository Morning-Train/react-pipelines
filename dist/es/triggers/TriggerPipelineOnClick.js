import React from 'react';
import usePipeline from '../hooks/use-pipeline.js';
import PropTypes from 'prop-types';

function TriggerPipelineOnClick(_ref) {
  var children = _ref.children,
      _ref$onlyTriggerWhenI = _ref.onlyTriggerWhenIdle,
      onlyTriggerWhenIdle = _ref$onlyTriggerWhenI === void 0 ? true : _ref$onlyTriggerWhenI;
  var pipeline = usePipeline();
  var isCurrentlyPipingRef = React.useRef(false);

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

  return React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      onClick: handleClick
    });
  });
}

TriggerPipelineOnClick.propTypes = {
  onlyTriggerWhenIdle: PropTypes.bool
};

export default TriggerPipelineOnClick;
//# sourceMappingURL=TriggerPipelineOnClick.js.map
