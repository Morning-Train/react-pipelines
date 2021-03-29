import React from 'react'
import { mount, shallow } from 'enzyme'
import {
  CallbackOnPipe, NestedAsyncPipeline, Pipeline, TriggerPipelineOnCallback
} from '..'

it('renders AsyncNestedPipeline without crashing', () => {
  shallow(<NestedAsyncPipeline>test</NestedAsyncPipeline>)
})

it('AsyncNestedPipeline runs in pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={() => Promise.resolve({ some: 'test' })} />
      <NestedAsyncPipeline>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </NestedAsyncPipeline>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  expect.assertions(4)

  return trigger({ initial: 'data' })
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(2)
      expect(p.test).toBe('data')
      expect(p.some).toBe('test')
      expect(p.initial).toBe('data')
    })
})

it('AsyncNestedPipeline runs in pipeline using base pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={() => Promise.resolve({ some: 'test' })} />
      <Pipeline nested async>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </Pipeline>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  expect.assertions(4)

  return trigger({ initial: 'data' })
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(2)
      expect(p.test).toBe('data')
      expect(p.some).toBe('test')
      expect(p.initial).toBe('data')
    })
})
