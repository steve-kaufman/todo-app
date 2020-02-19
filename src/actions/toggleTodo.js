export default id => dispatch => {
  return dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}