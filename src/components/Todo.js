import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import removeCircle from '@iconify/icons-el/remove-circle'
import PropTypes from 'prop-types'
import '../styles/components/Todo.sass'

const animationLength = 0.3

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

  const className = 'todo ' + (isCompleted ? 'completed' : '')

  const [isChecked, setChecked] = useState(isCompleted)

  const onCheck = e => {
    setChecked(!isChecked)
    toggleTodo(id)
    // setTimeout(() => toggleTodo(id), (1000 * animationLength))
  }

  return (<>
    <li data-testid='todo' className={className}>
      <div className='left-float'>
        <label className='checkbox-label'>
          <input
            data-testid='checkbox'
            type='checkbox'
            onChange={onCheck}
            checked={isChecked}
          />
          <span className="fancy-checkbox"></span>
        </label>  
        <div className='todo-text'>
          <h3 data-testid='name'>{name}</h3>
          <p data-testid='description'>{description}</p>
        </div>
      </div>
      <button data-testid='delete-button' onClick={() => deleteTodo(id)}>
        <Icon icon={removeCircle}/>
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