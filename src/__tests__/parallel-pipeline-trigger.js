import React from 'react'
import uniqueId from 'lodash/uniqueId'
import parallelPipelineTrigger from '../utilities/parallelPipelineTrigger'

it('parallel pipeline trigger returns function', () => {
  const trigger = parallelPipelineTrigger()

  expect(typeof trigger).toBe('function')
})

it('parallel pipeline trigger resolves', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve(p)
  }

  const trigger = parallelPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => {
    expect(p[0].test).toBe('data')
  })
})

it('parallel pipeline trigger correct order', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve({ test: '321' }),
    [uniqueId()]: (p) => Promise.resolve({ test: '123' })
  }

  const trigger = parallelPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => expect(p[1].test).toBe('123'))
})

it('parallel pipeline trigger correct order - reversed', () => {
  const pipes = {
    [uniqueId()]: (p) => Promise.resolve({ test: '123' }),
    [uniqueId()]: (p) => Promise.resolve({ test: '321' })
  }

  const trigger = parallelPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).then((p) => expect(p[1].test).toBe('321'))
})

it('parallel pipeline trigger can catch', () => {
  const pipes = {
    [uniqueId()]: (p) => {
      throw new Error('test')
    },
    [uniqueId()]: (p) => Promise.resolve({ test: '321' })
  }

  const trigger = parallelPipelineTrigger(Object.keys(pipes), pipes)
  expect.assertions(1)
  return trigger({ test: 'data' }).catch((err) => expect(err.message).toBe('test'))
})
