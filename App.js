import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation/AppNavigation';
import CartProvider from './src/context/CartProvider'

console.disableYellowBox = true;

export default function App() {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
