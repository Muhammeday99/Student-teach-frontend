import axios from 'axios';

const axiosInt = axios.create({
    baseURL: process.env.REACT_APP_AUTH_DOMAIN,
    headers: { 'Content-Type': 'application/json' }
});

export default axiosInt;