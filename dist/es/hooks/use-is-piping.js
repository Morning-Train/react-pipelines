import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React from 'react';
import usePipeline from './use-pipeline.js';

function useIsPiping() {
  var pipeline = usePipeline();

  var _React$useState = React.useState(pipeline ? pipeline.isPiping : false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    if (!pipeline) {
      return;
    }

    var disposer = pipeline.onIsPipingChange(function (isPipingValue) {
      setValue(isPipingValue);
    });
    return function () {
      disposer();
    };
  }, [pipeline]);
  return [value, setValue];
}

export { useIsPiping as default };
//# sourceMappingURL=use-is-piping.js.map
