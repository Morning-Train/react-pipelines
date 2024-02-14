import React from 'react';
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import usePipeline from './use-pipeline.js';

function useIsPiping() {
  var pipeline = usePipeline();

  var _React$useState = React.useState(pipeline.isPiping),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    setValue(pipeline ? pipeline.isPiping : false);

    if (pipeline) {
      var disposer = pipeline.onIsPipingChange(function (isPipingValue) {
        setValue(isPipingValue);
      });
      return function () {
        disposer();
      };
    }
  }, [pipeline]);
  return [value, setValue];
}

export default useIsPiping;
//# sourceMappingURL=use-is-piping.js.map
