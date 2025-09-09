import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

let reactotron = Reactotron;

if (__DEV__) {
  reactotron = Reactotron.configure({
    name: 'ShopeeFoodClone',
    host: 'localhost',
  }) // Đổi host nếu chạy thiết bị thật
    .useReactNative()
    .use(reactotronRedux())
    .connect();
}

export default reactotron as typeof Reactotron & { createEnhancer?: () => any };
