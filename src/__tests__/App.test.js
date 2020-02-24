import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import { render } from '@testing-library/react'
import App from '../App'

it('renders', () => {
  // arrange
  const { queryByTestId } = render(<Provider store={configureStore()}>
    <App />
  </Provider>)
  // act
  const app = queryByTestId('app')
  // assert
  expect(app).not.toBeNull()
})
