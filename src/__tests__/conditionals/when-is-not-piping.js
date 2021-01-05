import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import {
  AsyncPipeline,
  CallbackOnPipe,
  Pipeline,
  TriggerPipelineOnCallback,
  WhenIsNotPiping,
} from '../..';

it('crashes when rendering WhenIsNotPiping without pipeline', () => {
  expect(() => shallow(<WhenIsNotPiping>test</WhenIsNotPiping>)).toThrow();
});

it('renders WhenIsNotPiping inside pipeline without crashing', () => {
  mount(
    <Pipeline>
      <WhenIsNotPiping>test</WhenIsNotPiping>
    </Pipeline>,
  );
});

it('renders WhenIsNotPiping inside async pipeline without crashing', () => {
  mount(
    <AsyncPipeline>
      <WhenIsNotPiping>test</WhenIsNotPiping>
    </AsyncPipeline>,
  );
});

it('WhenIsNotPiping change state when piping', async () => {
  const mockCallBack = jest.fn();

  let trigger = null;

  const setTrigger = (callback) => {
    trigger = callback;
  };

  let resolver = null;

  expect.assertions(5);

  const wrapper = mount(
    <Pipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={() => new Promise((resolve) => {
        resolver = resolve;
      })}
      />
      <CallbackOnPipe callback={mockCallBack} />
      <WhenIsNotPiping>test</WhenIsNotPiping>
    </Pipeline>,
  );

  await act(async () => wrapper.update());

  expect(wrapper.text()).toEqual('test');

  act(() => {
    trigger();
  });

  await act(async () => wrapper.update());

  expect(wrapper.text()).toEqual('');
  expect(mockCallBack.mock.calls.length).toEqual(1);

  await act(async () => resolver());
  await act(async () => wrapper.update());

  expect(wrapper.text()).toEqual('test');
  expect(mockCallBack.mock.calls.length).toEqual(2);
});
