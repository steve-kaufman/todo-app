import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

function TodoList ({ todos }) {
  return (
    <ul data-testid='todo-list'>
      {todos.map((todo, index) => {
        const { id, name, description, isCompleted } = todo
        return <Todo 
          key={ index }
          id={ id } 
          name={ name } 
          description={ description } 
          isCompleted={ isCompleted }
        />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList