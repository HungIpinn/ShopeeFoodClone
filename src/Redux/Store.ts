import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/Redux/Slices/Auth/authSlice';
import Reactotron from '@/shared/config/ReactotronConfig';
import bannerReducer from '@/Redux/Slices/Banner/bannerSlice';

let reactotronEnhancer = undefined;
if (__DEV__ && Reactotron.createEnhancer) {
  reactotronEnhancer = Reactotron.createEnhancer();
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    banner: bannerReducer,
  },
  devTools: __DEV__,
  enhancers: (getDefaultEnhancers) => {
    if (__DEV__ && reactotronEnhancer) {
      return getDefaultEnhancers().concat(reactotronEnhancer);
    }
    return getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
