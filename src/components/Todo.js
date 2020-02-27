import React from 'react'
import { Icon } from '@iconify/react'
import trashCan from '@iconify/icons-mdi/trash-can'
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
        <label className='checkbox-label'>
          <input
            data-testid='checkbox'
            type='checkbox'
            defaultChecked={isCompleted}
          />
          <span className="fancy-checkbox"></span>
        </label>
        <button data-testid='delete-button'>
          <Icon icon={trashCan}/>
        </button>
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