import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from '@/navigation/TabNavigator';
import ProfileScreen from '@/screens/ProfileScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { DrawerParamList } from '@/navigation/type';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Tabs" component={TabNavigator} options={{ title: 'Main Tabs' }} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;