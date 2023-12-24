import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  baseURL: 'http://localhost:8000',
  timeout: 1000,
});
export default instance;
