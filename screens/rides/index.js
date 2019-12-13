import React from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';

import * as ridesActions from '../../actions/rides';

class Rides extends React.Component {
  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      () => {
        this.props.getRides();
      }
    );
  }

  componentWillUnmount() {
    this.didFocusSubscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? <LoadingIndicator /> : null}
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
          data={this.props.rides}
          keyExtractor={item => item.ride_id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View>
                <Text style={styles.cycleId}>{item.cycle.cycle_id}</Text>
                <Text style={styles.date}>
                  {new Date(item.start).toDateString()}
                </Text>
              </View>
              <Text style={styles.amount}>{`₹${item.fare}`}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.rides.loading,
  error: state.rides.error,
  errorMessage: state.rides.errorMessage,
  rides: state.rides.rides
});

const mapDispatchToProps = {
  ...ridesActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Rides);

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
