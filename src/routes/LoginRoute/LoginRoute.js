import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginRoute.css'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='login-container'>
        <fieldset className='login-fieldset'>
          <legend>
            <h2>Login</h2>
          </legend>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </fieldset>
      </section>
    );
  }
}

export default LoginRoute
