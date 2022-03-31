import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen, waitFor} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import {
  AsyncPipeline, CallbackOnPipe, Pipeline, TriggerPipelineOnCallback, WhenIsPiping
} from '../..'

it('renders without crashing', () => {
  render(<WhenIsPiping>test</WhenIsPiping>)
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

  render(
    <div data-testid="wrapper">
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
    </div>
  )

  expect(screen.getByTestId('wrapper')).toHaveTextContent('');

  await act(() => {
    trigger()
  })

  expect(screen.getByTestId('wrapper')).toHaveTextContent('test');
  expect(mockCallBack.mock.calls.length).toEqual(1)

  await act(async () => resolver())

  expect(screen.getByTestId('wrapper')).toHaveTextContent('');
  expect(mockCallBack.mock.calls.length).toEqual(2)
})
