const API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyAPI = () => (
  fetch(API).then((response) => response.json())
    .then((data) => data)
);

export default getCurrencyAPI;
