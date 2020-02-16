import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

it('renders', () => {
  // arrange
  const { queryByTestId } = render(<App />)
  // act
  const app = queryByTestId('app')
  // assert
  expect(app).not.toBeNull()
})
