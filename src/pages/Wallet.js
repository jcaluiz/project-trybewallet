import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencyAPIThunk } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <Header />
        <p data-testid="email-field">{email}</p>

        <p data-testid="total-field">0</p>

        <p data-testid="header-currency-field">BRL</p>

        <WalletForm />
      </>
    );
  }
}

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  currency: PropTypes.func.isRequired,
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(getCurrencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
