import React from 'react'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<div>test</div>)
  expect(screen.getAllByRole('div')).toHaveTextContent('test')
})
