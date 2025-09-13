import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { APP_COLOR } from '@/shared/config/ColorConstanst';

interface Props {
  visible: boolean;
  overlayHandle?:StyleProp<ViewStyle>
}

const LoadingOverlay = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <View style={[styles.overlay]}>
      <ActivityIndicator size="large" color={APP_COLOR.ORANGE} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});