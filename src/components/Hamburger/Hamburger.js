import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
const pinkHamburger = require('../../../assets/hamburger-icon.png')
const whiteHamburger = require('../../../assets/hamburger-icon--white.png')

export default class Hamburger extends React.Component{
    render(){
        return(
              <View>
                <Image
                    source={this.props.src || pinkHamburger}
                >
                </Image>
              </View>
        );
    }
}
const styles = StyleSheet.create({
    hamburger:{
        width: 60,
        height: 60,
    }
})