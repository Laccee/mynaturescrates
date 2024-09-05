import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAboutInfo = () => apiClient.get('/about');
