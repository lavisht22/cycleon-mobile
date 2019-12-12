/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import LoadingIndicator from '../../components/LoadingIndicator';
import * as signupActions from '../../actions/signup';
import NavigationService from '../../utils/NavigationService';
import { storeToken } from '../../utils/service';

const backgroundImage = require('../../assets/bicycle_wallpaper.jpg');

class Signup extends React.Component {
  state = {
    name: '',
    phone: '',
    otp: ''
  };

  async componentDidUpdate() {
    if (this.props.verified) {
      await storeToken(this.props.token);
      NavigationService.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? <LoadingIndicator /> : null}
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
        {this.props.verification ? (
          <View style={styles.content}>
            <View>
              <Text style={styles.heading}>Signup</Text>
              <Text style={styles.heading2}>OTP</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.heading3}> </Text>
                <TextInput
                  editable
                  maxLength={4}
                  placeholder="8888"
                  keyboardType="number-pad"
                  style={styles.textInputStyle}
                  value={this.state.otp}
                  onChangeText={text => {
                    this.setState({ otp: text });
                  }}
                />
                {this.props.error ? (
                  <Text style={styles.errorMessage}>
                    {this.props.errorMessage}
                  </Text>
                ) : null}
              </View>
            </View>
            <View>
              <Button
                text="Verify"
                onPress={() => {
                  this.props.userVerify(this.state.phone, this.state.otp);
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            <View>
              <Text style={styles.heading}>Signup</Text>
              <Text style={styles.heading2}>Name</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.heading3}> </Text>
                <TextInput
                  editable
                  maxLength={25}
                  placeholder="Robert Downey Jr."
                  style={styles.textInputStyle}
                  value={this.state.name}
                  onChangeText={text => {
                    this.setState({ name: text });
                  }}
                />
              </View>
              <Text style={styles.heading2}>Phone Number</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.heading3}>+91 - </Text>
                <TextInput
                  editable
                  maxLength={10}
                  placeholder="8888888888"
                  keyboardType="phone-pad"
                  style={styles.textInputStyle}
                  value={this.state.phone}
                  onChangeText={text => {
                    this.setState({ phone: text });
                  }}
                />
              </View>
              {this.props.error ? (
                <Text style={styles.errorMessage}>
                  {this.props.errorMessage}
                </Text>
              ) : null}
            </View>
            <View>
              <Button
                text="Signup"
                onPress={() => {
                  this.props.userSignup(this.state.name, this.state.phone);
                }}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signup.loading,
  error: state.signup.error,
  errorMessage: state.signup.errorMessage,
  verification: state.signup.verification,
  verified: state.signup.verified,
  token: state.signup.token
});

const mapDispatchToProps = {
  ...signupActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
  },
  errorMessage: {
    fontFamily: 'poppins-regular',
    fontSize: 15,
    color: '#FF512F',
    marginTop: 15
  }
});
