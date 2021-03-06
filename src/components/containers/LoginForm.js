import { connect } from 'react-redux'
import { authActions, navigateTo } from '../../actions'
import { LoginForm } from '../presentation'

const mapStateToProps = (state) => ({
  pending: state.auth.pending,
  user: state.auth.user,
  error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(
    authActions.login(username, password)
  ),
  navigateToRegisterPage: (href) => dispatch(navigateTo('/register')),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)