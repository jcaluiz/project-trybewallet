// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCY_TYPE_ACTION, CURRENCY_TYPE_ACTION_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_TYPE_ACTION:
    return {
      ...state,
      currencies: action.payload,
    };
  case CURRENCY_TYPE_ACTION_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
