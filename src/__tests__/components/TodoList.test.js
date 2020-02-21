import React from 'react'
import { render } from '@testing-library/react'
import TodoList from '../../components/TodoList'

describe('TodoList', () =>{
  let todoList = null

  beforeEach(() => {
    todoList = render(<TodoList todos={[
      { id: 0, name: 'foo1', description: 'bar1', isCompleted: false },
      { id: 1, name: 'foo2', description: 'bar2', isCompleted: true }
    ]} />)
  })

  it('renders', () => {
    // arrange
    const { queryByTestId } = todoList
    // act
    const todoListElement = queryByTestId('todo-list')
    // assert
    expect(todoListElement).not.toBeNull()
  })
  it('has todos', () => {
    // arrange
    const { queryAllByTestId } = todoList
    // act
    const todos = queryAllByTestId('todo')
    // assert
    expect(todos.length).toBe(2)
  })
})