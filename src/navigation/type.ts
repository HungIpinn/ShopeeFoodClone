import { NavigatorScreenParams } from '@react-navigation/native';
// Composite types
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Tab Navigator
export type TabParamList = {
  Home: undefined;
  Orders: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Drawer Navigator
export type DrawerParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  Profile: undefined;
  Settings: undefined;
};

// Stack Navigator
export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Root: NavigatorScreenParams<DrawerParamList>;
  Detail: undefined;
  Otp: undefined;
};

// Stack + Drawer
export type StackDrawerScreenProps<
  T extends keyof RootStackParamList = 'Root',
> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, T>,
  DrawerScreenProps<DrawerParamList>
>;

// Drawer + Tab
export type DrawerTabScreenProps<T extends keyof DrawerParamList = 'Tabs'> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    BottomTabScreenProps<TabParamList>
  >;
