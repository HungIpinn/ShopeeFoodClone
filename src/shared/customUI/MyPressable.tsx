import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface IProps {
  children?: React.ReactNode; // 👈 thêm cái này để nhận children
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const MyPressable = (props: IProps) => {
  const { children, onPress, style, disabled } = props;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [style, pressed && { opacity: 0.8 }]}
    >
      {children}
    </Pressable>
  );
};

export default MyPressable;
