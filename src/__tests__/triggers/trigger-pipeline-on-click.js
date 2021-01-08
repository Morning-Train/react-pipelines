import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { CallbackOnPipe, Pipeline, TriggerPipelineOnClick } from '../..';

it('Can trigger pipeline on click once', async () => {
  const mockCallBack = jest.fn();

  const wrapper = mount(
    <Pipeline>
      <TriggerPipelineOnClick>
        <button>Click me</button>
      </TriggerPipelineOnClick>
      <CallbackOnPipe callback={mockCallBack} />
    </Pipeline>,
  );

  await act(async () => wrapper.update());

  const button = wrapper.find('button');

  await act(async () => button.props().onClick());

  await act(async () => wrapper.update());

  expect.assertions(1);

  expect(mockCallBack.mock.calls.length).toEqual(1);
});
