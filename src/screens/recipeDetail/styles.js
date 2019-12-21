import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')
const SCREEN_WIDTH = width < height ? width : height


const styles = StyleSheet.create({
  photo: {
    width: SCREEN_WIDTH,
    height: 150
  },
  wraptitle: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    textTransform: "uppercase",
    color: '#FF9797',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    width: SCREEN_WIDTH
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    position: "absolute",
    right: 20
  },
  timer: {
      height: 20,
      width: 20,
      marginRight: 0
  },
  step:{
    flex: 1,
    borderColor: '#efefef',
    borderRadius: 15,
    borderWidth: 0.5,
  },
  stepTitle: {
    color: '#FF9797',
    marginLeft: 10
  },
  stepId: {
    backgroundColor: '#FF9797', 
    color: '#fff', 
    width: 50, 
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10
  }
})
export default styles