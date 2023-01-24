import { VALID_EMAIL } from '../actions/actionTypes';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INNITIAL_STATE = {
  email: '',

};
const userReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default: return state;
  }
};
export default userReducer;
