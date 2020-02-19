export default id => dispatch => {
  dispatch({
    type: 'DELETE_TODO',
    id
  })
}