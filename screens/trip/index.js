/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';
import Button from '../../components/Button';
import LoadingIndicator from '../../components/LoadingIndicator';
import Menu from '../../components/Menu';

import * as tripActions from '../../actions/trip';

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c'
      }
    ]
  }
];

const coordinates = [
  {
    latitude: 30.353261,
    longitude: 76.360746
  },
  {
    latitude: 30.353481,
    longitude: 76.362636
  },
  {
    latitude: 30.353697,
    longitude: 76.364833
  },
  {
    latitude: 30.354236,
    longitude: 76.369899
  },
  {
    latitude: 30.351693,
    longitude: 76.370456
  },
  {
    latitude: 30.352036,
    longitude: 76.373513
  }
];

let drawer;

class Trip extends React.Component {
  state = {
    region: {
      latitude: 30.3524,
      longitude: 76.3612,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    drawerVisible: false
  };

  _didFocusSubscription;

  _willBlurSubscription;

  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload => {
        BackHandler.addEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        );
        this.props.getActiveTrip();
      }
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.onBackButtonPressAndroid
        )
    );
  }

  componentDidUpdate() {
    if (this.props.tripEnded) {
      this.props.resetTripScreen();
      this.props.navigation.navigate('Home');
    }
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  onBackButtonPressAndroid = () => {
    if (drawer.state.visible) {
      drawer.slideBack();
    } else {
      this.props.navigation.goBack();
    }
    return true;
  };

  setDrawerRef = drawerRef => {
    drawer = drawerRef;
  };

  handleLockPress = () => {
    if (this.props.locked) {
      this.props.unlockCycle();
    }
    this.props.lockCycle();
  };

  handleEndPress = () => {
    this.props.endTrip();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? <LoadingIndicator /> : null}
        <Menu
          ref={this.setDrawerRef}
          drawerVisible={this.state.drawerVisible}
          name={
            this.props.profile && this.props.profile.name
              ? this.props.profile.name
              : 'David Bowie'
          }
        />
        <StatusBar animated hidden />
        <Header
          leftIcon="ios-menu"
          leftIconPress={() => {
            drawer.slide();
          }}
          headerText="Trip Details"
        />
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={this.state.region}
            style={styles.map}
            customMapStyle={mapStyle}
          >
            <Polyline
              coordinates={coordinates}
              strokeWidth={3}
              strokeColor="rgba(255, 81, 47, 1)"
            />
          </MapView>
        </View>
        <LinearGradient
          colors={['rgba(36, 47, 62, 1)', 'rgba(15, 32, 39, 1)']}
          locations={[0, 1]}
          style={{ height: '60%' }}
        >
          <View style={styles.content}>
            <View>
              <View style={styles.tripDetails}>
                <View
                  style={{
                    ...styles.tripDetail,
                    borderRightWidth: 1,
                    borderRightColor: '#C0C0C0'
                  }}
                >
                  <Text style={styles.smallText}>Start Time</Text>
                  <Text style={styles.largeText}>
                    {this.props.activeTrip.start
                      ? new Date(
                          this.props.activeTrip.start
                        ).toLocaleTimeString()
                      : '--:--:-- --'}
                  </Text>
                </View>

                <View style={styles.tripDetail}>
                  <Text style={styles.smallText}>End Time</Text>
                  <Text style={styles.largeText}>
                    {' '}
                    {this.props.activeTrip.end
                      ? new Date(this.props.activeTrip.end).toLocaleTimeString()
                      : '--:--:-- --'}
                  </Text>
                </View>
              </View>
              <View style={styles.paymentDetails}>
                <View style={styles.paymentItem}>
                  <Text style={styles.paymentItemName}>Trip Cost</Text>
                  <Text style={styles.paymentItemPrice}>
                    ₹
                    {this.props.activeTrip.fare
                      ? this.props.activeTrip.fare
                      : 0}
                  </Text>
                </View>
                <View style={styles.paymentItem}>
                  <Text style={styles.paymentItemName}>
                    Available Wallet Balance
                  </Text>
                  <Text style={styles.paymentItemPrice}>
                    ₹
                    {this.props.profile.credits
                      ? this.props.profile.credits
                      : 0}
                  </Text>
                </View>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.navigation.navigate('Recharge');
                }}
              >
                <Text style={styles.rechargeText}>Recharge Now!</Text>
              </TouchableWithoutFeedback>
            </View>
            <View styles={styles.buttons}>
              <Button
                style={{ marginBottom: 20 }}
                text={this.props.locked ? 'Unlock Cycle' : 'Lock Cycle'}
                onPress={this.handleLockPress}
              />
              <Button onPress={this.handleEndPress} border text="End Trip" />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.trip.loading,
  error: state.trip.error,
  errorMessage: state.trip.errorMessage,
  activeTrip: state.trip.activeTrip,
  tripEnded: state.trip.tripEnded,
  locked: state.trip.locked,
  profile: state.starter.profile
});

const mapDispatchToProps = {
  ...tripActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Trip);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242f3e'
  },
  mapContainer: {
    height: '40%'
  },
  map: {
    flex: 1
  },
  content: {
    width: '100%',
    padding: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  tripDetails: {
    flexDirection: 'row'
  },
  tripDetail: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  smallText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: 'white'
  },
  largeText: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: '#FF512F'
  },
  paymentDetails: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 20
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  paymentItemName: {
    fontFamily: 'poppins-regular',
    fontSize: 14
  },
  paymentItemPrice: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    color: '#FF512F'
  },
  rechargeText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: '#FF512F',
    marginLeft: 10,
    marginTop: 5
  }
});
