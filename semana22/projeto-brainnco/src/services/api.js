import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1'
});

export default api;