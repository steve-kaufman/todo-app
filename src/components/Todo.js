import React from 'react'
import PropTypes from 'prop-types'

export default function Todo ({ name, description }) {
  return (
    <div data-testid='todo'>
      <h3 data-testid='name'>{ name }</h3>
      <p data-testid='description'>{ description }</p>
    </div>
  )
}

Todo.propTypes = {
  name: PropTypes.string
}