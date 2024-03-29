/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

export default class DurationSelector extends React.Component {
  render() {
    const selectedDuration = this.props.selectedNum;

    return (
      <View style={styles.durationSelector}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.changeDuration(1);
          }}
        >
          <View
            style={
              selectedDuration === 1
                ? styles.selectedDurationButton
                : styles.durationButton
            }
          >
            <Text style={styles.durationButtonText}>1 Hr</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.changeDuration(2);
          }}
        >
          <View
            style={
              selectedDuration === 2
                ? styles.selectedDurationButton
                : styles.durationButton
            }
          >
            <Text style={styles.durationButtonText}>2 Hr</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.changeDuration(3);
          }}
        >
          <View
            style={
              selectedDuration === 3
                ? styles.selectedDurationButton
                : styles.durationButton
            }
          >
            <Text style={styles.durationButtonText}>3 Hr</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.changeDuration(4);
          }}
        >
          <View
            style={
              selectedDuration === 4
                ? styles.selectedDurationButton
                : styles.durationButton
            }
          >
            <Text style={styles.durationButtonText}>4 Hr</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  durationSelector: {
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  durationButton: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedDurationButton: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FF512F',
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  durationButtonText: {
    fontFamily: 'poppins-regular',
    fontSize: 18
  }
});
