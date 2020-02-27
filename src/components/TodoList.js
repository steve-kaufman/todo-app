import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import '../styles/components/TodoList.sass'

function TodoList ({ todos }) {
  return (
    <ul data-testid='todo-list' id='todo-list'>
      {todos.map((todo, index) => {
        const { id, name, description, isCompleted } = todo
        const isLastTodo = (index === todos.length - 1)
        return (
          <Todo 
            key={ index }
            id={ id } 
            name={ name } 
            description={ description } 
            isCompleted={ isCompleted }
            isLast={ isLastTodo }
          />
      )})}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList