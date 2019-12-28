import React from 'react'
import { Alert } from 'react-native'
import { array } from 'prop-types'
import state from '../services/MockServices'

export const CartContext = React.createContext()

export default class CartProvider extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      cartItems: [],
      isLogged: false
    }
  }
  addToCart = (item) => {
    console.log(this.state.cartItems.includes(...item))
    if(this.state.cartItems.includes(...item) !== true){
      this.setState({cartItems: this.state.cartItems.concat(item)})
      Alert.alert(
        'Thông báo',
        'Thêm nguyên liệu thành công!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}]
      )
    }
    else
      Alert.alert(
        'Thông báo',
        'Bạn đã thêm nguyên liệu này trước đó!',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}]
    )
  }
  deleteCart = (item) => {
    console.log('hello');
    var index = this.state.cartItems.indexOf(item)
    if( index > -1)
    this.state.cartItems.spilce(index, 1)
      
  }
  toggleLogin = () => {
      this.setState((prevState) => {
        return {isLogged: !prevState.isLogged}
      })
  }
  render(){
    return (
      <CartContext.Provider 
      value={{
      cartItems: this.state.cartItems, 
      addToCart: this.addToCart, 
      deleteCart: this.deleteCart,
      isLogged: this.state.isLogged,
      toggleLogin: this.toggleLogin}}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}