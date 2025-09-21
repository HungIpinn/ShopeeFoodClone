import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import BannerFlashSale from './BannerFlashSale';
import { getFsInfo } from '@/Redux/Slices/FlashSaleInfo/flashSaleInfoThunk';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { useNavigation } from '@react-navigation/native';
import ProductBox from './ProductBox';
import { getProductLDP } from '@/Redux/Slices/Product/productThunk';
import { Filter } from '@/types/product/product.model';
import { IFlashSaleInfoDto } from '@/types/Flashsale/FlashSaleInfo.Model';

const LineFlashSale = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const ldpInfoReducer = useAppSelector((state) => state.ldp.data);
  const fsInfoReducer = useAppSelector((state) => state.fsInfo.data);
  useEffect(() => {
    const load = async () => {
      try {
        const fsInfo = await dispatch(getFsInfo({ programId: 664 })).unwrap();
        if (fsInfo?.length) {
          const now = new Date();
          const selectInfo = fsInfo.find(
            (x) =>
              now >= new Date(x.publicationLongFromDate) &&
              now <= new Date(x.publicationLongToDate),
          );

          if (selectInfo?.publicationId) {
            const filters: Filter[] = [
              {
                filterId: selectInfo.publicationId,
                filterTypeId: 9,
                sortName: '',
              },
            ];
            dispatch(
              getProductLDP({
                pageIndex: 0,
                pageSize: 10,
                provinceId: 1027,
                filters,
              }),
            );
          }
        }
      } catch (err) {
        console.error('Failed to load fsInfo:', err);
        console.log('<<<<< Hung Log:', err);
      }
    };

    load();
  }, []);

  const now = new Date();
  const selectFsInfo = useMemo(() => {
    const selectInfo = fsInfoReducer?.find(
      (x) =>
        now >= new Date(x.publicationLongFromDate) &&
        now <= new Date(x.publicationLongToDate),
    ) as IFlashSaleInfoDto;
    return selectInfo;
  }, [fsInfoReducer, now.getDay()]);

  const productFSs = useMemo(() => {
    const selectInfo = ldpInfoReducer[selectFsInfo?.publicationId];
    return selectInfo;
  }, [ldpInfoReducer, selectFsInfo]);

  return (
    <View>
      <BannerFlashSale selectFsInfo={selectFsInfo} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={productFSs?.product?.products ?? []}
        renderItem={({ item }) => <ProductBox product={item} />}
      />
    </View>
  );
};

export default LineFlashSale;

const styles = StyleSheet.create({});
