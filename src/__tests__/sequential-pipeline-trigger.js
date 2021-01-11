import React from 'react'
import { uniqueId } from 'lodash'
import sequentialPipelineTrigger from '../utilities/sequentialPipelineTrigger'

it('sequential pipeline trigger returns function', () => {
  const trigger = sequentialPipelineTrigger()

  expect(typeof trigger).toBe('function')
})

it('sequential pipeline trigger resolves', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve(p)
  }

  const trigger = sequentialPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => expect(p.test).toBe('data'))
})

it('sequential pipeline trigger correct order', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve({ test: '321' }),
    [uniqueId()]: (p) => Promise.resolve({ test: '123' })
  }

  const trigger = sequentialPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => expect(p.test).toBe('123'))
})

it('sequential pipeline trigger correct order - reversed', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve({ test: '123' }),
    [uniqueId()]: (p) => Promise.resolve({ test: '321' })
  }

  const trigger = sequentialPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => expect(p.test).toBe('321'))
})

it('sequential pipeline trigger can catch', () => {
  const pipes = {
    [uniqueId()]: (p) => {
      throw new Error('test')
    },
    [uniqueId()]: (p) => Promise.resolve({ test: '321' })
  }

  const trigger = sequentialPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).catch((err) => expect(err.message).toBe('test'))
})
