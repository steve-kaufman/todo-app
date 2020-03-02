import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import checkBold from '@iconify/icons-mdi/check-bold'
import removeIcon from '@iconify/icons-el/remove'

import '../styles/components/TodoForm.sass'

function TodoForm ({ addTodo, showTodoForm, isVisible }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const cancel = () => {
    setName('')
    setDescription('')
    showTodoForm(false)
  }

  const save = event => {
    if (event) event.preventDefault()
    addTodo(name, description)
    setName('')
    setDescription('')
    showTodoForm(false)
  }

  const style = {
    display: isVisible ? 'block' : 'none'
  }

  return (
    <div id='todo-form' style={style}>
      <hr/>
      <form onSubmit={save} data-testid='todo-form-form'>
        <div className='input-group'>
          <label htmlFor='name-input'>Name</label>
          <input 
            id='name-input' 
            name='name'
            value={name} 
            autoComplete='off'
            onChange={event => {
              setName(event.target.value)
            }} 
          />
        </div>
        <div className='input-group'>
          <label htmlFor='description-input'>Description</label>
          <input 
            id='description-input' 
            name='description'
            value={description} 
            autoComplete='off'
            onChange={event => {
              setDescription(event.target.value)
            }} 
          />
        </div>
        <input type='submit' style={{ display: 'none' }} />
      </form>
      <div id='todo-form-buttons'>
        <button 
          onClick={cancel} 
          data-testid='cancel-button'
          className='cancel-button'
        >
          <Icon icon={removeIcon} />
        </button>
        <button 
          onClick={save} 
          data-testid='save-button'
          className='save-button'
        >
          <Icon icon={checkBold} />
        </button>
      </div>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showTodoForm: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired
}

export default TodoForm