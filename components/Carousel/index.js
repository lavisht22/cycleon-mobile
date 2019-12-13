/* eslint-disable react/sort-comp */
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from '../Button';
import DurationSelector from '../DurationSelector';

export default class MailCarousel extends React.Component {
  state = {
    screenWidth: 1
  };

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
  }

  render() {
    return (
      <View>
        <Carousel
          ref={this.props.getRef}
          data={this.props.items}
          renderItem={({ item }) => {
            return (
              <View style={styles.carouselItem}>
                <View>
                  <View style={styles.cycleDetails}>
                    <Text style={styles.cycleId}>{item.cycle_id}</Text>
                    <Text style={styles.cycleName}>{item.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.durationText}>Duration</Text>
                    <DurationSelector
                      selectedNum={this.props.selectedNum}
                      changeDuration={num => this.props.changeDuration(num)}
                    />
                  </View>
                </View>
                <Button
                  onPress={this.props.bookCycle}
                  text="Book"
                  altText="₹10/-"
                />
              </View>
            );
          }}
          sliderWidth={this.state.screenWidth}
          itemWidth={0.8 * this.state.screenWidth}
          onBeforeSnapToItem={this.props.onSnapToItem}
        />
        <Pagination
          dotsLength={this.props.items.length}
          activeDotIndex={this.props.index}
          containerStyle={{ backgroundColor: 'transparent' }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#FF512F'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  cycleId: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: '#FF512F'
  },
  cycleName: {
    fontFamily: 'poppins-regular',
    fontSize: 20
  },
  cycleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  durationText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    marginBottom: 10
  }
});
