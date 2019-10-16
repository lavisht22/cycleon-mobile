import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Platform, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Carousel from '../../components/Carousel';

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

export default class Home extends React.Component {
  state = {
    location: null,
    errorMessage: null,
    region: {
      latitude: 30.3524,
      longitude: 76.3612,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    },
    markers: [
      {
        cycle_id: '123N',
        cycle_name: 'Hero Razorback',
        coordinates: {
          latitude: 30.352887,
          longitude: 76.369662
        }
      },
      {
        cycle_id: '223M',
        cycle_name: 'BMS',
        coordinates: {
          latitude: 30.354646,
          longitude: 76.366358
        }
      }
    ]
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this.getLocationAsync();
    }
  }

  componentWillUnmount() {
    clearInterval(this.watcher);
  }

  watchLocation = () => {
    this.watcher = setInterval(async () => {
      let location;
      try {
        location = await Location.getCurrentPositionAsync({});
        this.setState({
          location,
          region: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }
        });
      } catch (error) {
        this.setState({
          location: null,
          errorMessage: 'Please enable location service to view nearby cycles'
        });
      }
    }, 100);
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage:
          'Please grant permission to access location to view nearby cycles'
      });
    }

    let location;
    try {
      location = await Location.getCurrentPositionAsync({});
      this.setState({
        location,
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }
      });
      this.watchLocation();
    } catch (error) {
      this.setState({
        errorMessage: 'Please enable location service to view nearby cycles'
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <View style={styles.mapContainer}>
          {this.state.location !== null ? (
            <MapView
              initialRegion={this.state.region}
              style={styles.map}
              showsUserLocation
              onUserLocationChange={this.onUserLocationChange}
              customMapStyle={mapStyle}
            >
              {this.state.markers.map(marker => (
                <Marker
                  key={marker.cycle_id}
                  coordinate={marker.coordinates}
                  title={marker.cycle_id}
                  description={marker.cycle_name}
                  image={require('../../assets/icon_small.png')}
                />
              ))}
            </MapView>
          ) : (
            <Text>{this.state.errorMessage}</Text>
          )}
        </View>
        <LinearGradient
          colors={['rgba(36, 47, 62, 1)', 'rgba(15, 32, 39, 1)']}
          locations={[0, 1]}
          style={{ height: '45%' }}
        >
          <View style={styles.content}>
            <Carousel items={this.state.markers} />
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
    height: '55%'
  },
  map: {
    flex: 1
  },
  content: {
    width: '100%',
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
