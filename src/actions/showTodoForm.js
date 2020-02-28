export default isTodoFormVisible => dispatch => {
  dispatch({
    type: 'SHOW_TODO_FORM',
    payload: isTodoFormVisible
  })
}