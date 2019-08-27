import axios, { AxiosRequestConfig } from 'axios';

function axiosInstance(param: AxiosRequestConfig = {}) {
    return axios.create(param);
}

export default axiosInstance;
