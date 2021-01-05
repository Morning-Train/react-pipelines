import React from 'react';
import useIsPiping from '../hooks/use-is-piping';

export default function WhenIsPiping({ children }) {
  const [isPiping] = useIsPiping();

  return isPiping ? children : null;
}
