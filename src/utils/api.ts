import axios from 'axios';
export const API = axios.create({
  baseURL: 'http://10.0.2.2:5000/api',
  timeout: 15000,
});