import Header from '@/shared/components/Header';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Banner from '@/shared/components/Banner';
import LineLocation from '@/shared/components/LineLocation';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
        <Banner cateId={0} positionId={8188} />
        <LineLocation />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
