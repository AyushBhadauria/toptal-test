import axios, { AxiosInstance } from 'axios';
import { getLocalData } from 'src/helpers/storage';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const user = getLocalData('user');
  const token = user && user.token
  if (token) {
    config.headers!.Authorization = token;
  }
  return config;
})

export default api;