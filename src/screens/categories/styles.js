import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const WIDTH_SCREEN = width < height ? width : height;

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderRadius: 20,
    position: 'relative'
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  },
  meat: {
    width: WIDTH_SCREEN,
    height: 150
  }
});

export default styles;
