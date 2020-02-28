import React from 'react'
import { render } from '@testing-library/react'
import Todo from '../../components/Todo'


describe('Todo', () => {
  let todo, toggleTodo, deleteTodo

  const id = 2

  beforeEach(() => {
    toggleTodo = deleteTodo = jest.fn()
    todo = render(<Todo 
      id={id}
      name='foo' 
      description='bar' 
      isCompleted={false} 
      isLast={false}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />)
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

  describe('Checkbox', () => {
    it('exists', () => {
      // arrange
      const { queryByTestId } = todo
      // act
      const checkbox = queryByTestId('checkbox')
      // assert
      expect(checkbox).not.toBeNull()
      expect(checkbox.tagName).toBe('INPUT')
      expect(checkbox.type).toBe('checkbox')
    })
    it('calls toggleTodo when clicked', () => {
      // arrange
      const { getByTestId } = todo
      // act
      getByTestId('checkbox').click()
      // assert
      expect(toggleTodo).toHaveBeenCalledTimes(1)
      expect(toggleTodo).toHaveBeenCalledWith(id)
    })
  })

  describe('Delete Button', () => {
    it('exists', () => {
      // arrange
      const { queryByTestId } = todo
      // act
      const deleteButton = queryByTestId('delete-button')
      // assert
      expect(deleteButton).not.toBeNull()
      expect(deleteButton.tagName).toBe('BUTTON')
    })
    it('calls deleteTodo when clicked', () => {
      // arrange
      const { getByTestId } = todo
      // act
      getByTestId('delete-button').click()
      // assert
      expect(toggleTodo).toHaveBeenCalledTimes(1)
      expect(toggleTodo).toHaveBeenCalledWith(id)
    })
  })
})