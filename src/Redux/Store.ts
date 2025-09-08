// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/Redux/Slices/Auth/authSlice';
import { StoreEnhancer } from 'redux'; // Import type StoreEnhancer

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

// Khai báo một enhancer mặc định với kiểu StoreEnhancer
let reactotronEnhancer: StoreEnhancer | undefined = undefined;

// Tạo enhancer chỉ khi ở môi trường phát triển
if (__DEV__) {
  const tron = Reactotron.configure({ name: 'ShopeeFoodClone' })
    .use(reactotronRedux())
    .connect();

  reactotronEnhancer = tron.createEnhancer!();
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: __DEV__,
  enhancers: getDefaultEnhancers => {
    if (__DEV__ && reactotronEnhancer) {
      return getDefaultEnhancers().concat(reactotronEnhancer);
    }
    return getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
