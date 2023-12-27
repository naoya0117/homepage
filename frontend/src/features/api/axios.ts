import axios from 'axios';

const headers = {
  "Content-type": "Application/json",
  "Accept": "application/json",
  "X-Requested-With": "XMLHttpRequest"
};

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  withXSRFToken: true,
  headers: headers,
});

export default instance;