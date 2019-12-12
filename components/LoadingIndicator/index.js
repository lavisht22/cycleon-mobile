import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerBox}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
  spinnerBox: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 25
  }
});
