import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import plusCircle from '@iconify/icons-mdi/plus-circle'

import '../styles/components/AddButton.sass'

const AddButton = props => {
  const { visible, showTodoForm } = props

  const onClick = () => showTodoForm(true)

  return visible ? (
    <button id='add-button' data-testid='add-button' onClick={onClick}>
      <Icon icon={plusCircle} />
    </button>
  ) : null
}

AddButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  showTodoForm: PropTypes.func.isRequired
}

export default AddButton
