import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')
const SCREEN_WIDTH = width < height ? width : height
const SCREEN_HEIGHT = height > width ? height : width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flexDirection: "column"
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 100, 
    borderWidth: 10, 
    borderColor: '#fff'
  },
  profile: {
    width: SCREEN_WIDTH,
    height: 180,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#f5f5f5'
  },
  content: {
    height: 500,
    borderRadius: 20,
  },
  recipeContainer: {
    width: SCREEN_WIDTH / 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    marginTop: 10
  },
  recipeTitle: {
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    fontWeight: '500',
    fontSize: 10
  },
  recipePhoto: {
    width: SCREEN_WIDTH / 3 - 10,
    height: 120,
  }
})
