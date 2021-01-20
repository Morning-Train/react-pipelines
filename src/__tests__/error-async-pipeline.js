import React from 'react'
import { mount, shallow } from 'enzyme'
import { CallbackOnPipe, ErrorAsyncPipeline, Pipeline, TriggerPipelineOnCallback } from '..'

it('renders ErrorAsyncPipeline without crashing', () => {
  shallow(<ErrorAsyncPipeline>test</ErrorAsyncPipeline>)
})

it('do not run error pipeline when there is no error', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <ErrorAsyncPipeline>
        <CallbackOnPipe callback={mockCallBack} />
      </ErrorAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ test: 'data' }).then((p) => {
    expect(mockCallBack.mock.calls.length).toEqual(1)
    expect(p.test).toBe('data')
  })
})

it('do run error pipeline when there is error', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(payload) => {
        return new Promise((resolve, reject) => {
          reject('error message')
        })
      }}
      />
      <ErrorAsyncPipeline>
        <CallbackOnPipe callback={mockCallBack} />
      </ErrorAsyncPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ test: 'data' })
    .catch((error) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(error).toBe('error message')
    })
})
