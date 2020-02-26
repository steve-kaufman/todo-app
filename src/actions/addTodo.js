let nextTodoId = 0

export default (name, description) => dispatch => {
  dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name,
    description
  })
}