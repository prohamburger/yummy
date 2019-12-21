import React from 'react';
import {FlatList, View, Image, Text } from 'react-native';
import styles from './styles'

export default function ImageCollection(props){
    const images = props.images
    return(
        <FlatList
            data={images}
            renderItem={({item}) => (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 150, height: 150, marginLeft: 10, borderRadius: 10}} source={{uri: item}}></Image>
            </View>)}
            keyExtractor={index => index}
            numColumns={2}
            contentContainerStyle={styles.container}
        ></FlatList>
    );
}