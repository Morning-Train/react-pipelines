import React from 'react'
import usePipeline from '../hooks/use-pipeline.js'
import useIsPiping from '../hooks/use-is-piping.js'

function TriggerPipelineOnClick (_ref) {
  const children = _ref.children
  const pipeline = usePipeline()
  const isPiping = useIsPiping()

  const handleClick = function handleClick (e) {
    e.preventDefault()
    e.stopPropagation()
    e.persist()
    const payload = {
      clickEvent: e
    }
    pipeline.trigger(payload).catch(function (err) {
      return console.log('caught error', err)
    })
  }

  return /* #__PURE__ */React.createElement(React.Fragment, null, React.Children.map(children, function (child) {
    return /* #__PURE__ */React.cloneElement(child, {
      onClick: function onClick (e) {
        return handleClick(e)
      },
      disabled: isPiping
    })
  }))
}

export default TriggerPipelineOnClick
// # sourceMappingURL=TriggerPipelineOnClick.js.map
