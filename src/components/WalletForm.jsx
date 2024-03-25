import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchExpenses } from '../redux/actions';
import '../WalletStyle.css';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentaçao',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  addExpenses = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchExpenses({ ...this.state }));
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    }
    ));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div className="wallet-form">
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              id="value"
              name="value"
              data-testid="value-input"
              type="number"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição da Despesa:
            <input
              data-testid="description-input"
              id="description"
              name="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda:
            <select
              data-testid="currency-input"
              id="currency"
              name="currency"
              type="text"
              value={ currency }
              onChange={ this.handleChange }
            >

              {
                currencies?.map((currencie, index) => (
                  <option key={ index } value={ currencie }>
                    { currencie }
                  </option>))
              }
            </select>
          </label>
          <label htmlFor="method-input">
            Método de Pagamento:
            <select
              data-testid="method-input"
              name="method"
              id="method"
              type="text"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Tag:
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              type="text"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.addExpenses }

          >
            Adicionar despesa

          </button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
