import { connect } from 'react-redux'
import { TodoList } from '../components'

const mapStateToProps = state => ({
  // only get todos that are not completed
  todos: state.todos.filter(todo => !todo.isCompleted)
})

export default connect(mapStateToProps)(TodoList)