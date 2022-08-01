import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expensesAc as expensesActionProp, handleBtnDelete } from '../redux/actions';

class Table extends Component {
  state = {
    habilityReloadExpense: false,
  }

  componentDidUpdate() {
    const { editExpenseHability } = this.props;
    const { habilityReloadExpense } = this.state;
    editExpenseHability(habilityReloadExpense);
  }

  handleListExpense = (expense) => {
    const { gastos, expenses, editExpenseHability } = this.props;

    const numberOfDeleteTotalArray = gastos.map((gasto) => (Object
      .values(gasto.exchangeRates)
      .filter((exchange) => expense.currency === exchange.code
        && exchange.codein !== 'BRLT')
      .map((e) => Number(e.ask)) * Number(expense.value)).toFixed(2))[0];
    console.log(numberOfDeleteTotalArray);
    editExpenseHability(null, numberOfDeleteTotalArray);
    expenses(gastos.filter((gasto) => gasto !== expense));
    this.setState({ habilityReloadExpense: true });
    this.setState({ habilityReloadExpense: false });
  }

  render() {
    const { gastos } = this.props;
    console.log(gastos.map((gasto) => gasto.value));
    return (
      <table>
        <thead>

          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>

        {gastos.map((gasto) => (
          <tbody key={ gasto.id }>

            <tr>
              <td>{gasto.description}</td>
              <td>{gasto.tag}</td>
              <td>{gasto.method}</td>
              <td>{Number(gasto.value).toFixed(2)}</td>
              <td>
                {Object.values(gasto.exchangeRates)
                  .filter((exchange) => gasto.currency === exchange.code
      && exchange.codein !== 'BRLT').map((e) => e.name)}
              </td>
              <td>
                {Object.values(gasto.exchangeRates)
                  .filter((exchange) => gasto.currency === exchange.code
      && exchange.codein !== 'BRLT').map((e) => parseFloat(e.ask).toFixed(2))}
              </td>
              <td>
                {(Object.values(gasto.exchangeRates)
                  .filter((exchange) => gasto.currency === exchange.code
      && exchange.codein !== 'BRLT')
                  .map((e) => Number(e.ask)) * Number(gasto.value)).toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleListExpense(gasto) }
                >
                  Excluir
                </button>

              </td>
            </tr>

          </tbody>
        ))}

      </table>
    );
  }
}

Table.propTypes = ({
  gastos: PropTypes.arrayOf(Object).isRequired,
  editExpenseHability: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
});

const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (param) => dispatch(expensesActionProp(param)),
  editExpenseHability: (param1, param2) => dispatch(handleBtnDelete(param1, param2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
