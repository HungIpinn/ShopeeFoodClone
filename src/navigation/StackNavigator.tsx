import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import DetailScreen from '../screens/DetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen 
      name="Root" 
      component={DrawerNavigator} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default StackNavigator;