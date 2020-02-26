import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Todo.sass'

function Todo ({ name, description, isCompleted, isLast }) {
  return (<>
    <li data-testid='todo' className='todo'>
      <div className='todo-content'>
        <h3 data-testid='name'>{name}</h3>
        <p data-testid='description'>{description}</p>
      </div>
      <div className="todo-controls">
        <input 
          data-testid='checkbox' 
          type='checkbox' 
          defaultChecked={isCompleted} 
        />
        <button data-testid='delete-button'>Delete</button>
      </div>
    </li>
    {isLast ? null : <hr/>}
    </>
  )
}

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default Todo