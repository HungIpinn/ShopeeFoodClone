import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { useAppSelector } from '@/Redux/Hooks';
import FastImage from '@d11/react-native-fast-image';
import { responsiveFontSize, scale } from '../helpers/ScaleHelper';
import CountdownClock from '../customUI/CountDownClock';
import { IFlashSaleInfoDto } from '@/types/Flashsale/FlashSaleInfo.Model';

type IProps = {
  selectFsInfo: IFlashSaleInfoDto;
};

const BannerFlashSale = (props: IProps) => {
  const { selectFsInfo } = props;
  const now = new Date();
  const remainTimeMs = useMemo(() => {
    if (!selectFsInfo) return 0;
    const ms =
      new Date(selectFsInfo.publicationLongToDate).getTime() - now.getTime();
    return ms;
  }, [selectFsInfo]);

  return (
    selectFsInfo?.keyBackgroundColorIdMobile != null && (
      <View>
        <FastImage
          source={{ uri: selectFsInfo?.keyBackgroundColorIdMobile }}
          style={styles.gif}
        />
        <View style={styles.viewAbsolute}>
          <View style={styles.viewInProcess}>
            <Text style={styles.textInProcess}>Đang diễn ra</Text>
          </View>
        </View>
        <View style={styles.viewAbsoluteCountDown}>
          <View style={styles.viewCountDown}>
            <Text style={styles.textCountDown}>Kết thúc sau: </Text>
            <CountdownClock
              remainingMs={remainTimeMs}
              onFinish={() => console.log('Finished')}
              tickInterval={1000}
            />
          </View>
        </View>
      </View>
    )
  );
};

export default BannerFlashSale;

const styles = StyleSheet.create({
  gif: {
    width: '100%',
    height: scale(78),
  },
  viewAbsolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: scale(15),
    marginTop: scale(5),
  },
  viewInProcess: {
    backgroundColor: '#FFD450',
    paddingVertical: scale(5),
    paddingHorizontal: scale(15),
    borderRadius: scale(15),
    marginBottom: scale(5),
  },
  textInProcess: {
    fontSize: responsiveFontSize(10),
  },
  viewAbsoluteCountDown: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: scale(15),
    marginBottom: scale(10),
  },
  viewCountDown: {
    backgroundColor: '#ED116480',
    paddingVertical: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(15),
    paddingHorizontal: scale(6),
  },
  textCountDown: {
    fontSize: responsiveFontSize(12),
    color: 'white',
    marginRight: scale(3),
  },
});
