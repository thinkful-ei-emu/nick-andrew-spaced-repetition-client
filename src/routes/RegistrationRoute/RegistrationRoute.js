import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='registration-container'>
        <p>
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <fieldset className='registration-fieldset'>
        <legend>
        <h2>Sign up</h2>
          </legend>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        </fieldset>

      </section >
    );
  }
}

export default RegistrationRoute
