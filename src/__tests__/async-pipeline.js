import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  AsyncPipeline, CallbackOnPipe, Pipeline, TriggerPipelineOnCallback,
} from '..';

it('renders AsyncPipeline without crashing', () => {
  shallow(<AsyncPipeline>test</AsyncPipeline>);
});

it('async pipeline runs all pipes (3)', () => {
  const mockCallBack = jest.fn();

  let trigger = null;

  const setTrigger = (callback) => {
    trigger = callback;
  };

  mount(
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
    </AsyncPipeline>,
  );

  expect.assertions(1);

  return trigger()
    .then(() => {
      expect(mockCallBack.mock.calls.length).toEqual(3);
    });
});

it('async pipeline runs all pipes (5)', () => {
  const mockCallBack = jest.fn();

  let trigger = null;

  const setTrigger = (callback) => {
    trigger = callback;
  };

  mount(
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
      <CallbackOnPipe callback={mockCallBack} />
    </AsyncPipeline>,
  );

  expect.assertions(1);

  return trigger()
    .then(() => {
      expect(mockCallBack.mock.calls.length).toEqual(5);
    });
});

it('async pipeline provides payload (3)', () => {
  const mockCallBack = jest.fn();

  let trigger = null;

  const setTrigger = (callback) => {
    trigger = callback;
  };

  mount(
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
      <CallbackOnPipe callback={() => Promise.resolve({ value: 1 })} />
      <CallbackOnPipe callback={() => Promise.resolve({ value: 2 })} />
      <CallbackOnPipe callback={() => Promise.resolve({ value: 3 })} />
    </AsyncPipeline>,
  );

  expect.assertions(4);

  return trigger()
    .then((p) => {
      expect(p.length).toEqual(3);
      expect(p[0].value).toEqual(1);
      expect(p[1].value).toEqual(2);
      expect(p[2].value).toEqual(3);
    });
});

it('async pipeline runs when no pipes are provided', () => {
  let trigger = null;

  const setTrigger = (callback) => {
    trigger = callback;
  };

  mount(
    <AsyncPipeline>
      <TriggerPipelineOnCallback callback={setTrigger} />
    </AsyncPipeline>,
  );

  expect.assertions(1);

  return trigger({ test: 'data' }).then((p) => {
    expect(p.length).toBe(0);
  });
});
