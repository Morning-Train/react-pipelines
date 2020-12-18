import React from 'react';
import PipelineContext from '../contexts/PipelineContext';

export default function usePipeline() {
  return React.useContext(PipelineContext);
}
