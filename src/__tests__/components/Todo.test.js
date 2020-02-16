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

it('has a description', () => {
  // arrange
  const { queryByTestId } = render(<Todo description='bar' />)
  // act
  const description = queryByTestId('description')
  // assert
  expect(description).not.toBeNull()
  expect(description).toHaveTextContent(/bar/i)
})

it('has a checkbox', () => {
  // arrange
  const { queryByTestId } = render(<Todo />)
  // act
  const checkbox = queryByTestId('checkbox')
  // assert
  expect(checkbox).not.toBeNull()
  expect(checkbox.tagName).toBe('INPUT')
  expect(checkbox.type).toBe('checkbox')
})

it('has a delete button', () => {
  // arrange
  const { queryByTestId } = render(<Todo />)
  // act
  const deleteButton = queryByTestId('delete-button')
  // assert
  expect(deleteButton).not.toBeNull()
  expect(deleteButton.tagName).toBe('BUTTON')
  expect(deleteButton).toHaveTextContent(/delete/i)
})