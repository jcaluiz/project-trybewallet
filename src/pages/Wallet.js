import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { getCurrencyAPIThunk } from '../redux/actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  render() {
    const { email, totalExpense } = this.props;
    return (
      <>
        <Header />
        <p data-testid="email-field">{email}</p>

        <p data-testid="total-field">
          {totalExpense === 0 ? Number(totalExpense)
            .toFixed(2) : totalExpense}
        </p>

        <p data-testid="header-currency-field">BRL</p>

        <WalletForm />

        <Table />
      </>
    );
  }
}

Wallet.propTypes = ({
  email: PropTypes.string.isRequired,
  currency: PropTypes.func.isRequired,
  totalExpense: PropTypes.number,
});

Wallet.defaultProps = {
  totalExpense: '',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(getCurrencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
