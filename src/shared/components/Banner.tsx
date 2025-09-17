import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { getBanner } from '@/Redux/Slices/Banner/bannerThunk';
import { BannerResponse } from '@/types/banner/bannerModel';
import FastImage from '@d11/react-native-fast-image';
import { scale } from '../helpers/ScaleHelper';
import { FullWidthImage } from '@/shared/customUI/FullWidthBanner';

interface IProps {
  cateId?: number;
  positionId: number;
}

const Banner = (props: IProps) => {
  const { width } = Dimensions.get('window');
  const flatListRef = useRef<FlatList>(null);
  const timeoutRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const isAutoScrollRef = useRef(true);
  const { cateId, positionId } = props;
  const dispatch = useAppDispatch();
  const bannerData = useAppSelector((state) => state.banner);

  const selectBanner = useMemo(
    () => bannerData.bannerData[positionId] ?? null,
    [bannerData.bannerData, positionId],
  );

  useEffect(() => {
    dispatch(getBanner({ placeid: positionId, categoryId: cateId ?? 0 }));
    if (!selectBanner?.length) return;
    // const interval = setInterval(() => {
    //   if (!isAutoScrollRef.current) return;
    //   setIndex((prev) => {
    //     const next = (prev + 1) % selectBanner.length;
    //     flatListRef.current?.scrollToIndex({ index: next, animated: true });
    //     return next;
    //   });
    // }, 3000);

    //return () => clearInterval(interval);
  }, []);

  const onScrollBeginDrag = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(offsetX / width);
      setIndex(currentIndex);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isAutoScrollRef.current = false;
    },
    [width],
  );

  const onScrollEndDrag = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      isAutoScrollRef.current = true;
    }, 300);
  }, []);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal
        snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled
        initialNumToRender={5} // render ít item đầu tiên
        maxToRenderPerBatch={5} // render từng batch
        windowSize={10} // số item
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={onScrollBeginDrag} // ngừng auto khi user vuốt
        onScrollEndDrag={onScrollEndDrag} // bật lại khi user thả tay
        bounces={false}
        overScrollMode="never"
        data={selectBanner}
        keyExtractor={(item) => item.bannerId.toString()}
        renderItem={({ item }) => {
          return <ItemBanner item={item} />;
        }}
      />
    </View>
  );
};

type IPropsItemBanner = {
  item: BannerResponse;
};

const ItemBanner = memo(
  (props: IPropsItemBanner) => {
    const { item } = props;
    return (
      <View>
        <FullWidthImage uri={item.pathUrl} />
      </View>
    );
  },
  (prev, next) => prev.item.pathUrl === next.item.pathUrl,
);

export default Banner;

const styles = StyleSheet.create({});
