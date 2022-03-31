import React from 'react';
import PipelineContext from '../contexts/PipelineContext.js';

function usePipeline() {
  return React.useContext(PipelineContext);
}

export { usePipeline as default };
//# sourceMappingURL=use-pipeline.js.map
