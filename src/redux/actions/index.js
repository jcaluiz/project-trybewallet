// Coloque aqui suas actions
import getCurrencyAPI from '../../services/currencyAPI';

export const LOGIN = 'LOGIN';
export const CURRENCY_TYPE_ACTION = 'CURRENCY_TYPE_ACTION';
export const CURRENCY_TYPE_ACTION_ERROR = 'CURRENCY_TYPE_ACTION_ERROR';

export const loginAction = (email, password) => ({ type: LOGIN, email, password });

export const getCurrency = (payload) => ({
  type: CURRENCY_TYPE_ACTION,
  payload,
});

export const getCurrencyError = (error) => ({
  type: CURRENCY_TYPE_ACTION_ERROR,
  error,
});

export const getCurrencyAPIThunk = () => async (dispatch) => {
  try {
    const response = await getCurrencyAPI();
    dispatch(getCurrency(response));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
