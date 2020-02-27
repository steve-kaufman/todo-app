import React from 'react'
import { Icon } from '@iconify/react'
import trashCan from '@iconify/icons-mdi/trash-can'
import PropTypes from 'prop-types'
import '../styles/components/Todo.sass'

function Todo (props) {
  const { 
    id,
    name, 
    description, 
    isCompleted, 
    isLast, 
    toggleTodo, 
    deleteTodo 
  } = props
  return (<>
    <li data-testid='todo' className='todo'>
      <div className='left-float'>
        <label className='checkbox-label'>
          <input
            data-testid='checkbox'
            type='checkbox'
            onClick={() => toggleTodo(id)}
            defaultChecked={isCompleted}
          />
          <span className="fancy-checkbox"></span>
        </label>  
        <div className='todo-text'>
          <h3 data-testid='name'>{name}</h3>
          <p data-testid='description'>{description}</p>
        </div>
      </div>
      <button data-testid='delete-button' onClick={() => deleteTodo(id)}>
        <Icon icon={trashCan}/>
      </button>
    </li>
    {isLast ? null : <hr/>}
    </>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo