import axios from 'axios';
import { token as TOKEN, URL } from '../constants';


const configureAxiosInstances = url => {
    const axiosInstance = axios.create({
        baseURL: url,
    })
    axiosInstance.interceptors.request.use((config) => {
       // const token = localStorage.getItem(TOKEN);
       // config.headers.Authorization = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    })
    return axiosInstance;
};

const axiosInstance = configureAxiosInstances(URL);


export { axiosInstance };