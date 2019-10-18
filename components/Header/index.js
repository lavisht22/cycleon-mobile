import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {
  const { headerText, leftIcon, rightIcon } = props;
  return (
    <LinearGradient
      colors={['rgba(15, 32, 39, 1)', 'rgba(36, 47, 62, 0.5)']}
      locations={[0, 1]}
      style={styles.gradient}
    >
      {leftIcon ? (
        <Ionicons
          style={styles.leftIcon}
          name={leftIcon}
          size={30}
          color="white"
        />
      ) : null}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
      {rightIcon ? (
        <Ionicons
          style={styles.rightIcon}
          name={rightIcon}
          size={30}
          color="white"
        />
      ) : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: 65,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-end',
    zIndex: 5,
    paddingHorizontal: 20
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'poppins-regular',
    fontSize: 22,
    color: 'white'
  },
  leftIcon: {
    position: 'absolute',
    top: 30,
    left: 30
  },
  rightIcon: {
    position: 'relative'
  }
});
