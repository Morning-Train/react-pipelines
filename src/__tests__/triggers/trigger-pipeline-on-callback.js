import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { CallbackOnPipe, Pipeline, TriggerPipelineOnCallback } from '../..'

it('Can trigger pipeline on callback once', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger()
    .then(() => {
      expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})

it('Can trigger pipeline on callback twice', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger()
    .then(() => trigger())
    .then(() => {
      expect(mockCallBack.mock.calls.length).toEqual(2)
    })
})

it('Can trigger pipeline on callback with custom payload', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(p) => Promise.resolve(p)} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger({ test: 'data' }).then((p) => {
    expect(p.test).toBe('data')
  })
})
