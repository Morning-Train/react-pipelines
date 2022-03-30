import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<div>test</div>)
  expect(screen.getByText(/test/i)).toHaveTextContent('test')
})
