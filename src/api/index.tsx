import axios from 'axios';

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: 'https://caf43921d9e078d4.mokky.dev'
});