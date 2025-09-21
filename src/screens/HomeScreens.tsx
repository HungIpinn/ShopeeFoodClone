import Header from '@/shared/components/Header';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Banner from '@/shared/components/Banner';
import LineLocation from '@/shared/components/LineLocation';
import { useAppDispatch } from '@/Redux/Hooks';
import { useEffect } from 'react';
import { getMenu } from '@/Redux/Slices/Menu/menuThunk';
import ListCateLv1 from '@/shared/components/ListCateLv1';
import LineFlashSale from '@/shared/components/LineFlashSale';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenu({ provinceId: 1027 }));
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
        <Banner cateId={0} positionId={8188} />
        <LineLocation />
        <ListCateLv1 />
        <LineFlashSale />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
