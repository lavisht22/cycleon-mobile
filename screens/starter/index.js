import React from 'react';
import { AsyncStorage, StatusBar, View } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

class Starter extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
    console.log(userToken);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View
        style={{
          backgroundColor: '#242f3e',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <LoadingIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default Starter;
