import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale } from '../helpers/ScaleHelper';

const Header = () => {
  return (
    <View style={styles.overlay}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.container}>
          <View style={styles.containerTextInput}>
            <Ionicons name={'search'} size={scale(20)} />
            <TextInput placeholder="Ba mẹ tìm gì" style={styles.textInput} />
          </View>
          <View style={styles.containerNotify}>
            <Ionicons name={'notifications-outline'} size={scale(20)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: scale(70),
    zIndex: 9999,
    backgroundColor: 'transparent',
    pointerEvents: 'box-none',
  },
  containerTextInput: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(10),
    flex: 1,
    marginRight: scale(10),
    paddingHorizontal: scale(20),
  },
  container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginTop: scale(10),
  },
  containerNotify: {
    height: scale(40),
    width: scale(40),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  notify: {},
  textInput: {
    height: scale(40),
    marginLeft: scale(5),
  },
});
