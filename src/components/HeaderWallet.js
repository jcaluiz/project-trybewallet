import React from 'react';
import PropTypes from 'prop-types';

export default class HeaderWallet extends React.Component {
  render() {
    const { value, description, currency, currencyList, method,
      tag, editHability, habilityFromBtn, handleChange,
      handleClick } = this.props;
    return (
      <form className="header-forms-wallet">
        {' '}
        <label htmlFor="value-input">
          Valor:
          {' '}
          <input
            name="value"
            type="number"
            data-testid="value-input"
            id="value-input"
            value={ value }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <textarea
            name="description"
            data-testid="description-input"
            id="description-input"
            value={ description }
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          {' '}
          <select
            name="currency"
            data-testid="currency-input"
            id="currency-input"
            value={ currency }
            onChange={ (event) => handleChange(event) }
          >
            {
              currencyList
                .map((currencyL, index) => (
                  <option key={ index }>{currencyL}</option>
                ))
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          {' '}
          <select
            name="method"
            data-testid="method-input"
            id="method-input"
            value={ method }
            onChange={ (event) => handleChange(event) }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          {' '}
          <select
            name="tag"
            data-testid="tag-input"
            id="tag-input"
            value={ tag }
            onChange={ (event) => handleChange(event) }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        {
          (editHability && !habilityFromBtn) || (!editHability && habilityFromBtn) ? (
            <button
              type="button"
              onClick={ handleClick }
            >
              Editar despesa
            </button>
          ) : (
            <button
              type="button"
              onClick={ handleClick }
            >
              Adicionar despesa
            </button>
          )
        }
      </form>
    );
  }
}

HeaderWallet.propTypes = ({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  editHability: PropTypes.bool.isRequired,
  habilityFromBtn: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
});
