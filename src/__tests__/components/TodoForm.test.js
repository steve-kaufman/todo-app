import React from 'react'
import { render } from '@testing-library/react'
import TodoForm from '../../components/TodoForm'

describe('TodoForm', () => {
  let todoForm = null

  beforeEach(() => {
    todoForm = render(<TodoForm addTodo={jest.fn()} />)
  })

  it('renders', () => {
    // arrange
    const { queryByTestId } = todoForm
    // act
    const todoFormElement = queryByTestId('todo-form-form')
    // assert
    expect(todoFormElement).not.toBeNull()
    expect(todoFormElement.tagName).toBe('FORM')
  })
  it('has a name input', () => {
    // arrange
    const { queryByLabelText } = todoForm
    // act
    const nameInput = queryByLabelText(/name/i)
    // assert
    expect(nameInput).not.toBeNull()
    expect(nameInput.tagName).toBe('INPUT')
  })
  it('has a description input', () => {
    // arrange
    const { queryByLabelText } = todoForm
    // act
    const descriptionInput = queryByLabelText(/description/i)
    // assert
    expect(descriptionInput).not.toBeNull()
    expect(descriptionInput.tagName).toBe('INPUT')
  })
  it('has an add button', () => {
    // arrange
    const { queryByTestId } = todoForm
    // act
    const addButton = queryByTestId('add-button')
    // assert
    expect(addButton).not.toBeNull()
    expect(addButton.tagName).toBe('BUTTON')
  })
})