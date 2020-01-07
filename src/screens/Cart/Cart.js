import React from 'react'
import { Text, View, FlatList, Button, TouchableOpacity, Image } from 'react-native'
import { CartContext } from '../../context/CartProvider'
import styles from './styles'

export default class Cart extends React.Component{
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerStyle: ({
        backgroundColor: '#FF9797',
      }),
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      title: 'Danh sách mua sắm'
    }
  }
  render(){
    return (
      <CartContext.Consumer>
        {({cartItems, deleteCart}) => (
          cartItems.length !== 0 ?
          <FlatList 
            data={cartItems}
            keyExtractor={item => `${item.name}`}
            renderItem={({item}) => (
              <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.unit}>{item.unit}</Text>
                <Text style={{marginRight: 10, color: '#FF9797', fontStyle: 'italic'}}>{item.title}</Text>
              </View>
            )}
          ></FlatList> :
          <Image source={require('../../../assets/emptyCart.jpg')} style={styles.image}/>
        )}
      </CartContext.Consumer>
    );
  }
} 