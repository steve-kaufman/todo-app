import React from 'react'
import { render } from '@testing-library/react'
import Todo from '../../components/Todo'


describe('Todo', () => {
  let todo = null

  beforeEach(() => {
    todo = render(<Todo name='foo' description='bar' isCompleted={false} />)
  })

  it('renders', () => {
    // arrange
    const { queryByTestId } = todo
    // act
    const todoElement = queryByTestId('todo')
    // assert
    expect(todoElement).not.toBeNull()
  })

  it('has a name', () => {
    // arrange
    const { queryByTestId } = todo
    // act
    const name = queryByTestId('name')
    // assert
    expect(name).not.toBeNull()
    expect(name).toHaveTextContent(/foo/i)
  })

  it('has a description', () => {
    // arrange
    const { queryByTestId } = todo
    // act
    const description = queryByTestId('description')
    // assert
    expect(description).not.toBeNull()
    expect(description).toHaveTextContent(/bar/i)
  })

  it('has a checkbox', () => {
    // arrange
    const { queryByTestId } = todo
    // act
    const checkbox = queryByTestId('checkbox')
    // assert
    expect(checkbox).not.toBeNull()
    expect(checkbox.tagName).toBe('INPUT')
    expect(checkbox.type).toBe('checkbox')
  })

  it('has a delete button', () => {
    // arrange
    const { queryByTestId } = todo
    // act
    const deleteButton = queryByTestId('delete-button')
    // assert
    expect(deleteButton).not.toBeNull()
    expect(deleteButton.tagName).toBe('BUTTON')
  })
})