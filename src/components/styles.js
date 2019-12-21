import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH_SCREEN / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: '#efefef'
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 15,
    }
})
export default styles;