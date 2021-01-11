import React from 'react'
import useIsPiping from '../hooks/use-is-piping'

export default function WhenIsNotPiping ({ children }) {
  const [isPiping] = useIsPiping()

  return (isPiping === false) ? children : null
}
