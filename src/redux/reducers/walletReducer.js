// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSES, GET_CURRENCIES, GET_EXPENSES } from '../actions/index';

const INNITIAL_STATE_WALLET = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};
const walletReducer = (state = INNITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_CURRENCIES: return {
    ...state,
    currencies: action.currencies,
  };
  case GET_EXPENSES: return {
    ...state,
    expenses: [...state.expenses, ...action.payload.expenses],
  };
  case DELETE_EXPENSES: return {
    ...state,
    expenses: [...action.payload],
  };
  default: return state;
  }
};

export default walletReducer;
