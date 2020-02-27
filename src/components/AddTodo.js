import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import plusCircle from '@iconify/icons-mdi/plus-circle'

import '../styles/components/AddTodo.sass'

function AddTodo ({ addTodo }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submit = event => {
    event.preventDefault()
    console.log(name, description)
    addTodo(name, description)
  }
  return (
    <div id='add-todo'>
      <form onSubmit={ submit } data-testid='add-todo-form'>
        <div className='input-group'>
          <label htmlFor='name-input'>Name</label>
          <input id='name-input' onChange={event => {
            setName(event.target.value)
          }} />
        </div>
        <div className='input-group'>
          <label htmlFor='description-input'>Description</label>
          <input id='description-input' onChange={event => {
            setDescription(event.target.value)
          }} />
        </div>
        <input type='submit' style={{ display: 'none' }} />
      </form>
      <button onClick={ submit } data-testid='add-button'>
        <Icon icon={plusCircle}/>
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo