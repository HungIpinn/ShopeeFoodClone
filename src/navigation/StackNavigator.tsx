import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import DetailScreen from '../screens/DetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Root: undefined;
  Detail:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
    <Stack.Screen 
      name="Root" 
      component={DrawerNavigator} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default StackNavigator;