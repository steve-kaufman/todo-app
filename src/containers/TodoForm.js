import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { addTodo, showTodoForm } from '../actions'

const mapStateToProps = state => {
  return ({
    isVisible: state.ui.isTodoFormVisible
  })
}

const mapDispatchToProps = dispatch => ({
  addTodo: (...args) => dispatch(addTodo(...args)),
  showTodoForm: (...args) => dispatch(showTodoForm(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)