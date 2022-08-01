import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
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
              <td><button type="button" data-testid="delete-btn">Excluir</button></td>
            </tr>

          </tbody>
        ))}

      </table>
    );
  }
}

Table.propTypes = ({
  gastos: PropTypes.arrayOf(Object).isRequired,
});

const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
