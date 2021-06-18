import axios from 'axios';
import router from '../routes/index';
import { BASE_URL } from './config';

const $http = axios.create({
    baseURL: BASE_URL,
});

$http.interceptors.request.use(
    config=> {
        // Do something before request is sent
        // config.withCredentials = true;
        return config;
    },
    error=> {
        // Do something with request error
        Promise.reject(error);
    },
);

$http.interceptors.response.use(
    response => {
        if (response.data.msg && response.data.msg.code === '401') {
            location.replace('/');
            return;
        }
        return response;
    },
    error => {
        if (error.response.status === 401) {
            location.replace('/');
            return;
        }
    },
);

export default $http;
