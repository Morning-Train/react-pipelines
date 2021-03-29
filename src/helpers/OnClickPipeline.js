import React from 'react'
import Pipeline from './Pipeline'
import TriggerPipelineOnClick from './../triggers/TriggerPipelineOnClick'

export default function OnClickPipeline ({ trigger, children }) {
  return (
    <Pipeline>
      <TriggerPipelineOnClick>
        {trigger}
      </TriggerPipelineOnClick>
      {children}
    </Pipeline>
  )
}
