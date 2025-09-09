import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com1', // TODO: thay bằng API thật
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor request
const setInterceptor = (instance: any) => {
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      // Nếu có token thì thêm vào
      // config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      console.log('API Error:', error.response?.data || error.message);
      return Promise.reject(error);
    },
  );
};

setInterceptor(axiosClient);

export { axiosClient };
