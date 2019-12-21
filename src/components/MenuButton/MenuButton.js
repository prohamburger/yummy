import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './styles'
export default function MenuButton(props){
    return(
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.btnClickContain}
        >
            <View style={styles.container}>
                <Image style={{width: 40, height: 40}} source={props.source}></Image>
                <Text style={styles.btnText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

}