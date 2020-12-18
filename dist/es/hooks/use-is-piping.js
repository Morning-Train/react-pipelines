import React from 'react';
import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import usePipeline from './use-pipeline.js';

function useIsPiping() {
  var pipeline = usePipeline();
  var boxedValue = pipeline.isPiping;

  var _React$useState = React.useState(boxedValue.get()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    var disposer = boxedValue.observe(function () {
      var currentBoxedValue = boxedValue.get();
      setValue(currentBoxedValue);
    });
    return function () {
      disposer();
    };
  }, [boxedValue]);

  function setValueOverride(val) {
    boxedValue.set(val);
  }

  return [value, setValueOverride];
}

export default useIsPiping;
//# sourceMappingURL=use-is-piping.js.map
