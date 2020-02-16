import React from 'react'
import { render } from '@testing-library/react'
import Todo from '../../components/Todo'

it('renders', () => {
  // arrange
  const { queryByTestId } = render(<Todo />)
  // act
  const todo = queryByTestId('todo')
  // assert
  expect(todo).not.toBeNull()
})

it('has a name', () => {
  // arrange
  const { queryByTestId } = render(<Todo name='foo' />)
  // act
  const name = queryByTestId('name')
  // assert
  expect(name).not.toBeNull()
  expect(name).toHaveTextContent(/foo/i)
})