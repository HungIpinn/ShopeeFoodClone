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

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: (props: SvgProps) => JSX.Element;
  export default content;
}
