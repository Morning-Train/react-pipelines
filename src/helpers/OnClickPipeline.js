import React from 'react'
import Pipeline from './Pipeline'
import TriggerPipelineOnClick from './../triggers/TriggerPipelineOnClick'

export default function OnClickPipeline ({
  trigger,
  async = false,
  nested = false,
  children,
  ...forwardProps
}) {
  return (
    <Pipeline async={async} nested={nested}>
      <TriggerPipelineOnClick {...forwardProps}>
        {trigger}
      </TriggerPipelineOnClick>
      {children}
    </Pipeline>
  )
}
