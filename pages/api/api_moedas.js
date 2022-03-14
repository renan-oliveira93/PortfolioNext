import axios from 'axios';

const apiMoedas = axios.create({
    baseURL: "http://economia.awesomeapi.com.br/json/all",
});

export default apiMoedas;