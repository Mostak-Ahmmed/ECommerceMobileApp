import axios from 'axios';

// Emulator-safe base URL (change if real device)
export const API = axios.create({
  baseURL: 'http://10.0.2.2:5000/api',
});
