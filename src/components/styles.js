import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH_SCREEN / 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 15,
    }
})
export default styles;