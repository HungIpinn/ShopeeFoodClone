// ReactotronConfig.ts
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

if (__DEV__) {
  const reactotron = Reactotron.configure({
    name: 'ShopeeFoodClone',
    host: 'localhost',
  })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = reactotron;
}
