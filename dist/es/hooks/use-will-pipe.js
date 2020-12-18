import React from 'react';
import usePipeline from './use-pipeline.js';
import { uniqueId } from 'lodash';

function useWillPipe(callback) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var pipeline = usePipeline();
  var uuidRef = React.useRef(uniqueId('pipe_'));
  React.useEffect(function () {
    var disposer = pipeline.pipe(uuidRef.current, callback);
    return function () {
      disposer();
    };
  }, dependencies);
}

export default useWillPipe;
//# sourceMappingURL=use-will-pipe.js.map
