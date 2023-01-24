import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    // const totalSum = expenses.reduce((acc, curr) => (
    //   acc + parseFloat(curr.value) * parseFloat(curr.exchangeRates[curr.currency].ask)
    // ), 0);
    return (
      <div>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
        <p data-testid="total-field">
          {' '}
          Despesas totais:
          {' '}
          {`${0}`}

        </p>
        <p data-testid="header-currency-field">
          {' '}
          BRL
          {}
        </p>
      </div>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any),
}).isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);
