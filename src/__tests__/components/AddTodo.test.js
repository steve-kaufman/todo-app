import React from 'react'
import { render } from '@testing-library/react'
import AddTodo from '../../components/AddTodo'

describe('AddTodo', () => {
  let addTodo = null

  beforeEach(() => {
    addTodo = render(<AddTodo addTodo={jest.fn()} />)
  })

  it('renders', () => {
    // arrange
    const { queryByTestId } = addTodo
    // act
    const addTodoElement = queryByTestId('add-todo-form')
    // assert
    expect(addTodoElement).not.toBeNull()
    expect(addTodoElement.tagName).toBe('FORM')
  })
  it('has a name input', () => {
    // arrange
    const { queryByLabelText } = addTodo
    // act
    const nameInput = queryByLabelText(/name/i)
    // assert
    expect(nameInput).not.toBeNull()
    expect(nameInput.tagName).toBe('INPUT')
  })
  it('has a description input', () => {
    // arrange
    const { queryByLabelText } = addTodo
    // act
    const descriptionInput = queryByLabelText(/description/i)
    // assert
    expect(descriptionInput).not.toBeNull()
    expect(descriptionInput.tagName).toBe('INPUT')
  })
  it('has an add button', () => {
    // arrange
    const { queryByTestId } = addTodo
    // act
    const addButton = queryByTestId('add-button')
    // assert
    expect(addButton).not.toBeNull()
    expect(addButton.tagName).toBe('BUTTON')
  })
})