import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Todo.sass'

function Todo ({ name, description, isCompleted }) {
  return (
    <div data-testid='todo' className='todo'>
      <h3 data-testid='name'>{ name }</h3>
      <p data-testid='description'>{ description }</p>
      <input 
        data-testid='checkbox' 
        type='checkbox' 
        defaultChecked={isCompleted} 
      />
      <button data-testid='delete-button'>Delete</button>
    </div>
  )
}

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired
}

export default Todo