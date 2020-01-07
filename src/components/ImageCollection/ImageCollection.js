import React from 'react';
import { FlatList, View, Image, Text, Dimensions } from 'react-native';
import styles from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width: viewportWidth } = Dimensions.get('window');

export default class ImageCollection extends React.Component {
  state = {
    active: 0
  }
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={{ width: viewportWidth - 10, height: viewportWidth - 10 }} source={{ uri: item }} />
      </View>
    )
  }
  render() {
    const {images} = this.props
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={images}
          renderItem={this._renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          firstItem={0}
          layout={'default'}
          onSnapToItem={index => this.setState({ active: index })}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={this.state.active}
          containerStyle={styles.paginationContainer}
          dotColor="#FF9797"
          dotStyle={styles.paginationDot}
          inactiveDotColor="black"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._carousel}
          tappableDots={!!this._carousel}
        />
      </View>
    );
  }
}