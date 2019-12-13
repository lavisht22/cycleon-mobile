import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import * as rechargeActions from '../../actions/recharge';

class Recharge extends React.Component {
  state = {
    amount: 0
  };

  componentDidUpdate() {
    if (this.props.rechargeDone) {
      this.props.resetRecharge();
      this.props.navigation.navigate('Home');
    }
  }

  increaseAmount = amount => {
    this.setState({ amount: this.state.amount + amount });
  };

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
          headerText="Recharge"
        />
        <View style={styles.content}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.amountInput}>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#FF512F'
              }}
            >
              <TextInput
                editable
                maxLength={5}
                keyboardType="number-pad"
                style={{
                  ...styles.rupeeSymbol,
                  width: 200,
                  textAlign: 'center'
                }}
                value={this.state.amount === 0 ? '₹' : `₹${this.state.amount}`}
                onChangeText={text => {
                  let num = parseInt(text.split('₹')[1], 10);
                  if (isNaN(num)) {
                    num = 0;
                  }
                  this.setState({ amount: num });
                }}
                placeholderTextColor="#C0C0C0"
                selectionColor="#FF512F"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.amountInput}>
            <TouchableWithoutFeedback onPress={() => this.increaseAmount(50)}>
              <View style={styles.amountButton}>
                <Text style={styles.amountText}>+50</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.increaseAmount(100)}>
              <View style={styles.amountButton}>
                <Text style={styles.amountText}>+100</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.increaseAmount(200)}>
              <View style={styles.amountButton}>
                <Text style={styles.amountText}>+200</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.increaseAmount(500)}>
              <View style={styles.amountButton}>
                <Text style={styles.amountText}>+500</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {this.props.error ? (
            <Text style={{ ...styles.amountText, marginTop: 10 }}>
              {this.props.errorMessage}
            </Text>
          ) : null}
        </View>
        <Button
          text="Pay Now"
          onPress={() => this.props.rechargeAccount(this.state.amount)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.recharge.loading,
  error: state.recharge.error,
  errorMessage: state.recharge.errorMessage,
  rechargeDone: state.recharge.rechargeDone
});

const mapDispatchToProps = {
  ...rechargeActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Recharge);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 85,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(15, 32, 39, 1)',
    flex: 1
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  amountText: {
    fontFamily: 'poppins-regular',
    color: 'white',
    fontSize: 18
  },
  amountInput: {
    flexDirection: 'row',
    marginTop: 15
  },
  rupeeSymbol: {
    fontFamily: 'poppins-regular',
    fontSize: 36,
    color: '#FF512F'
  },
  amountButton: {
    backgroundColor: '#FF512F',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginHorizontal: 5
  }
});
