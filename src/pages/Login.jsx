import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisable: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateForm);
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    dispatch(validEmail(email));
  };

  validateForm = () => {
    const { email, password } = this.state;
    const numberPassword = 6;
    const emailR = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidator = password.length >= numberPassword;
    const validation = emailR && passwordValidator;
    this.setState({
      isDisable: !validation,
    });
  };

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password">
            <input
              data-testid="password-input"
              placeholder="Senha"
              id="password"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            name="button"
            disabled={ isDisable }
            onClick={ this.handleClick }

          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,

};

export default connect()(Login);
