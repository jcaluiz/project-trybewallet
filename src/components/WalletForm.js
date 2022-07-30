import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotalExpense, expensesAc as expensesActionProp,
  getCurrencyAPIThunk } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      expenses: [],
      exchangeRates: [],
      total: [0],
      exchange: 0,
      exchangeValueHability: false,
      multiplicationWithExchange: false,
      sumTotalHability: false,
      totalExpenseCalculator: 0,
      totalHability: false,
    };
  }

  componentDidUpdate() {
    const {
      exchangeValueHability, multiplicationWithExchange,
      sumTotalHability, totalHability, expenses } = this.state;
    const { expensesAction, getCurrencyAPIThunkReq } = this.props;
    if (exchangeValueHability === true) {
      this.getExchangeValue();
      getCurrencyAPIThunkReq();
    }
    if (multiplicationWithExchange === true) {
      this.getMultiplicationWithExchange();
    }
    if (sumTotalHability === true) {
      this.getExpenseTotal();
    }
    if (totalHability === true) {
      this.handleGetPropsTotal();
      expensesAction(expenses);
    }
  }

  getExchangeValue = () => {
    const { expenses } = this.state;
    expenses.filter((expense) => this.setState({ exchange: Object
      .values(expense.exchangeRates)
      .find((exchange) => expense.currency === exchange.code).ask }));
    this.setState({ exchangeValueHability: false, multiplicationWithExchange: true });
  }

  getMultiplicationWithExchange = () => {
    const { expenses, exchange } = this.state;
    const totalCalculo = expenses
      .map((expense) => expense.value * parseFloat(exchange));
    console.log(exchange);
    console.log(totalCalculo);
    this.setState((prevState) => ({
      multiplicationWithExchange: false,
      total: [...prevState.total, totalCalculo[totalCalculo.length - 1]],
      sumTotalHability: true,
    }));
  }

  getExpenseTotal = () => {
    const { total } = this.state;
    console.log(total);
    const calculo = total.reduce((acc, curr) => acc + Number(curr), 0);
    this.setState({ totalExpenseCalculator: Number(calculo.toFixed(2)),
      sumTotalHability: false,
      totalHability: true });
  }

  handleGetPropsTotal = () => {
    const { totalExpenseCalculator } = this.state;
    const { totalExpense } = this.props;
    totalExpense(totalExpenseCalculator);
    this.setState({ totalHability: false });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { value, description, currency, method, tag, id } = this.state;

    const { exchangeRatesAction } = this.props;
    this.setState((prevState) => ({
      expenses: [...prevState.expenses, {
        id,
        value,
        currency,
        method,
        tag,
        description,
        exchangeRates: exchangeRatesAction,
      }],
      id: prevState.id + 1,
      value: '',
      description: '',
    }));
    this.setState({ exchangeValueHability: true });
  }

  render() {
    const { currencyList } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;
    console.log(exchangeRates);
    console.log(this.state);
    console.log(currencyList);

    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          {' '}
          <input
            name="value"
            type="number"
            data-testid="value-input"
            id="value-input"
            value={ value }
            onChange={ (event) => this.handleChange(event) }
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
            onChange={ (event) => this.handleChange(event) }
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
            onChange={ (event) => this.handleChange(event) }
          >
            {
              Object.keys(currencyList).filter((currencyL) => currencyL !== 'USDT')
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
            onChange={ (event) => this.handleChange(event) }
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
            onChange={ (event) => this.handleChange(event) }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

WalletForm.propTypes = ({
  currencyList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  exchangeRatesAction: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  totalExpense: PropTypes.func.isRequired,
  getCurrencyAPIThunkReq: PropTypes.func.isRequired,
  expensesAction: PropTypes.func.isRequired,
});

WalletForm.defaultProps = ({
  currencyList: {},
});

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  exchangeRatesAction: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  totalExpense: (total) => dispatch(getTotalExpense(total)),
  expensesAction: (state) => dispatch(expensesActionProp(state)),
  getCurrencyAPIThunkReq: () => dispatch(getCurrencyAPIThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
