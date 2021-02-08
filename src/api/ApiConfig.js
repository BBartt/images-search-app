import axios from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_API_KEY = process.env.REACT_APP_ACCESS_API_KEY;

const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${ACCESS_API_KEY}`;
  return config;
});

export default API;
