import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from '@/navigation/DrawerNavigator';
import DetailScreen from '@/screens/DetailScreen';
import WelcomeScreen from '@/screens/WelcomeScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import { RootStackParamList } from '@/navigation/type';
import OtpScreen from '@/screens/OtpScreen';
import TabNavigator from '@/navigation/TabNavigator';
import HomeScreen from '@/screens/HomeScreens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator
  initialRouteName="Root" 
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
    <Stack.Screen 
      name="Root" 
      component={TabNavigator} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Otp" component={OtpScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default StackNavigator;