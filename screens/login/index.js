import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const backgroundImage = require('../../assets/bicycle_wallpaper.jpg');
const bike = require('../../assets/bike.json');

export default class Login extends React.Component {
  componentDidMount() {
    console.log('Login Mount');
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
          locations={[0, 0.3, 1]}
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
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.heading2}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.heading3}>+91 - </Text>
              <TextInput
                editable
                maxLength={10}
                placeholder="8888888888"
                keyboardType="phone-pad"
                style={styles.textInputStyle}
              />
            </View>
          </View>
          <View>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              text="Login"
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
    height: '70%',
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
    fontFamily: 'poppins-regular',
    fontSize: 40,
    color: 'white'
  },
  heading2: {
    fontFamily: 'poppins-regular',
    fontSize: 30,
    color: 'white',
    marginTop: 20
  },
  heading3: {
    fontFamily: 'poppins-regular',
    fontSize: 25,
    color: 'white'
  },
  cycleon: {
    fontFamily: 'poppins-bold',
    fontSize: 50,
    color: '#FF512F',
    marginTop: -25
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInputStyle: {
    flex: 1,
    fontFamily: 'poppins-regular',
    fontSize: 25,
    color: 'white'
  }
});
