/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
  Text
} from 'react-native';

import Navigation from './navigation';

class Menu extends React.Component {
  state = {
    visible: false,
    x: new Animated.Value(1)
  };

  slide = () => {
    Animated.spring(this.state.x, {
      toValue: 1,
      useNativeDriver: true
    }).start();
    this.setState({
      visible: true
    });
  };

  slideBack = () => {
    Animated.spring(this.state.x, {
      toValue: 0,
      useNativeDriver: true
    }).start();
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 8,
          transform: [
            {
              translateX: this.state.x.interpolate({
                inputRange: [0, 1],
                outputRange: [-600, 0]
              })
            }
          ]
        }}
      >
        <View style={styles.container}>
          <View style={styles.userDetails}>
            <Image
              style={styles.profilePicture}
              source={require('../../assets/avatar.jpg')}
            />
            <Text style={styles.text1}>Lavish Thakkar</Text>
          </View>
          <Navigation />
        </View>
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.slideBack}>
          <View
            style={{
              width: '30%',
              height: '100%',
              backgroundColor: 'transparent'
            }}
          />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: '#EFEFEF'
  },
  userDetails: {
    padding: 30,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  profilePicture: {
    width: 150,
    height: 150
  },
  text1: {
    fontFamily: 'poppins-regular',
    fontSize: 24,
    marginVertical: 20,
    color: 'white'
  }
});

export default Menu;
