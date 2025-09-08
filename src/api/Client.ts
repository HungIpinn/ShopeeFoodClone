import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.shopeefood.fake/v1', // TODO: thay bằng API thật
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor request
axiosClient.interceptors.request.use(
  async config => {
    // nếu có token trong redux hoặc asyncstorage thì thêm vào header
    // ví dụ: config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

// Interceptor response
axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    console.log('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosClient;
