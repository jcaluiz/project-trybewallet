import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <>
        <p data-testid="email-field">{email}</p>

        <p data-testid="total-field">
          {totalExpense === 0 ? Number(totalExpense)
            .toFixed(2) : totalExpense}
        </p>

        <p data-testid="header-currency-field">BRL</p>
      </>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

Header.defaultProps = {
  totalExpense: '',
};
