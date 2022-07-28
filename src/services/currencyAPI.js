const API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyAPI = () => (
  fetch(API).then((response) => response.json())
    .then((data) => Object.keys(data)
      .filter((currency) => currency !== 'USDT'))
);

export default getCurrencyAPI;
