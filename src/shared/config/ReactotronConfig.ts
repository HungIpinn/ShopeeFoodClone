// ReactotronConfig.ts
import Reactotron from 'reactotron-react-native';

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
    .connect();

  console.tron = reactotron;
}
