import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '@/screens/HomeScreens';
import OrdersScreen from '@/screens/OrdersScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { TabParamList } from '@/navigation/type';

const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<string, string> = {
  Home: 'home-outline',
  Orders: 'list-outline',
  Profile: 'person-outline',
  Settings: 'settings-outline',
};

const TabNavigator= () => {
  
  const renderIcon = useCallback(
    (routeName: string, color: string, size: number) => {
      const iconName = ICONS[routeName];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    []
  );

  return(
  <Tab.Navigator
    initialRouteName="Home" 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) =>
          renderIcon(route.name, color, size),
      })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)};

export default TabNavigator;