import React from 'react'
import usePipeline from './use-pipeline'

export default function useIsPiping () {
  const pipeline = usePipeline()

  const [value, setValue] = React.useState(pipeline.isPiping)

  React.useEffect(() => {

    setValue(pipeline ? pipeline.isPiping : false)

    if(pipeline) {
      const disposer = pipeline.onIsPipingChange((isPipingValue) => {
        setValue(isPipingValue)
      })


      return () => {
        disposer()
      }
    }
  }, [pipeline])

  return [value, setValue]
}
