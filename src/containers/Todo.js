import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo, deleteTodo } from '../actions'

const mapDispatchToProps = dispatch => ({
  toggleTodo: (...args) => dispatch(toggleTodo(...args)),
  deleteTodo: (...args) => dispatch(deleteTodo(...args))
})

export default connect(null, mapDispatchToProps)(Todo)