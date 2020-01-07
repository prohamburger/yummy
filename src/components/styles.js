import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;
const recipeNumColums = 3
const RECIPE_ITEM_MARGIN = 10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: (WIDTH_SCREEN - ((recipeNumColums + 1) * RECIPE_ITEM_MARGIN)) / recipeNumColums,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    photo: {
        width: (WIDTH_SCREEN - 20 - ((recipeNumColums + 1) * RECIPE_ITEM_MARGIN)) / recipeNumColums,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 15,
    }
})
export default styles;