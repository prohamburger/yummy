import { StyleSheet, Dimensions } from 'react-native'
const WIDTH_SCREEN = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20
  },
  title: {
    flex: 1,
    marginRight: 0
  },
  unit: {
    flex: 1,
    marginRight: 10,
    fontStyle: "italic"
  },
  image: {
    width: WIDTH_SCREEN,
    flex: 1
  }
})
export default styles