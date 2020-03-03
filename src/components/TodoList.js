import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Todo from '../containers/Todo'
import '../styles/components/TodoList.sass'

function TodoList ({ todos }) {
  return (
    <ul data-testid='todo-list' id='todo-list'>
      <TransitionGroup>
        {todos.map((todo, index) => {
          const { id, name, description, isCompleted } = todo
          const isLastTodo = (index === todos.length - 1)
          return (
            <CSSTransition
              key={id}
              classNames='todo'
              timeout={{ enter: 500, exit: 500 }}
            >
              <Todo
                id={id}
                name={name}
                description={description}
                isCompleted={isCompleted}
                isLast={isLastTodo}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList