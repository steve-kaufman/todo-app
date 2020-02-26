export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          isCompleted: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      )
    case 'DELETE_TODO':
      return [ ...state ].filter(todo => todo.id !== action.id)
    default:
      return state
  }
}