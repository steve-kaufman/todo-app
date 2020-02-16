import React from 'react'
import PropTypes from 'prop-types'

export default function Todo ({ name }) {
  return (
    <div data-testid='todo'>
      <h3 data-testid='name'>{ name }</h3>
    </div>
  )
}

Todo.propTypes = {
  name: PropTypes.string
}