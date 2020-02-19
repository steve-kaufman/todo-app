let nextTodoId = 0

export default (title, description) => dispatch => {
  dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    description
  })
}