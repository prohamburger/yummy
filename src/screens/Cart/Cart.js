import React from 'react'
import { Text, View, FlatList, Button, TouchableOpacity, Image } from 'react-native'
import { CartContext } from '../../context/CartProvider'
import styles from './styles'

export default class Cart extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text>Danh sách mua sắm</Text>
    }
  }
  render(){
    return (
      <CartContext.Consumer>
        {({cartItems, deleteCart}) => (
          cartItems.length !== 0 ?
          <FlatList 
            data={cartItems}
            renderItem={({item}) => (
              <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.unit}>{item.unit}</Text>
                <Text style={{marginRight: 10, color: '#FF9797', fontStyle: 'italic'}}>{item.title}</Text>
              </View>
            )}
          ></FlatList> :
          <Image source={require('../../../assets/empty.jpg')}/>
        )}
      </CartContext.Consumer>
    );
  }
} 