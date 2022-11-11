import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from './jwt';
const token = localStorage.getItem('accessToken');
// const tokenLocal = JSON.stringify(token)

const request = axios.create({
    baseURL: 'https://med-service-demo.herokuapp.com/api',
});

request.interceptors.request.use(
    function (config = AxiosRequestConfig) {
        if (getToken() || token) {
            config.headers.Authorization = `Bearer ${getToken() || token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

export const get = async (path, option = {}) => {
    const responese = await request.get(path, option);
    return responese.data;
};

export const post = async (path, option = {}) => {
    const responese = await request.post(path, option);
    return responese;
};

export default request;
