import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  updateExpense = () => {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((item) => {
      sum += Number(item.value) * Number(item.exchangeRates[item.currency].ask);
    });
    return sum.toFixed(2);
  };

  render() {
    const { email } = this.props;

    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          {`Email: ${email}`}
        </p>
        <p
          data-testid="total-field"
        >
          <p>{`${this.updateExpense().replace('.', '.')}`}</p>

        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = ({
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);
