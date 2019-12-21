import React from 'react'
import {View, Text, TextInput, Button, AsyncStorage} from 'react-native'
import { CartContext } from '../../context/CartProvider'

export default class User extends React.Component{
  static navigationOptions = {
  };

  render() {
    return (
      <View>
        <CartContext.Consumer>
          {({toggleLogin}) => (<Button title="Actually, sign me out :)" onPress={()=> {toggleLogin(); this._signOutAsync()}} />)}
        </CartContext.Consumer>
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
