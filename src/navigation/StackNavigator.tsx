import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from '@/navigation/DrawerNavigator';
import DetailScreen from '@/screens/DetailScreen';
import WelcomeScreen from '@/screens/WelcomeScreen';
import SignUpScreen from '@/screens/SignUpScreen';
import { RootStackParamList } from '@/navigation/type';

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