import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { APP_COLOR } from '@/shared/config/ColorConstanst';
import { scale } from '../helpers/ScaleHelper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyPressable from '../customUI/MyPressable';

const LineLocation = () => {
  return (
    <MyPressable style={styles.container}>
      <Text numberOfLines={1} style={styles.text} ellipsizeMode="tail">
        Giao đến 417/69/38/36 Quang Trung Phường Gò Vấp, Thành Phố Hồ Chí Minh
      </Text>
      <FontAwesome name={'chevron-right'} size={scale(15)} color="white" />
    </MyPressable>
  );
};

export default LineLocation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLOR.PINK,
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(5),
  },
  text: {
    color: 'white',
    marginRight: scale(5),
  },
});
