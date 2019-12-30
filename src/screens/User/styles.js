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
  profile: {
    width: SCREEN_WIDTH,
    height: 100,
    flex: 2
  },
  content: {
    height: SCREEN_HEIGHT - 100
  }
})
