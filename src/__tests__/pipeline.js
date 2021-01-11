import React from 'react'
import { mount, shallow } from 'enzyme'
import { CallbackOnPipe, Pipeline, TriggerPipelineOnCallback } from '..'

it('renders Pipeline without crashing', () => {
  shallow(<Pipeline>test</Pipeline>)
})

it('pipeline runs in correct order', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(p) => Promise.resolve(p)} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test: 123 })} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test: 321 })} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger({ test: 'data' }).then((p) => {
    expect(p.test).toBe(321)
  })
})

it('pipeline runs in correct order - reversed', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={(p) => Promise.resolve(p)} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test: 321 })} />
      <CallbackOnPipe callback={(p) => Promise.resolve({ ...p, test: 123 })} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger({ test: 'data' }).then((p) => {
    expect(p.test).toBe(123)
  })
})

it('pipeline runs when no pipes are provided', () => {
  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
    </Pipeline>
  )

  expect.assertions(1)

  return trigger({ test: 'data' }).then((p) => {
    expect(p.test).toBe('data')
  })
})
