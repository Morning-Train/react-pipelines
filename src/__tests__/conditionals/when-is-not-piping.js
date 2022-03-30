import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import {
  AsyncPipeline,
  CallbackOnPipe,
  Pipeline,
  TriggerPipelineOnCallback,
  WhenIsNotPiping
} from '../..'

it('renders without crashing', () => {
  render(<WhenIsNotPiping>test</WhenIsNotPiping>)
  expect(screen.getByText(/test/i)).toHaveTextContent('test')
})

it('renders WhenIsNotPiping inside pipeline without crashing', () => {
  render(
    <Pipeline>
      <WhenIsNotPiping>test</WhenIsNotPiping>
    </Pipeline>
  )
})

it('renders WhenIsNotPiping inside async pipeline without crashing', () => {
  render(
    <AsyncPipeline>
      <WhenIsNotPiping>test</WhenIsNotPiping>
    </AsyncPipeline>
  )
})

it('WhenIsNotPiping change state when piping', async () => {
  const mockCallBack = jest.fn()

  let trigger = null

  const setTrigger = (callback) => {
    trigger = callback
  }

  let resolver = null

  expect.assertions(5)

  const wrapper = render(
    <div data-testid="wrapper">
      <Pipeline>
        <TriggerPipelineOnCallback callback={setTrigger} />
        <CallbackOnPipe callback={mockCallBack} />
        <CallbackOnPipe callback={() => new Promise((resolve) => {
          resolver = resolve
        })}
        />
        <CallbackOnPipe callback={mockCallBack} />
        <WhenIsNotPiping>test</WhenIsNotPiping>
      </Pipeline>
    </div>
  )

  expect(screen.getByTestId('wrapper')).toHaveTextContent('test');

  await act(() => {
    trigger()
  })

  expect(screen.getByTestId('wrapper')).toHaveTextContent('');
  expect(mockCallBack.mock.calls.length).toEqual(1)

  await act(async () => resolver())

  expect(screen.getByTestId('wrapper')).toHaveTextContent('test');
  expect(mockCallBack.mock.calls.length).toEqual(2)
})
