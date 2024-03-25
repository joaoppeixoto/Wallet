// Coloque aqui suas actions

const URL_API = 'https://economia.awesomeapi.com.br/json/all';
export const VALID_EMAIL = 'VALID_EMAIL';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const failedRequest = (error) => ({ type: FAILED_REQUEST, error });

export const validEmail = (email) => ({ type: VALID_EMAIL, payload: { email } });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES,
  currencies });

export const getExpenses = (expenses) => ({ type: GET_EXPENSES,
  payload: { expenses } });

export const deleteExpenses = (expenses) => ({ type: DELETE_EXPENSES,
  payload: { expenses } });

export function fetchCurrencies() {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      const currencies = Object.keys(data).filter((object) => object !== 'USDT');
      dispatch(getCurrencies(currencies));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

export const fetchExpenses = (expenses) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const expenseKey = [{
      ...expenses,
      exchangeRates: data,
    }];
    console.log(expenses);
    dispatch(getExpenses(expenseKey));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};

export const deleteExp = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
