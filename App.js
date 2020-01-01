import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation/AppNavigation';
import CartProvider from './src/context/CartProvider'
import * as Font from 'expo-font';

console.disableYellowBox = true;

export default class App extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <CartProvider>
          <AppContainer /> 
      </CartProvider>
    )
  }
}

