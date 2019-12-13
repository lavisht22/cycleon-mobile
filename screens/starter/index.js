import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import LoadingIndicator from '../../components/LoadingIndicator';
import * as starterActions from '../../actions/starter';

class Starter extends React.Component {
  componentDidMount() {
    this.props.getActiveTrip();
    this.props.getUserProfile();
  }

  componentDidUpdate() {
    if (this.props.completed && this.props.activeTrip) {
      this.props.navigation.navigate('Trip');
    } else if (this.props.completed && !this.props.activeTrip) {
      this.props.navigation.navigate('Home');
    }
    this.props.resetStarter();
  }

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

const mapStateToProps = state => ({
  completed: state.starter.completed,
  activeTrip: state.starter.activeTrip,
  loading: state.starter.loading
});

const mapDispatchToProps = {
  ...starterActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Starter);
