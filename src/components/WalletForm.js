import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currencyList } = this.props;
    console.log(currencyList);
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          {' '}
          <input type="number" data-testid="value-input" id="value-input" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          {' '}
          <textarea data-testid="description-input" id="description-input" />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          {' '}
          <select data-testid="currency-input" id="currency-input">
            {
              currencyList
                .map((currency, index) => <option key={ index }>{currency}</option>)
            }
          </select>
        </label>

        <label htmlFor="method-input">
          Método de Pagamento:
          {' '}
          <select data-testid="method-input" id="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          {' '}
          <select data-testid="tag-input" id="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = ({
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
