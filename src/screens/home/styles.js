import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;


const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    state: {
      marginTop: 10,
      marginLeft: 10,
      color: '#FF9797',
      fontWeight: '500'
    },
    container: {
      width: WIDTH_SCREEN - 20,
      borderRadius: 20,
      backgroundColor: '#fff',
      marginTop: 10,
      marginBottom: 10
    },
    background: {
      backgroundColor: '#ededed',
    },
    header: {
      backgroundColor: '#ededed',
      width: WIDTH_SCREEN - 80,
      height: 35,
      borderRadius: 30
    },
    content:{
        width: WIDTH_SCREEN,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        marginLeft: 5,
        elevation: 4,
    },
    slide:{
        width: WIDTH_SCREEN,
        resizeMode: 'cover',
    }
})

export default styles;