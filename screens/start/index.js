import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import Button from '../../components/Button';

const backgroundImage = require('../../assets/bicycle_wallpaper.jpg');
const bike = require('../../assets/bike.json');

export default class Start extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <LinearGradient
          colors={[
            'rgba(44, 83, 100, 0.4)',
            'rgba(32, 58, 67, 1)',
            'rgba(15, 32, 39, 1)'
          ]}
          locations={[0, 0.45, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
            zIndex: 2
          }}
        />
        <Image style={styles.backgroundImage} source={backgroundImage} />
        <View style={styles.content}>
          <View>
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              style={styles.icon}
              source={bike}
            />
            <Text style={styles.heading}>Welcome to</Text>
            <Text style={styles.cycleon}>Cycle-On!</Text>
          </View>
          <View>
            <Button
              style={{ marginBottom: 20 }}
              text="Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              border
              text="Signup"
              onPress={() => this.props.navigation.navigate('Signup')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backgroundImage: {
    height: '50%',
    resizeMode: 'center'
  },
  content: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    zIndex: 3,
    height: '60%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  icon: {
    height: 200,
    marginBottom: 20,
    marginLeft: -10,
    backgroundColor: 'transparent'
  },
  heading: {
    marginTop: -40,
    fontFamily: 'poppins-regular',
    fontSize: 40,
    color: 'white'
  },
  cycleon: {
    fontFamily: 'poppins-bold',
    fontSize: 50,
    color: '#FF512F',
    marginTop: -25
  }
});
