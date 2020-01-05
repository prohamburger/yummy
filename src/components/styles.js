import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH_SCREEN / 3 - 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 8
    },
    photo: {
        width: WIDTH_SCREEN / 3 - 15,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 15,
    }
})
export default styles;