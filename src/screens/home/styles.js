import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;


const styles = StyleSheet.create({
    header: {
      backgroundColor: '#ededed',
      width: WIDTH_SCREEN - 80,
      height: 35,
      borderRadius: 30
    },
    content:{
        width: WIDTH_SCREEN,
        borderColor: '#efefef',
        borderRadius: 15,
        borderWidth: 0.5,
        paddingTop: 10
    },
    slide:{
        width: WIDTH_SCREEN,
        resizeMode: 'cover',
    }
})

export default styles;