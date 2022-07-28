// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const loginAction = (email, password) => ({ type: LOGIN, email, password });
