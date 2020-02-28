import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { showTodoForm } from '../actions'

const mapStateToProps = state => ({
  visible: !state.ui.isTodoFormVisible
})
const mapDispatchToProps = dispatch => ({
  showTodoForm: (...args) => dispatch(showTodoForm(...args))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddButton)