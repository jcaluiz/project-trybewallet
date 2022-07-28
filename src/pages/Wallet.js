import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    console.log(email);
    return (
      <>
        <Header />
        <p data-testid="email-field">{email}</p>

        <p data-testid="total-field">0</p>

        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
