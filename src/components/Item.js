import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native'
import styles from './styles';

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        const { item } = this.props;
        return(
                <View style={styles.container}>
                    <Image
                        style={styles.photo}
                        source={{uri: item.photo_url}}
                    >       
                    </Image>
                    <Text>{item.title}</Text>
                </View>
        );
    }
}