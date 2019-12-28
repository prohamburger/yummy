import React from 'react'
import {View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles'

export default function Category(props){
    return(
        <TouchableOpacity  onPress={props.onPress}>
                <Image
                    source={{uri: props.source}}
                    style={styles.categoriesPhoto}
                >
                </Image>
                <Text style={styles.categoriesName}>{props.name}</Text>
        </TouchableOpacity>
    );
}