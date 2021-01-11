import React from 'react'
import { mount, shallow } from 'enzyme'
import {
  Pipeline, NestedPipeline, TriggerPipelineOnCallback, CallbackOnPipe
} from '..'

it('renders NestedPipeline without crashing', () => {
  shallow(<NestedPipeline>test</NestedPipeline>)
})

it('nested pipeline runs in pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <NestedPipeline>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </NestedPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger()
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(p.test).toBe('data')
    })
})
