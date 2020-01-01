import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
const pinkHamburger = require('../../../assets/hamburger-icon.png')
const whiteHamburger = require('../../../assets/hamburger-icon--white.png')

export default class Hamburger extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.hamburger} onPress={this.props.onPress}>
              <View style={{marginTop: 20, marginLeft: 20}}>
                <Image
                    source={this.props.src || pinkHamburger}
                >
                </Image>
              </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    hamburger:{
        width: 60,
        height: 60,
    }
})