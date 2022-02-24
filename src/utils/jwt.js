import axios from './axios';

export const verify = (token) => {

    const [encodedHeader, encodedPayload, signature] = token.split('.');
    const payload = JSON.parse(atob(encodedPayload));

    let date = new Date().toUTCString();
    date = new Date(date).getTime();
    const now = Math.floor(date / 1000);

    if (payload.exp < now) {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }

    return payload;
};