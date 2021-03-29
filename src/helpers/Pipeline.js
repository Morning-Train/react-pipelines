import React from 'react'
import SequentialPipeline from './SequentialPipeline'
import NestedAsyncPipeline from './NestedAsyncPipeline'
import AsyncPipeline from './AsyncPipeline'
import NestedPipeline from './NestedPipeline'

function Pipeline ({
  children,
  nested = false,
  async = false
}) {
  if (async) {
    if (nested) {
      return (
        <NestedAsyncPipeline>
          {children}
        </NestedAsyncPipeline>
      )
    } else {
      return (
        <AsyncPipeline>
          {children}
        </AsyncPipeline>
      )
    }
  }

  if (nested) {
    return (
      <NestedPipeline>
        {children}
      </NestedPipeline>
    )
  }

  return (
    <SequentialPipeline>
      {children}
    </SequentialPipeline>
  )
}

export default Pipeline
