import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import {
  AsyncPipeline, CallbackOnPipe, Pipeline, TriggerPipelineOnCallback, WhenIsPiping
} from '../..'

it('crashes when rendering WhenIsPiping without pipeline', () => {
  expect(() => render(<WhenIsPiping>test</WhenIsPiping>)).toThrow()
})

it('renders WhenIsPiping inside pipeline without crashing', () => {
  render(
    <Pipeline>
      <WhenIsPiping>test</WhenIsPiping>
    </Pipeline>
  )
})

it('renders WhenIsPiping inside async pipeline without crashing', () => {
  render(
    <AsyncPipeline>
      <WhenIsPiping>test</WhenIsPiping>
    </AsyncPipeline>
  )
})

it('WhenIsPiping change state when piping', async () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  let resolver = null

  expect.assertions(5)

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={() => new Promise((resolve) => {
        resolver = resolve
      })}
      />
      <CallbackOnPipe callback={mockCallBack} />
      <WhenIsPiping>test</WhenIsPiping>
    </Pipeline>
  )

  await act(async () => wrapper.update())

  expect(wrapper.text()).toEqual('')

  act(() => {
    trigger()
  })

  await act(async () => wrapper.update())

  expect(wrapper.text()).toEqual('test')
  expect(mockCallBack.mock.calls.length).toEqual(1)

  await act(async () => resolver())
  await act(async () => wrapper.update())

  expect(wrapper.text()).toEqual('')
  expect(mockCallBack.mock.calls.length).toEqual(2)
})
