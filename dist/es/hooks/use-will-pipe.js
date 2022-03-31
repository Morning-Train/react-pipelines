import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import React from 'react';
import uniqueId from 'lodash/uniqueId';
import usePipeline from './use-pipeline.js';

function useWillPipe(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pipeline = usePipeline();
  var uuidRef = React.useRef(uniqueId('pipe_'));
  React.useEffect(function () {
    if (!pipeline) {
      return;
    }

    var disposer = pipeline.pipe(uuidRef.current, callback);
    return function () {
      disposer();
    };
  }, [pipeline].concat(_toConsumableArray(dependencies)));
}

export { useWillPipe as default };
//# sourceMappingURL=use-will-pipe.js.map
