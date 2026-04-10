import axios from 'axios';

const API = axios.create({
  baseURL: 'https://app-gastos-mtgv.onrender.com/api'
});

// 🔐 INTERCEPTOR PARA TOKEN
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;