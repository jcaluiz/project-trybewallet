import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    emailHabilityButton: false,
    passwordHabilityButton: false,
  }

  habilityButton = (event) => {
    const { target: { name, value } } = event;
    event.preventDefault();
    const valueLengthHability = 6;

    console.log(name);
    if (name === 'email' && value.includes('@') && value.includes('.com')) {
      this.setState({ emailHabilityButton: true });
    }
    if (name === 'password' && value.length >= valueLengthHability) {
      this.setState({ passwordHabilityButton: true });
    }
    if (name === 'email' && !(value.includes('@') && value.includes('.com'))) {
      this.setState({ emailHabilityButton: false });
    }
    if (name === 'password' && value.length < valueLengthHability) {
      this.setState({ passwordHabilityButton: false });
    }
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { email, password } = this.state;
    const { LoginInformation, history } = this.props;

    LoginInformation(email, password);
    history.push('/carteira');
  }

  render() {
    const { emailHabilityButton, passwordHabilityButton } = this.state;
    console.log(this.state);
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          {' '}
          <input
            type="email"
            data-testid="email-input"
            id="email-input"
            name="email"
            onChange={ (event) => this.habilityButton(event) }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          {' '}
          <input
            type="password"
            data-testid="password-input"
            id="password-input"
            name="password"
            onChange={ (event) => this.habilityButton(event) }
          />
        </label>
        <button
          type="submit"
          disabled={ !(emailHabilityButton && passwordHabilityButton) }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </form>
    );
  }
}

Login.propTypes = ({
  LoginInformation: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  LoginInformation: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
