import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  ingredient: {
    color: '#FF9797'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
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
  addToCart: {
    width: 250,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#FF9797',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80
  },
  titleAddToCart: {
    color: '#fff'
  }
})
export default styles