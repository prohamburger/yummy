import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation/AppNavigation';
import Splash from './src/screens/splash/Splash';
import CartProvider from './src/context/CartProvider'

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
