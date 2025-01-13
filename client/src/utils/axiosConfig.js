import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/api', // Update this if the server runs on a different port
});

export default axiosInstance;
