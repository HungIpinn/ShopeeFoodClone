import { Dimensions, StyleSheet } from 'react-native';
import { scale } from '../helpers/ScaleHelper';

export const StyleProductBox = (numberProductBox: number) => {
  const { width } = Dimensions.get('window');
  const widthOneBox = width / numberProductBox;
  return StyleSheet.create({
    container: {
      width: widthOneBox,
    },
    avatarWrapper: {
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    avatar: {
      //width: widthOneBox,
      height: scale(60),
    },
  });
};
