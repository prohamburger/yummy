import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: 50
    },
    input:{
      height: 40,
      borderRadius: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ededed",
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
    line:{
      marginTop: 10,
      borderWidth: 0.3,
      borderColor: "#ccc"
    }
  });
export default styles;