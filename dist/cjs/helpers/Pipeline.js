'use strict'

const React = require('react')
const PipelineContext = require('../contexts/PipelineContext.js')
const mobx = require('mobx')
const sequentialPipelineTrigger = require('../utilities/sequentialPipelineTrigger.js')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)

function Pipeline (_ref) {
  const children = _ref.children
  const isPipingRef = React__default.default.useRef(mobx.observable.box(false))
  const pipesRef = React__default.default.useRef({})
  const pipes = pipesRef.current
  const pipesOrderRef = React__default.default.useRef([])
  const pipesOrder = pipesOrderRef.current
  const pipeline = {}

  pipeline.pipe = function (uuid, pipe) {
    if (!pipesOrder.includes(uuid)) {
      pipesOrder.push(uuid)
    }

    pipes[uuid] = pipe
    return function () {
      pipeline.remove(uuid)
    }
  }

  pipeline.remove = function (uuid) {
    if (pipes[uuid]) {
      delete pipes[uuid]
    }
  }

  pipeline.trigger = React__default.default.useCallback(function () {
    const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
    isPipingRef.current.set(true)
    return new Promise(function (resolve, reject) {
      sequentialPipelineTrigger(pipesOrder, pipes)(payload).then(function (p) {
        isPipingRef.current.set(false)
        resolve(p)
      }).catch(function (err) {
        isPipingRef.current.set(false)
        reject(err)
      })
    })
  }, [pipesOrder, pipes])
  pipeline.isPiping = isPipingRef.current
  return /* #__PURE__ */React__default.default.createElement(PipelineContext.default.Provider, {
    value: pipeline
  }, children)
}

module.exports = Pipeline
// # sourceMappingURL=Pipeline.js.map
