import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { CallbackOnPipe, Pipeline, TriggerPipelineOnClick } from '../..'

it('Can trigger pipeline on click once', async () => {
  const mockCallBack = jest.fn()

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnClick>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  await act(async () => wrapper.update())

  const button = wrapper.find('button')

  await act(async () => button.props().onClick())

  await act(async () => wrapper.update())

  expect.assertions(1)

  expect(mockCallBack.mock.calls.length).toEqual(1)
})

it('Can trigger pipeline on click once and pass along clickEvent', async () => {
  const mockCallBack = jest.fn()

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnClick>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  await act(async () => wrapper.update())

  const button = wrapper.find('button')

  await act(async () => button.props().onClick({ test: 'data' }))

  await act(async () => wrapper.update())

  expect.assertions(2)

  expect(mockCallBack.mock.calls.length).toEqual(1)
  expect(mockCallBack.mock.calls[0][0].clickEvent.test).toEqual('data')
})

it('Can trigger pipeline once on click multiple times ', async () => {
  const mockCallBack = jest.fn()

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnClick>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  await act(async () => wrapper.update())

  const button = wrapper.find('button')

  act(() => button.props().onClick())
  act(() => button.props().onClick())
  await act(async () => button.props().onClick())

  await act(async () => wrapper.update())

  expect.assertions(1)

  expect(mockCallBack.mock.calls.length).toEqual(1)
})

it('Can trigger pipeline on click multiple times ', async () => {
  const mockCallBack = jest.fn()

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnClick onlyTriggerWhenIdle={false}>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>
  )

  await act(async () => wrapper.update())

  const button = wrapper.find('button')

  act(() => button.props().onClick())
  act(() => button.props().onClick())
  await act(async () => button.props().onClick())

  await act(async () => wrapper.update())

  expect.assertions(1)

  expect(mockCallBack.mock.calls.length).toEqual(3)
})

it('Can trigger pipeline on click after error in pipeline ', async () => {
  const mockCallBack = jest.fn()

  let count = 0

  const wrapper = render(
    <Pipeline>
      <TriggerPipelineOnClick>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={(p) => {
        if (count % 2 === 0) {
          count += 1
          throw new Error('test')
        }

        count += 1
        mockCallBack(p)

        return p
      }}
      />
    </Pipeline>
  )

  await act(async () => wrapper.update())

  const button = wrapper.find('button')

  await act(async () => button.props().onClick())
  await act(async () => button.props().onClick())
  await act(async () => button.props().onClick())
  await act(async () => button.props().onClick())

  await act(async () => wrapper.update())

  expect.assertions(1)

  expect(mockCallBack.mock.calls.length).toEqual(2)
})
