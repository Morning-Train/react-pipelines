import React from 'react'
import { mount } from 'enzyme'
import {
  Pipeline, TriggerPipelineOnCallback, CallbackOnPipe, ConditionalNestedAsyncPipeline
} from '..'

it('conditional nested pipeline does not run in pipeline (boolean)', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <ConditionalNestedAsyncPipeline when='run_conditional' matches>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </ConditionalNestedAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger()
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(0)
      expect(p.test).toBe(undefined)
    })
})

it('conditional nested pipeline runs in pipeline (boolean)', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <ConditionalNestedAsyncPipeline when='run_conditional' matches>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </ConditionalNestedAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ run_conditional: true })
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(p.test).toBe('data')
    })
})

it('conditional nested pipeline runs in pipeline (string)', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <ConditionalNestedAsyncPipeline when='run_conditional' matches='true'>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </ConditionalNestedAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ run_conditional: 'true' })
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(p.test).toBe('data')
    })
})

it('conditional nested pipeline runs in pipeline (number)', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <ConditionalNestedAsyncPipeline when='run_conditional' matches={123}>
        <CallbackOnPipe callback={() => Promise.resolve({ test: 'data' })} />
        <CallbackOnPipe callback={mockCallBack} />
      </ConditionalNestedAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ run_conditional: 123 })
    .then((p) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(p.test).toBe('data')
    })
})
