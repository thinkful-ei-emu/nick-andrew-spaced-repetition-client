import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  }

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='login-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div>
          <Label htmlFor='login-username-input'>
            Username
          </Label>
          <Input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='login-password-input'>
            Password
          </Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <Button type='submit'>
          Login
        </Button>
        {/* <span>Don't have an account? <Link to='/register'>Register here!</Link></span> */}
      </form>
    );
  }
}

export default LoginForm;
