import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
});

export default api;

