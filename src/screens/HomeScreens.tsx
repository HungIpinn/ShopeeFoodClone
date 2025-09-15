import Header from "@/shared/components/Header";
import { useNavigation } from "@react-navigation/native";
import {  Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <Header/>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;