/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import Home from './screens/home';
import Signup from './screens/signup';
import Login from './screens/login';
import Start from './screens/start';
import AuthLoading from './screens/authloading';
import Trip from './screens/trip';
import Recharge from './screens/recharge';
import Rides from './screens/rides';
import Store from './utils/store';

const AppStack = createStackNavigator(
  { Home, Trip, Recharge, Rides },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AuthStack = createStackNavigator(
  { Start, Login, Signup },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

class App extends React.Component {
  state = {
    fontsLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-regular': require('./assets/poppins/Poppins-Regular.ttf'),
      'poppins-bold': require('./assets/poppins/Poppins-Bold.ttf'),
      'poppins-thin': require('./assets/poppins/Poppins-Thin.ttf')
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    const Cycleon = createAppContainer(
      createSwitchNavigator(
        {
          AuthLoading,
          App: AppStack,
          Auth: AuthStack
        },
        {
          initialRouteName: 'AuthLoading'
        }
      )
    );

    const { fontsLoaded } = this.state;

    return fontsLoaded ? (
      <Provider store={Store}>
        <Cycleon />
      </Provider>
    ) : (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

export default App;
