import React from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import { yellow } from 'ansi-colors';

export default class Rides extends React.Component {
  state = {
    rides: [
      {
        date: Date.now(),
        amount: 10,
        cycle_id: '123N',
        ride_id: '1'
      },
      {
        date: Date.now(),
        amount: 50,
        cycle_id: '223M',
        ride_id: '2'
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Header
          transparent
          leftIcon="ios-arrow-back"
          leftIconPress={() => {
            this.props.navigation.goBack();
          }}
          headerText="Ride History"
        />
        <FlatList
          data={this.state.rides}
          keyExtractor={item => item.ride_id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={styles.cycleId}>{item.cycle_id}</Text>
                <Text style={styles.date}>
                  {new Date(item.date).toDateString()}
                </Text>
              </View>
              <Text style={styles.amount}>{`₹${item.amount}`}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 85,
    flex: 1,
    backgroundColor: 'rgba(15, 32, 39, 1)'
  },
  listItem: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15
  },
  cycleId: {
    fontFamily: 'poppins-regular',
    fontSize: 30,
    color: 'black'
  },
  date: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: 'black'
  },
  amount: {
    fontFamily: 'poppins-bold',
    fontSize: 36,
    color: '#FF512F'
  }
});
