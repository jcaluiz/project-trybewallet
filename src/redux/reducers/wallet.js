// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCY_TYPE_ACTION,
  EXPENSES_TYPE,
  TOTAL_EXPENSE_TYPE, EDIT_EXPENSE_ARRAY, HABILITY_EDIT_TO_REDUX,
  CLICK_GET_EXPENSE_TYPE, TYPE_NUMBERLESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  exchange: {},
  errorExchange: '',
  total: 0,
  expenses: [],
  currenciesDetails: [],
  editArrayExpenses: false,
  name: '',
  value: '',
  editHability: false,
  gasto: {},
  numberLess: 0,
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
  case HABILITY_EDIT_TO_REDUX:
    return {
      ...state,
      editHability: action.editHability,
      name: action.name,
      value: action.value,
    };
  case CLICK_GET_EXPENSE_TYPE:
    return {
      ...state,
      gasto: action.gasto,
    };
  case TYPE_NUMBERLESS:
    return {
      ...state,
      numberLess: action.numberLess,
    };
  default:
    return state;
  }
};

export default wallet;
