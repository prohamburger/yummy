import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { CartContext } from '../../context/CartProvider'

export default function Ingredients(props) {
    const item = [...props.ingredients, {title:  props.title}];
    return (
        <View style={styles.container}>
          <Text style={styles.ingredient}>Nguyên liệu</Text>
          <FlatList
              data={props.ingredients}
              renderItem={({ item }) =>
                  <View style={styles.content}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.unit}>{item.unit}</Text>
                  </View>
              }
              contentContainerStyle={styles.container}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
          />
          <CartContext.Consumer>
            {( {addToCart} ) => 
            <TouchableOpacity style={styles.addToCart} onPress={() => addToCart(item)}><Text style={styles.titleAddToCart}>Thêm vào danh sách mua sắm</Text></TouchableOpacity>}
          </CartContext.Consumer>
        </View>
    );
}