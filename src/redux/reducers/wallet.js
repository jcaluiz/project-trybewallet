// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCY_TYPE_ACTION,
  EXPENSES_TYPE,
  TOTAL_EXPENSE_TYPE, EDIT_EXPENSE_ARRAY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  exchange: {},
  errorExchange: '',
  total: 0,
  expenses: [],
  currenciesDetails: [],
  editArrayExpenses: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_TYPE_ACTION:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currencyL) => currencyL !== 'USDT'),
      currenciesDetails: action.payload,
    };
  case EXPENSES_TYPE:
    return {
      ...state,
      expenses: action.expenses,
    };
  case TOTAL_EXPENSE_TYPE:
    return {
      ...state,
      total: action.total,
    };
  case EDIT_EXPENSE_ARRAY:
    return {
      ...state,
      editArrayExpenses: action.editExpensesArray,
      editTotal: action.total,
    };
  default:
    return state;
  }
};

export default wallet;
