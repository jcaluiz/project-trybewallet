import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotalExpense, expensesAc as expensesActionProp,
  getCurrencyAPIThunk, habilityEditToRedux } from '../redux/actions';
import HeaderWallet from './HeaderWallet';

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
      habilityEditChangeState: false,
      habilityFromBtn: false,
    };
  }

  componentDidUpdate() {
    const {
      exchangeValueHability, multiplicationWithExchange, habilityFromBtn, total,
      sumTotalHability, totalHability, expenses, habilityEditChangeState } = this.state;
    const { expensesAction, getCurrencyAPIThunkReq,
      editExpenseHability, editTotal, gastoRedux, editHability,
      numberForLess, totalOfRedux, totalExpense } = this.props;
    console.log(totalOfRedux);
    if (editTotal !== undefined) {
      this.handleEditTotalState(total.filter((e) => e !== Number(editTotal)));
    }
    if (editExpenseHability === true) { this.handleDeleteExpense(); }
    if (exchangeValueHability === true) {
      this.getExchangeValue();
      getCurrencyAPIThunkReq();
    }
    if (multiplicationWithExchange === true) { this.getMultiplicationWithExchange(); }
    if (sumTotalHability === true) { this.getExpenseTotal(); }
    if (totalHability === true) {
      this.handleGetPropsTotal();
      expensesAction(expenses);
    }
    if (editHability && !habilityFromBtn && !habilityEditChangeState) {
      this.handleInputEditExpense(gastoRedux);
      expensesAction(expenses.filter((expense) => expense.id !== gastoRedux.id));
      totalExpense((totalOfRedux - numberForLess).toFixed(2));
      this.calculateTotal(numberForLess);
    }
  }

  calculateTotal = (valueProperty) => {
    const { total } = this.state;
    this.setState({ total: total.filter((e) => e !== Number(valueProperty)) });
  }

  habilityEditChange = () => {
    const { editHability } = this.props;
    return (editHability) && this.setState((prevState) => ({
      habilityEditChangeState: !prevState.habilityEditChangeState }));
  }

  handleInputEditExpense = (param) => {
    const { total } = this.state;
    this.setState((prevState) => ({
      id: param.id,
      value: param.value,
      currency: param.currency,
      method: param.method,
      tag: param.tag,
      description: param.description,
      exchangeRates: param.exchangeRates,
      habilityEditChangeState: !prevState.habilityEditChangeState,
      total: total.filter((_number, index) => index !== param.id),
    }));
  }

  handleEditTotalState = (valueProperty) => {
    const { totalExpense } = this.props;
    this.setState({ total: valueProperty });
    const calculo = valueProperty.reduce((acc, curr) => acc + Number(curr), 0);
    totalExpense(Number(calculo.toFixed(2)));
    this.setState({ totalExpenseCalculator: Number(calculo.toFixed(2)) });
  }

  handleDeleteExpense = () => {
    const { expensesStateRedux } = this.props;
    this.setState({ expenses: expensesStateRedux });
  }

  getExchangeValue = () => {
    const { expenses } = this.state;
    expenses.filter((expense) => this.setState({ exchange: Object
      .values(expenses[0].exchangeRates)
      .find((exchange) => expense.currency === exchange.code).ask }));
    this.setState({ exchangeValueHability: false, multiplicationWithExchange: true });
  }

  getMultiplicationWithExchange = () => {
    const { expenses, exchange } = this.state;
    const totalCalculo = expenses.map((expense) => expense.value * parseFloat(exchange));
    this.setState((prevState) => ({ multiplicationWithExchange: false,
      total: [...prevState.total, Number((totalCalculo[totalCalculo.length - 1])
        .toFixed(2))],
      sumTotalHability: true,
    }));
  }

  getExpenseTotal = () => {
    const { total } = this.state;
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
    const { habilityEditFromRedux, editHability } = this.props;
    this.setState({ [name]: value });
    return (editHability === true) && habilityEditFromRedux(editHability, name, value);
  }

  handleClick = () => {
    const { value, description, currency, method, tag, id } = this.state;
    this.handleDeleteExpense();
    const { exchangeRatesAction, editHability } = this.props;
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
      description: '' }));
    this.setState({ exchangeValueHability: true });
    return editHability ? (this.setState(({ habilityFromBtn: true }))) : (
      this.setState(({ habilityFromBtn: false }))
    );
  }

  render() {
    const { currencyList, editHability } = this.props;
    const {
      value, description, currency, method, tag, exchangeRates, habilityFromBtn,
    } = this.state;
    console.log(exchangeRates);
    return (
      <HeaderWallet
        value={ value }
        description={ description }
        currency={ currency }
        currencyList={ currencyList }
        method={ method }
        tag={ tag }
        editHability={ editHability }
        habilityFromBtn={ habilityFromBtn }
        handleChange={ this.handleChange }
        handleClick={ this.handleClick }
      />
    );
  }
}

WalletForm.propTypes = ({
  currencyList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  exchangeRatesAction: PropTypes.oneOfType([PropTypes.object, PropTypes.array,
  ]).isRequired,
  totalExpense: PropTypes.func.isRequired,
  getCurrencyAPIThunkReq: PropTypes.func.isRequired,
  expensesAction: PropTypes.func.isRequired,
  expensesStateRedux: PropTypes.arrayOf(PropTypes.object).isRequired,
  editTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  editExpenseHability: PropTypes.bool,
  gastoRedux: PropTypes.objectOf(Array).isRequired,
  editHability: PropTypes.bool.isRequired,
  numberForLess: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  totalOfRedux: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  habilityEditFromRedux: PropTypes.func.isRequired,
});

WalletForm.defaultProps = ({
  currencyList: {}, editTotal: undefined, editExpenseHability: false,
});

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  exchangeRatesAction: state.wallet.currenciesDetails,
  expensesStateRedux: state.wallet.expenses,
  editExpenseHability: state.wallet.editArrayExpenses,
  editTotal: state.wallet.editTotal,
  editHability: state.wallet.editHability,
  gastoRedux: state.wallet.gasto,
  numberForLess: state.wallet.numberLess,
  totalOfRedux: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  totalExpense: (total) => dispatch(getTotalExpense(total)),
  expensesAction: (state) => dispatch(expensesActionProp(state)),
  getCurrencyAPIThunkReq: () => dispatch(getCurrencyAPIThunk()),
  habilityEditFromRedux: (editHability, name, value) => (
    dispatch(habilityEditToRedux(editHability, name, value))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
