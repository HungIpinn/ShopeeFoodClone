/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

function App() {

  const [name, setName] = useState<string>('');

  return (
    <View style = {styles.container}>
      <Text>{name}</Text>
      <TextInput 
      value = {name}
      onChangeText={e => {setName(e); console.log(e);}}
      autoCapitalize = "none"
      maxLength={12}
      autoCorrect = {false}
      style = {styles.txtInput}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent :"center"
  },
  txtInput:{
    borderColor: 'violet',
    borderWidth: 1
  },
});

export default App;
