import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail',{userid:1})} />
    </View>
  );
}

export default HomeScreen;