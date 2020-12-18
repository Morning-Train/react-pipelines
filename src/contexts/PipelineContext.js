import React from 'react';

const PipelineContext = React.createContext(null);

export const { Provider } = PipelineContext;
export const { Consumer } = PipelineContext;

export default PipelineContext;
