import './global.css';
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'screens/HomeScreen';
import { AddExpenseScreen } from 'screens/AddExpenseScreen';
import { Button, Pressable, Text } from 'react-native';
import { useFonts } from 'expo-font';

export type RootStackParamList = {
  AddExpense: {};
  Home: {};
};

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: { title: 'Welcome' },
    },
    AddExpense: {
      options: {
        title: 'Add Expense',
        headerShadowVisible: false,
        headerRight: () => (
          <Pressable onPress={() => alert('This is a button!')}>
            <Text>Save</Text>
          </Pressable>
        ),
      },
      screen: AddExpenseScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
