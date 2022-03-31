import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import {
  Pipeline, NestedPipeline, TriggerPipelineOnCallback, CallbackOnPipe
} from '..'

it('renders NestedPipeline without crashing', () => {
  render(<NestedPipeline>test</NestedPipeline>)
})

it('nested pipeline runs in pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
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

it('nested pipeline runs in pipeline using base pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <Pipeline nested>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </Pipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger()
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(p.test).toBe('data')
    })
})
