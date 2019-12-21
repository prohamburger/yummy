import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Hamburger extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.hamburger} onPress={this.props.onPress}>
                <Image
                    source={require('../../../assets/hamburger-icon.png')}
                >
                </Image>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    hamburger:{
        width: 20,
        height: 20,
        marginLeft: 20 
    }
})