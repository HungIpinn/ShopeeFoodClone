import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { useAppSelector } from '@/Redux/Hooks';
import { MenuResponse } from '@/types/menu/menuModel';
import FastImage from '@d11/react-native-fast-image';
import { responsiveFontSize, scale } from '../helpers/ScaleHelper';
import MyPressable from '../customUI/MyPressable';

const ListCateLv1 = () => {
  const menuData = useAppSelector((state) => state.menu.data);

  //   const lstCateLv1 = useMemo(() => {

  //   }, []);

  return (
    <View>
      <FlatList
        horizontal
        data={menuData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.cateCode.toString()}
        renderItem={({ item }) => {
          return <ItemListCatelv1 data={item} />;
        }}
      />
    </View>
  );
};

type IProps = {
  data: MenuResponse;
};

const ItemListCatelv1 = (props: IProps) => {
  const { data } = props;
  return (
    <MyPressable style={styles.container}>
      <FastImage source={{ uri: data.icon }} style={styles.icon} />
      <Text style={styles.text} numberOfLines={2}>
        {data.name}
      </Text>
    </MyPressable>
  );
};

export default ListCateLv1;

const styles = StyleSheet.create({
  icon: {
    width: scale(40),
    height: scale(40),
  },
  container: {
    width: scale(80),
    marginVertical: scale(10),
    marginHorizontal: scale(5),
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: responsiveFontSize(11),
  },
});
