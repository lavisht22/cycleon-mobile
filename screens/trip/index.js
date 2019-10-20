import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';
import Button from '../../components/Button';

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

export default class Home extends React.Component {
  state = {
    region: {
      latitude: 30.3524,
      longitude: 76.3612,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Header leftIcon="ios-menu" headerText="Trip Details" />
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
                  <Text style={styles.largeText}>09:55 AM</Text>
                </View>

                <View style={styles.tripDetail}>
                  <Text style={styles.smallText}>End Time</Text>
                  <Text style={styles.largeText}>--:-- --</Text>
                </View>
              </View>
              <View style={styles.paymentDetails}>
                <View style={styles.paymentItem}>
                  <Text style={styles.paymentItemName}>Trip Cost</Text>
                  <Text style={styles.paymentItemPrice}>₹10</Text>
                </View>
                <View style={styles.paymentItem}>
                  <Text style={styles.paymentItemName}>
                    Available Wallet Balance
                  </Text>
                  <Text style={styles.paymentItemPrice}>₹100</Text>
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
              <Button style={{ marginBottom: 20 }} text="Lock Cycle" />
              <Button
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
                border
                text="End Trip"
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

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
