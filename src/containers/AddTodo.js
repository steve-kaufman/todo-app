import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import addTodo from '../actions/addTodo'

const mapDispatchToProps = dispatch => ({
  addTodo: (...args) => dispatch(addTodo(...args))
})

export default connect(null, mapDispatchToProps)(AddTodo)