import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { CallbackOnPipe, Pipeline, TriggerPipelineOnCallback } from '../..'

it('renders CallbackOnPipe without crashing', () => {
  const mockCallBack = jest.fn()
  render(<CallbackOnPipe callback={mockCallBack} />)
  expect(mockCallBack.mock.calls.length).toEqual(0)
})

it('renders CallbackOnPipe inside pipeline without crashing', () => {
  const mockCallBack = jest.fn()
  render(
    <Pipeline>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )
  expect(mockCallBack.mock.calls.length).toEqual(0)
})

it('CallbackOnPipe triggers once', () => {
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

it('CallbackOnPipe triggers twice', () => {
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

it('CallbackOnPipe can throw', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={() => {
        throw new Error('test')
      }}
      />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger().catch((err) => expect(err.message).toBe('test'))
})

it('CallbackOnPipe can throw and block', () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={() => {
        throw new Error('test')
      }}
      />
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  expect.assertions(2)

  return trigger({ test: 'data' }).catch((err) => {
    expect(mockCallBack.mock.calls.length).toEqual(0)
    expect(err.message).toBe('test')
  })
})

it('CallbackOnPipe passes along payload', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(p) => Promise.resolve(p)} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test1: 321 })} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test2: 123 })} />
    </Pipeline>
  )

  expect.assertions(3)

  return trigger({ test: 'data' }).then((p) => {
    expect(p.test).toBe('data')
    expect(p.test1).toBe(321)
    expect(p.test2).toBe(123)
  })
})
