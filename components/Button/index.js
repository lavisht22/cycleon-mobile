import React from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';
import Gradient from '../Gradient';

export default function Button(props) {
  const { onPress, text, style, border } = props;

  let internalViewStyles;

  if (border) {
    internalViewStyles = {
      padding: 15,
      borderRadius: 12,
      backgroundColor: 'rgba(15, 32, 39, 1)'
    };
  } else {
    internalViewStyles = {
      padding: 15,
      borderRadius: 12,
      backgroundColor: '#transparent'
    };
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <Gradient gradientColor="orange" style={styles.gradient}>
          <View style={internalViewStyles}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </Gradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15
  },
  gradient: {
    padding: 3,
    borderRadius: 15
  },
  text: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
    color: '#fff'
  }
});
