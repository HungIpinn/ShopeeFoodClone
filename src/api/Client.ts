import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';

const axiosClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setInterceptor = (instance: AxiosInstance) => {
  // ----------- REQUEST INTERCEPTOR -----------
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      try {
        // 👇 Ví dụ: lấy token từ localStorage/AsyncStorage
        // const token = await AsyncStorage.getItem('token');

        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        // Có thể thêm headers khác nếu cần
        //config.headers['X-Requested-With'] = 'XMLHttpRequest';

        return config; // ⚡ phải return config
      } catch (err) {
        console.error('Request Interceptor Error:', err);
        return Promise.reject(err);
      }
    },
    (error: AxiosError) => {
      console.error('Request Interceptor Failed:', error.message);
      return Promise.reject(error);
    },
  );

  // ----------- RESPONSE INTERCEPTOR -----------
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 👇 response thành công: có thể handle data chung
      // Ví dụ: unwrap data
      return response;
    },
    (error: AxiosError) => {
      // 👇 xử lý lỗi API
      if (error.response) {
        console.error('API Error Response:', {
          status: error.response.status,
          data: error.response.data,
        });

        // Ví dụ: nếu 401 thì logout
        if (error.response.status === 401) {
          console.warn('Unauthorized! Redirect to login.');
          // window.location.href = "/login"; // hoặc dispatch logout
        }
      } else {
        console.error('API Error:', error.message);
      }

      return Promise.reject(error); // ⚡ phải return Promise.reject
    },
  );
};

export default setInterceptor;

setInterceptor(axiosClient);

export { axiosClient };
