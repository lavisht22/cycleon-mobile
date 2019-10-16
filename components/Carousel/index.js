/* eslint-disable react/sort-comp */
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from '../Button';

export default class MailCarousel extends React.Component {
  state = {
    screenWidth: 1,
    activeSlide: 0
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
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.items}
          renderItem={({ item }) => {
            return (
              <View style={styles.carouselItem}>
                <View>
                  <View style={styles.cycleDetails}>
                    <Text style={styles.cycleId}>{item.cycle_id}</Text>
                    <Text style={styles.cycleName}>{item.cycle_name}</Text>
                  </View>
                  <View style={styles.durationButtons}>
                    <Button style={{ flex: 1 }} border text="1 Hr" />
                    <Button style={{ flex: 1 }} border text="2 Hr" />
                    <Button style={{ flex: 1 }} border text="3 Hr" />
                  </View>
                </View>
                <Button text="Book" />
              </View>
            );
          }}
          sliderWidth={this.state.screenWidth}
          itemWidth={0.8 * this.state.screenWidth}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        <Pagination
          dotsLength={this.props.items.length}
          activeDotIndex={this.state.activeSlide}
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
  durationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
