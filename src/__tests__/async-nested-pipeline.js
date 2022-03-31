import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import {
  CallbackOnPipe, NestedAsyncPipeline, Pipeline, TriggerPipelineOnCallback
} from '..'

it('renders AsyncNestedPipeline without crashing', () => {
  render(<NestedAsyncPipeline>test</NestedAsyncPipeline>)
  expect(screen.getByText(/test/i)).toHaveTextContent('test')
})

it('AsyncNestedPipeline runs in pipeline', () => {
  let trigger = null

  const mockCallBack = jest.fn()

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
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

  render(
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
