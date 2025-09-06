declare module 'react-native-vector-icons/Ionicons' {
  import { Icon } from 'react-native-vector-icons/Icon';
  export default Icon;
}

declare module 'react-native-vector-icons/FontAwesome' {
  import { Icon } from 'react-native-vector-icons/Icon';
  export default Icon;
}

/* Hoặc wildcard cho tất cả icon sets */
declare module 'react-native-vector-icons/*' {
  import { Icon } from 'react-native-vector-icons/Icon';
  export default Icon;
}
