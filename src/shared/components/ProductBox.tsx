import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { ProductVM } from '@/types/product/product.model';
import FastImage from '@d11/react-native-fast-image';
import { StyleProductBox } from './ProudctBox.style';

type IProps = {
  product: ProductVM;
  numberProductBox: number;
};

const ProductBox = (props: IProps) => {
  const { product, numberProductBox } = props;
  const styles = useMemo(() => {
    return StyleProductBox(numberProductBox);
  }, [numberProductBox]);
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <FastImage source={{ uri: product.avatar }} style={styles.avatar} />
      </View>
      <Text>ProductBox</Text>
    </View>
  );
};

export default ProductBox;
