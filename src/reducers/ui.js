const initialState = {
  isTodoFormVisible: false
}
export default (state = initialState, action) => {
  switch(action.type){
    case 'SHOW_TODO_FORM':
      return { ...state, isTodoFormVisible: action.payload }
    default:
      return state
  }
}