import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Gradient from '../Gradient';

export default function Button(props) {
  const { onPress, text, style, border, altText } = props;

  let internalViewStyles;

  if (border) {
    internalViewStyles = {
      padding: 15,
      borderRadius: 12,
      backgroundColor: 'rgba(15, 32, 39, 1)',
      flexDirection: 'row',
      justifyContent: 'space-between'
    };
  } else {
    internalViewStyles = {
      padding: 15,
      borderRadius: 12,
      backgroundColor: '#transparent',
      flexDirection: 'row',
      justifyContent: 'space-between'
    };
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <Gradient gradientColor="orange" style={styles.gradient}>
          <View style={internalViewStyles}>
            <Text style={styles.text}>{text}</Text>
            {altText ? <Text style={styles.altText}>{altText}</Text> : null}
          </View>
        </Gradient>
      </View>
    </TouchableOpacity>
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
  },
  altText: {
    fontFamily: 'poppins-regular',
    fontSize: 18,
    color: '#fff'
  }
});
