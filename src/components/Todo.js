import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Todo.sass'

export default function Todo ({ name, description }) {
  return (
    <div data-testid='todo' className='todo'>
      <h3 data-testid='name'>{ name }</h3>
      <p data-testid='description'>{ description }</p>
      <input data-testid='checkbox' type='checkbox'></input>
      <button data-testid='delete-button'>Delete</button>
    </div>
  )
}

Todo.propTypes = {
  name: PropTypes.string
}