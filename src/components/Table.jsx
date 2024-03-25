import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExp } from '../redux/actions';

class Table extends Component {
  deleteButton = (id) => {
    const { expenses, dispatch } = this.props;
    console.log('deu bom');
    const removeExpense = expenses.filter((exp) => exp.id !== id);
    dispatch(deleteExp(removeExpense));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((item) => (
              <tr key={ item.id }>
                <td>{ item.description}</td>
                <td>{item.tag}</td>
                <td>{parseFloat(item.value).toFixed(2)}</td>
                <td>{ item.method}</td>
                <td>{ (item.exchangeRates[item.currency].name) }</td>
                <td>{ parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
                <td>
                  {`R$ ${(item.value * item.exchangeRates[item.currency].ask)
                    .toFixed(2)}`}
                </td>
                <td>Editar/Excluir</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => this.deleteButton(item.id) }
                  >
                    Deletar
                  </button>
                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => this.deleteButton(item.id) }
                  >
                    Editar
                  </button>
                </td>
              </tr>

            ))
          }
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf() }.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
