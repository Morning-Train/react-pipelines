import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { CallbackOnPipe, ErrorPipeline, Pipeline, TriggerPipelineOnCallback } from '..'

it('renders ErrorPipeline without crashing', () => {
  render(<ErrorPipeline>test</ErrorPipeline>)
  expect(screen.getByText(/test/i)).toHaveTextContent('test')
})

it('do not run error pipeline when there is no error', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <ErrorPipeline>
        <CallbackOnPipe callback={mockCallBack} />
      </ErrorPipeline>
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

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(payload) => {
        return new Promise((resolve, reject) => {
          reject('error message')
        })
      }}
      />
      <ErrorPipeline>
        <CallbackOnPipe callback={mockCallBack} />
      </ErrorPipeline>
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ test: 'data' })
    .catch((error) => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
      expect(error).toBe('error message')
    })
})
