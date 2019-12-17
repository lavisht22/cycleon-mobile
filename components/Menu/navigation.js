import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

function Navigation(props) {
  const { navigation } = props;
  return (
    <View style={{ marginTop: 20, padding: 30 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Rides');
        }}
      >
        <Text style={styles.text}>My Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Recharge');
        }}
      >
        <Text style={styles.text}>Recharge Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          navigation.navigate('Start');
        }}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 20,
    marginVertical: 10
  }
});

export default withNavigation(Navigation);
