import axios from "axios";

const baseUrl = 'http://api-test.bhut.com.br:3000/api/cars'

const api = axios.create({
    baseURL: baseUrl
})

export default api;