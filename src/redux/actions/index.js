// Coloque aqui suas actions
import getCurrencyAPI from '../../services/currencyAPI';

export const LOGIN = 'LOGIN';
export const CURRENCY_TYPE_ACTION = 'CURRENCY_TYPE_ACTION';
export const CURRENCY_TYPE_ACTION_ERROR = 'CURRENCY_TYPE_ACTION_ERROR';
export const EXPENSES_TYPE = 'EXPENSES_TYPE';
export const EXCHANGE_TYPE_ACTION = 'EXCHANGE_TYPE_ACTION';
export const EXCHANGE_TYPE_ACTION_ERROR = 'EXCHANGE_TYPE_ACTION_ERROR';
export const TOTAL_EXPENSE_TYPE = 'TOTAL_EXPENSE_TYPE';
export const EDIT_EXPENSE_ARRAY = 'EDIT_EXPENSE_ARRAY';
export const HABILITY_EDIT_TO_REDUX = 'HABILITY_EDIT_TO_REDUX';
export const CLICK_GET_EXPENSE_TYPE = 'CLICK_GET_EXPENSE_TYPE';
export const TYPE_NUMBERLESS = 'TYPE_NUMBERLESS';

export const loginAction = (email, password) => ({ type: LOGIN, email, password });

export const getCurrency = (payload) => ({
  type: CURRENCY_TYPE_ACTION,
  payload,
});

export const getCurrencyError = (error) => ({
  type: CURRENCY_TYPE_ACTION_ERROR,
  error,
});

export const expensesAc = (expenses) => ({
  type: EXPENSES_TYPE,
  expenses,
});

export const getTotalExpense = (total) => ({
  type: TOTAL_EXPENSE_TYPE,
  total,
});

export const handleBtnDelete = (editExpensesArray, total) => ({
  type: EDIT_EXPENSE_ARRAY,
  editExpensesArray,
  total,
});

export const habilityEditToRedux = (editHability, name, value) => ({
  type: HABILITY_EDIT_TO_REDUX,
  editHability,
  name,
  value,
});

export const clickGetExpense = (gasto) => ({
  type: CLICK_GET_EXPENSE_TYPE,
  gasto,
});

export const totalLess = (numberLess) => ({
  type: TYPE_NUMBERLESS,
  numberLess,
});

export const getCurrencyAPIThunk = () => async (dispatch) => {
  try {
    const response = await getCurrencyAPI();
    dispatch(getCurrency(response));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
