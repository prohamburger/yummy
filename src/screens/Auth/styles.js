import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: WIDTH,
      height: HEIGHT + 50,
    },
    input:{
      height: 40,
      width: WIDTH - 100,
      borderRadius: 20,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#cccccc",
      marginBottom: 10,
      paddingLeft: 40,
      paddingRight: 40
    },
    iconLeft: {
      position: "absolute",
      top: 5,
      left: 10,
    },
    iconRight: {
      position: "absolute",
      right: 10,
      top: 5
    },
    button: {
      height: 40,
      width: 150,
      borderRadius: 20,
      backgroundColor: '#FF9797',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    home: {
      width: 50, 
      height: 50, 
      borderRadius: 50, 
      backgroundColor: '#fff',
      marginLeft: 10,
      marginTop: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
export default styles;