export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      )
    case 'DELETE_TODO':
      return [ ...state ].forEach((todo, index, array) => {
        if (todo.id === action.id) delete array[index]
      })
    default:
      return state
  }
}