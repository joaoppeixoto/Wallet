import { combineReducers } from 'redux';
import userReducer from './userReducer';
import walletReducer from './walletReducer';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,

});
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
export default rootReducer;
